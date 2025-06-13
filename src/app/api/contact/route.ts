// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb'; // ✅ Keep this import as-is

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Incoming Body:", body);

    // ✅ Updated to match frontend field names
    const { full_name, email, message, type_of_service } = body;

    // ✅ Check for missing fields
    if (!full_name || !email || !message || !type_of_service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('earthconn');
    const collection = db.collection('contacts');

    // ✅ Save in DB using consistent naming
    await collection.insertOne({
      name: full_name,
      email,
      message,
      type_of_service,
      timestamp: new Date(),
    });

    return NextResponse.json({ message: 'Contact saved successfully' }, { status: 200 });

  } catch (error) {
    console.error('API error [POST /api/contact]:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
