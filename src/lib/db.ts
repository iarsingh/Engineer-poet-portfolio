import { PrismaClient } from '../generated/prisma';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

export { prisma };

// Poem operations
export async function getAllPublishedPoems() {
  return prisma.poem.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  });
}

export async function createPoem(title: string, content: string) {
  return prisma.poem.create({
    data: {
      title,
      content,
      published: true,
    },
  });
}

// Message operations
export async function createMessage(name: string, email: string, content: string) {
  return prisma.message.create({
    data: {
      name,
      email,
      content,
      read: false,
    },
  });
}

export async function getAllMessages() {
  return prisma.message.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

export async function markMessageAsRead(id: string) {
  return prisma.message.update({
    where: { id },
    data: { read: true },
  });
} 