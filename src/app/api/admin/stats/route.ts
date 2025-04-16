import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/auth.config'

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const [totalPoems, publishedPoems, totalMessages, unreadMessages] = await Promise.all([
      prisma.poem.count(),
      prisma.poem.count({ where: { published: true } }),
      prisma.message.count(),
      prisma.message.count({ where: { read: false } })
    ]);

    return NextResponse.json({
      totalPoems,
      publishedPoems,
      totalMessages,
      unreadMessages
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
} 