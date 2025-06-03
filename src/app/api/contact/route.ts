// app/api/contact/route.ts

import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export const dynamic = 'force-dynamic'; // Ensures this API route isn't statically rendered

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate input
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('earthconn');
    const collection = db.collection('contacts');

    await collection.insertOne({
      name,
      email,
      message,
      timestamp: new Date(),
    });

    return NextResponse.json({ message: 'Contact saved successfully' }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
