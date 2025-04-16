import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../auth/[...nextauth]/route';

export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const id = request.nextUrl.pathname.split('/').pop();
    const body = await request.json();
    const { title, content, published } = body;

    const poem = await prisma.poem.update({
      where: { id },
      data: {
        title,
        content,
        published,
      },
    });

    return NextResponse.json(poem);
  } catch (error) {
    console.error('Error updating poem:', error);
    return NextResponse.json(
      { error: 'Failed to update poem' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const id = request.nextUrl.pathname.split('/').pop();
    await prisma.poem.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting poem:', error);
    return NextResponse.json(
      { error: 'Failed to delete poem' },
      { status: 500 }
    );
  }
} 