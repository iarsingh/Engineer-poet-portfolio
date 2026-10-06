import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const globalForPrisma = globalThis as typeof globalThis & {
  prisma?: ReturnType<typeof prismaClientSingleton>;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

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
      message: content,
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