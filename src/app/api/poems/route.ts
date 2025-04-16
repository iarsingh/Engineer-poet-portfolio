import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const poems = await prisma.poem.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(poems);
  } catch (error) {
    console.error('Error fetching poems:', error);
    return NextResponse.json(
      { error: 'Failed to fetch poems' },
      { status: 500 }
    );
  }
} 