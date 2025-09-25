import { seedDatabase } from './seed';
import prisma from './lib/prisma';

async function main() {
  try {
    await seedDatabase();
  } catch (error) {
    console.error('Erro:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();