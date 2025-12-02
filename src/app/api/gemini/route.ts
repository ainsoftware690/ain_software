
import { NextResponse } from 'next/server';
export const runtime = "nodejs";


let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 4000;

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
      "https://earthconntravels.com/reservationKart"
    ];

    const responses = await Promise.allSettled(urls.map(url => fetch(url)));
    const texts = await Promise.all(
      responses.map(async (res, i) => {
        if (res.status === "fulfilled" && res.value.ok) {
          const html = await res.value.text();
          return `\n\n---\nPage: ${urls[i]}\n${html.replace(/<[^>]*>?/gm, '')}`;
        }
        return '';
      })
    );

    return texts.join('\n');
  } catch (err) {
    console.error('Error fetching site data:', err);
    return '';
  }
}

export async function POST(req: Request) {
  try {
    const now = Date.now();
    if (now - lastRequestTime < MIN_REQUEST_INTERVAL) {
      const wait = Math.ceil((MIN_REQUEST_INTERVAL - (now - lastRequestTime)) / 1000);
      return NextResponse.json({ 
        success: false, 
        error: `⏳ Please wait ${wait}s between messages.` 
      }, { status: 429 });
    }
    lastRequestTime = now;

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ 
        success: false, 
        error: 'API key missing' 
      }, { status: 500 });
    }

    const body = await req.json();
    const { message, conversationHistory } = body;

    if (!message) {
      return NextResponse.json({ 
        success: false, 
        error: 'Message required' 
      }, { status: 400 });
    }

    console.log("Fetching website data...");
    const websiteData = await fetchWebsiteContent();

    // 🎯 Smart Prompt - handles both website & general queries
    const systemPrompt = `
You are an intelligent assistant for Earthconn Travels Pvt. Ltd.

**Your Role:**
1. If the user asks about Earthconn Travels, travel services, bookings, company policies, or anything related to the company → use the company data below to answer accurately.
2. If the user asks general questions (weather, recipes, coding, news, etc.) → answer normally as a helpful AI assistant.

**Company Data (use only when relevant):**
${websiteData}

---

**Instructions:**
- Be friendly and helpful
- For company questions: use only the provided company data
- For general questions: answer from your general knowledge
- If you're unsure whether something is about the company, assume it's general
- Always be conversational and natural
`;

    let history = '';
    if (conversationHistory?.length > 0) {
      history = conversationHistory
        .slice(-4)
        .map((msg: { role: string; content: string }) =>
          `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`
        )
        .join('\n');
    }

    const fullPrompt = `${systemPrompt}\n\nConversation History:\n${history}\n\nUser: ${message}\n\nAssistant:`;

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: fullPrompt }] }],
        generationConfig: {
          temperature: 0.7, // Slightly lower for more focused responses
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048
        }
      })
    });

    const data = await response.json();
    const output = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!output) throw new Error("No text generated");

    return NextResponse.json({ success: true, message: output });

  } catch (err: any) {
    console.error("Gemini API error:", err);
    return NextResponse.json({ 
      success: false, 
      error: err.message || "Failed" 
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: "OK", 
    message: "Gemini API route is working" 
  });
}