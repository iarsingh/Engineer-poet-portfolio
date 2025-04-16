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
    const { title, content, imageUrl, published } = body;

    const wish = await prisma.festivalWish.update({
      where: { id },
      data: {
        title,
        content,
        imageUrl,
        published,
      },
    });

    return NextResponse.json(wish);
  } catch (error) {
    console.error('Error updating festival wish:', error);
    return NextResponse.json(
      { error: 'Failed to update festival wish' },
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
    await prisma.festivalWish.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting festival wish:', error);
    return NextResponse.json(
      { error: 'Failed to delete festival wish' },
      { status: 500 }
    );
  }
} 