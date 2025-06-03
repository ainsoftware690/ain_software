// Force dynamic to prevent static optimization during build
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Get MongoDB client
    const client = await clientPromise;
    
    // Connect to the correct database (earthconn)
    const db = client.db("earthconn");
    const collection = db.collection('contacts');

    // Insert the document
    await collection.insertOne({
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp: new Date(),
    });

    // Return success
    return NextResponse.json({ message: 'Contact saved successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
