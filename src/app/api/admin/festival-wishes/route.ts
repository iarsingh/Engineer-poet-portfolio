import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const wishes = await prisma.festivalWish.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(wishes);
  } catch (error) {
    console.error('Error fetching festival wishes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch festival wishes' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, content, imageUrl, published } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    const wish = await prisma.festivalWish.create({
      data: {
        title,
        content,
        imageUrl: imageUrl || null,
        published: published || false
      }
    });

    return NextResponse.json(wish);
  } catch (error) {
    console.error('Error creating festival wish:', error);
    return NextResponse.json(
      { error: 'Failed to create festival wish' },
      { status: 500 }
    );
  }
} 