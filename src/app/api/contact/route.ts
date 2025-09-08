
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string; // put this in .env.local
const client = new MongoClient(uri);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { full_name, email, type_of_service, message } = body;

    await client.connect();
    const db = client.db("earthconn");
    const collection = db.collection("contacts");

    await collection.insertOne({
      full_name,
      email,
      type_of_service,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, message: "Message stored successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Failed to store message" }, { status: 500 });
  }
}
