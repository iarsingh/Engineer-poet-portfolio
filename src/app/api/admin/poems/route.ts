import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/auth.config'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const poems = await prisma.poem.findMany({
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(poems)
  } catch (error) {
    console.error('Error fetching poems:', error)
    return NextResponse.json(
      { error: 'Failed to fetch poems' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const poem = await prisma.poem.create({
      data: {
        title: body.title,
        content: body.content,
        published: body.published || false
      }
    })

    return NextResponse.json(poem)
  } catch (error) {
    console.error('Error creating poem:', error)
    return NextResponse.json(
      { error: 'Failed to create poem' },
      { status: 500 }
    )
  }
} 