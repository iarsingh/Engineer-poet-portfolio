import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/auth.config';
import { prisma } from '@/lib/prisma';

export async function PATCH(
  request: Request,
  context: any
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const message = await prisma.message.update({
      where: { id: context.params.id },
      data: { read: true },
    });

    return Response.json(message);
  } catch (error) {
    console.error('Error updating message:', error);
    return Response.json(
      { error: 'Failed to update message' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  context: any
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await prisma.message.delete({
      where: { id: context.params.id },
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error deleting message:', error);
    return Response.json(
      { error: 'Failed to delete message' },
      { status: 500 }
    );
  }
} 