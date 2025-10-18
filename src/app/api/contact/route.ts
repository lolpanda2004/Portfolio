import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.description) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create the data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data');
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }

    // Path to the JSON file
    const filePath = path.join(dataDir, 'contact_requests.json');
    
    // Read existing data or initialize empty array
    let existingData = [];
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      existingData = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist yet, will be created
      existingData = [];
    }

    // Add new contact request with a unique ID
    const newRequest = {
      id: Date.now().toString(),
      name: body.name,
      email: body.email,
      subject: body.subject,
      description: body.description,
      timestamp: body.timestamp || new Date().toISOString(),
      status: 'unread'
    };

    existingData.push(newRequest);

    // Write updated data back to file
    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2), 'utf-8');

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact request saved successfully',
        id: newRequest.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error saving contact request:', error);
    return NextResponse.json(
      { error: 'Failed to save contact request' },
      { status: 500 }
    );
  }
}