import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { Resend } from "resend";

const uri = process.env.MONGODB_URI as string;
const resend = new Resend(process.env.RESEND_API_KEY);

if (!uri) throw new Error("MONGODB_URI not defined");

const client = new MongoClient(uri);

export async function POST(req: Request) {
  try {
    const { full_name, email, type_of_service, message } = await req.json();

    // 1️⃣ Save to MongoDB
    await client.connect();
    const db = client.db("earthconn");

    await db.collection("contacts").insertOne({
      full_name,
      email,
      type_of_service,
      message,
      createdAt: new Date(),
    });

    // 2️⃣ Admin email (YOU)
    await resend.emails.send({
      from: "EarthConn <onboarding@resend.dev>", 
      to: ["ainsoftware89@gmail.com"],           
      replyTo: email,
      subject: `New Contact Request: ${type_of_service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${full_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${type_of_service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 3️⃣ Auto-reply to user
    await resend.emails.send({
      from: "EarthConn <onboarding@resend.dev>",
      to: [email],
      subject: "We received your message",
      html: `
        <p>Hi ${full_name},</p>
        <p>Thanks for contacting EarthConn. Our team will get back to you shortly.</p>
        <p>Regards,<br/>EarthConn Team</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
