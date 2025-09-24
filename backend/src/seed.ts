import prisma from './lib/prisma';
import bcrypt from 'bcrypt';

export async function seedDatabase() {
  try {
    // Verifica se o admin já existe
    const adminExists = await prisma.user.findUnique({
      where: { email: 'admin@farmasaude.com' }
    });

    if (!adminExists) {
      // Cria o usuário admin
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await prisma.user.create({
        data: {
          email: 'admin@farmasaude.com',
          name: 'Admin',
          password: hashedPassword,
          role: 'SELLER'
        }
      });
      console.log('👤 Usuário admin criado com sucesso!');
    } else {
      // Adicione esta linha
      console.log('✅ Usuário admin já existe. Nenhuma ação foi necessária.');
    }
  } catch (error) {
    console.error('Erro ao popular o banco com o usuário admin:', error);
  }
}