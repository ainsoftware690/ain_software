import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db('earthconn'); // Ensure this name matches your cluster
    const collection = db.collection('contacts');

    await collection.insertOne({
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp: new Date(),
    });

    return NextResponse.json({ message: 'Contact saved successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
