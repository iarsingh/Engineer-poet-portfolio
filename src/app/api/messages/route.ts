import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

// Simple language detection based on character sets
function detectLanguage(text: string): { language: string; confidence: number } {
  const cleanText = text.trim().toLowerCase();
  
  // Common patterns for different scripts
  const patterns = {
    devanagari: /[\u0900-\u097F]/g,
    latin: /[a-z]/g,
    chinese: /[\u4E00-\u9FFF]/g,
    japanese: /[\u3040-\u309F\u30A0-\u30FF]/g,
    arabic: /[\u0600-\u06FF]/g,
    cyrillic: /[\u0400-\u04FF]/g,
  };

  // Count characters matching each pattern
  const counts = Object.entries(patterns).map(([script, pattern]) => {
    const matches = cleanText.match(pattern);
    return {
      script,
      count: matches ? matches.length : 0,
    };
  });

  // Find the dominant script
  const total = counts.reduce((sum, { count }) => sum + count, 0);
  const dominant = counts.reduce((max, current) => 
    current.count > max.count ? current : max
  , { script: 'unknown', count: 0 });

  // Calculate confidence based on the percentage of dominant script
  const confidence = total > 0 ? dominant.count / total : 0;

  return {
    language: dominant.script,
    confidence: parseFloat(confidence.toFixed(2))
  };
}

// Function to check if text is meaningful using basic heuristics
function isMeaningfulMessage(text: string): boolean {
  // Remove whitespace and check length
  const cleanText = text.trim();
  if (cleanText.length < 10) return false;

  // Check for repetitive characters
  const repetitivePattern = /(.)\1{4,}/;
  if (repetitivePattern.test(cleanText)) return false;

  // Check for minimum word count (works for most scripts that use spaces)
  const wordCount = cleanText.split(/\s+/).length;
  if (wordCount < 3) return false;

  // Check for meaningful character variety (at least 8 different characters)
  const uniqueChars = new Set(cleanText.split('')).size;
  if (uniqueChars < 8) return false;

  return true;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, content, recipientType } = body;

    console.log('Received message request:', { name, email, recipientType, contentLength: content?.length });

    // Validate required fields
    if (!name || !email || !content || !recipientType) {
      console.error('Missing required fields:', { name, email, content: !!content, recipientType });
      return NextResponse.json(
        { error: 'Name, email, message, and recipient type are required' },
        { status: 400 }
      );
    }

    // Validate recipient type
    const validRecipientTypes = ['engineer', 'poet', 'both'];
    if (!validRecipientTypes.includes(recipientType)) {
      console.error('Invalid recipient type:', recipientType);
      return NextResponse.json(
        { error: 'Invalid recipient type' },
        { status: 400 }
      );
    }

    // Check if message is meaningful
    if (!isMeaningfulMessage(content)) {
      console.error('Message not meaningful:', { contentLength: content.length, wordCount: content.split(/\s+/).length });
      return NextResponse.json(
        { error: 'Please provide a meaningful message with at least 10 characters and 3 words' },
        { status: 400 }
      );
    }

    // Detect language
    const { language, confidence } = detectLanguage(content);
    console.log('Language detection:', { language, confidence });

    // Create message in database
    const message = await prisma.message.create({
      data: {
        name,
        email,
        message: content,
        read: false
      },
    });

    console.log('Message created successfully:', { messageId: message.id });
    return NextResponse.json(message, { status: 201 });
  } catch (error) {
    console.error('Error creating message:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send message' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
} 