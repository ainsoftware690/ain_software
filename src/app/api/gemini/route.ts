/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

export const runtime = "nodejs";

// ⏱ Simple rate limiting (per instance)
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 4000; // 4 seconds

// 🌐 Fetch website content safely
async function fetchWebsiteContent() {
  try {
    const urls = [
      "https://earthconntravels.com/",
      "https://earthconntravels.com/about",
      "https://earthconntravels.com/services",
      "https://earthconntravels.com/certifications",
      "https://earthconntravels.com/contact",
      "https://earthconntravels.com/privacy-policy",
      "https://earthconntravels.com/terms-and-conditions",
      "https://earthconntravels.com/refund-policy",
      "https://earthconntravels.com/reservationKart",
    ];

    const responses = await Promise.allSettled(
      urls.map((url) => fetch(url))
    );

    const texts = await Promise.all(
      responses.map(async (res, i) => {
        if (res.status === "fulfilled" && res.value.ok) {
          const html = await res.value.text();
          const cleanText = html.replace(/<[^>]*>?/gm, "");
          return `\n---\nPage: ${urls[i]}\n${cleanText}`;
        }
        return "";
      })
    );

    // 🔴 IMPORTANT: limit size to avoid token overflow
    return texts.join("\n").slice(0, 12000);
  } catch (error) {
    console.error("Website fetch error:", error);
    return "";
  }
}

export async function POST(req: Request) {
  try {
    // ⏳ Rate limiting
    const now = Date.now();
    if (now - lastRequestTime < MIN_REQUEST_INTERVAL) {
      const wait = Math.ceil(
        (MIN_REQUEST_INTERVAL - (now - lastRequestTime)) / 1000
      );
      return NextResponse.json(
        {
          success: false,
          error: `⏳ Please wait ${wait}s before sending another message.`,
        },
        { status: 429 }
      );
    }
    lastRequestTime = now;

    // 🔑 API key check
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { success: false, error: "Gemini API key missing" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { message, conversationHistory } = body;

    if (!message) {
      return NextResponse.json(
        { success: false, error: "Message is required" },
        { status: 400 }
      );
    }

    console.log("Fetching website content...");
    const websiteData = await fetchWebsiteContent();

    // 🧠 System prompt
    const systemPrompt = `
You are an intelligent assistant for Earthconn Travels Pvt. Ltd.

Rules:
1. If the question is about Earthconn Travels, its services, bookings, policies, or company info → use ONLY the company data below.
2. If the question is general (coding, food, weather, etc.) → answer normally as a helpful AI.
3. Be friendly, clear, and professional.
4. If data is missing, say so politely.

Company Data:
${websiteData}
`;

    // 🧾 Conversation history (last 4 messages)
    let history = "";
    if (Array.isArray(conversationHistory) && conversationHistory.length > 0) {
      history = conversationHistory
        .slice(-4)
        .map(
          (msg: { role: string; content: string }) =>
            `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`
        )
        .join("\n");
    }

    const fullPrompt = `
${systemPrompt}

Conversation History:
${history}

User: ${message}

Assistant:
`;

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: fullPrompt }] }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      }),
    });

    // ❌ HTTP error handling
    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini HTTP error:", errText);
      throw new Error("Gemini API request failed");
    }

    const data = await response.json();

    // 🪵 Debug log (safe to remove later)
    console.log("Gemini raw response:", JSON.stringify(data, null, 2));

    // ✅ Safe text extraction
    const output =
      data?.candidates?.[0]?.content?.parts
        ?.map((p: any) => p.text)
        ?.join("") ?? "";

    // 🚑 Fallback if Gemini blocks or returns empty
    if (!output.trim()) {
      return NextResponse.json({
        success: true,
        message:
          "I’m unable to answer that right now. Please try rephrasing your question.",
      });
    }

    return NextResponse.json({
      success: true,
      message: output,
    });
  } catch (error) {
    const msg =
      error instanceof Error ? error.message : "Something went wrong";
    console.error("Gemini API error:", error);

    return NextResponse.json(
      { success: false, error: msg },
      { status: 500 }
    );
  }
}

// ✅ Health check
export async function GET() {
  return NextResponse.json({
    status: "OK",
    message: "Gemini API route is working",
  });
}
