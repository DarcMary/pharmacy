import prisma from './lib/prisma';
import bcrypt from 'bcrypt';

export async function seedDatabase() {
  try {
    console.log('🌱 Iniciando seed do banco de dados...');

    // Verifica se o admin já existe
    let adminUser = await prisma.user.findUnique({
      where: { email: 'admin@farmasaude.com' }
    });

    if (!adminUser) {
      // Cria o usuário admin
      const hashedPassword = await bcrypt.hash('admin123', 10);
      adminUser = await prisma.user.create({
        data: {
          email: 'admin@farmasaude.com',
          name: 'Admin FarmaSaúde',
          password: hashedPassword,
          role: 'SELLER'
        }
      });
      console.log('👤 Usuário admin criado com sucesso!');
    } else {
      console.log('✅ Usuário admin já existe.');
    }

    // Verifica se já existem produtos
    const productCount = await prisma.product.count();
    
    if (productCount === 0) {
      console.log('📦 Criando produtos de exemplo...');
      
      const sampleProducts = [
        {
          name: 'Paracetamol 500mg',
          description: 'Analgésico e antitérmico para dor e febre',
          price: 8.50,
          category: 'Medicamentos',
          brand: 'Genérico',
          quantity: 100,
          inStock: true,
          images: ['/images/products/paracetamol.jpg'],
          prescription: false,
          createdBy: adminUser.id
        },
        {
          name: 'Ibuprofeno 600mg',
          description: 'Anti-inflamatório para dores e inflamações',
          price: 12.90,
          category: 'Medicamentos',
          brand: 'Advil',
          quantity: 80,
          inStock: true,
          images: ['/images/products/ibuprofeno.jpg'],
          prescription: false,
          createdBy: adminUser.id
        },
        {
          name: 'Dipirona 500mg',
          description: 'Analgésico e antitérmico de ação rápida',
          price: 6.75,
          category: 'Medicamentos',
          brand: 'Novalgina',
          quantity: 120,
          inStock: true,
          images: ['/images/products/dipirona.jpg'],
          prescription: false,
          createdBy: adminUser.id
        },
        {
          name: 'Vitamina C 1g',
          description: 'Suplemento vitamínico para imunidade',
          price: 15.80,
          category: 'Vitaminas',
          brand: 'Centrum',
          quantity: 60,
          inStock: true,
          images: ['/images/products/vitamina-c.jpg'],
          prescription: false,
          createdBy: adminUser.id
        },
        {
          name: 'Protetor Solar FPS 60',
          description: 'Proteção solar para pele sensível',
          price: 35.90,
          category: 'Dermocosméticos',
          brand: 'La Roche Posay',
          quantity: 40,
          inStock: true,
          images: ['/images/products/protetor-solar.jpg'],
          prescription: false,
          createdBy: adminUser.id
        },
        {
          name: 'Shampoo Anticaspa',
          description: 'Tratamento para caspa e coceira no couro cabeludo',
          price: 22.50,
          category: 'Higiene',
          brand: 'Head & Shoulders',
          quantity: 35,
          inStock: true,
          images: ['/images/products/shampoo.jpg'],
          prescription: false,
          createdBy: adminUser.id
        },
        {
          name: 'Termômetro Digital',
          description: 'Termômetro digital com display LCD',
          price: 28.90,
          category: 'Equipamentos',
          brand: 'G-Tech',
          quantity: 25,
          inStock: true,
          images: ['/images/products/termometro.jpg'],
          prescription: false,
          createdBy: adminUser.id
        },
        {
          name: 'Máscara Cirúrgica (50un)',
          description: 'Máscaras descartáveis tripla camada',
          price: 45.00,
          category: 'Equipamentos',
          brand: 'Descarpack',
          quantity: 50,
          inStock: true,
          images: ['/images/products/mascara.jpg'],
          prescription: false,
          createdBy: adminUser.id
        },
        {
          name: 'Omeprazol 20mg',
          description: 'Protetor gástrico para acidez e azia',
          price: 18.40,
          category: 'Medicamentos',
          brand: 'Genérico',
          quantity: 70,
          inStock: true,
          images: ['/images/products/omeprazol.jpg'],
          prescription: false,
          createdBy: adminUser.id
        },
        {
          name: 'Multivitamínico',
          description: 'Complexo com vitaminas e minerais essenciais',
          price: 42.80,
          category: 'Vitaminas',
          brand: 'Centrum',
          quantity: 30,
          inStock: true,
          images: ['/images/products/multivitaminico.jpg'],
          prescription: false,
          createdBy: adminUser.id
        }
      ];

      // Criar produtos em lote
      await prisma.product.createMany({
        data: sampleProducts
      });

      console.log(`✅ ${sampleProducts.length} produtos criados com sucesso!`);
    } else {
      console.log(`✅ Banco já possui ${productCount} produtos.`);
    }

    // Criar um cliente de exemplo
    const customerExists = await prisma.user.findUnique({
      where: { email: 'cliente@exemplo.com' }
    });

    if (!customerExists) {
      const hashedPassword = await bcrypt.hash('123456', 10);
      await prisma.user.create({
        data: {
          email: 'cliente@exemplo.com',
          name: 'Cliente Exemplo',
          password: hashedPassword,
          role: 'CUSTOMER',
          cpf: '12345678901',
          phone: '11999999999',
          birthDate: new Date('1990-01-01')
        }
      });
      console.log('👤 Cliente exemplo criado com sucesso!');
    } else {
      console.log('✅ Cliente exemplo já existe.');
    }

    console.log('🎉 Seed concluído com sucesso!');
    console.log('\n📝 Credenciais criadas:');
    console.log('🔑 Admin: admin@farmasaude.com / admin123');
    console.log('🔑 Cliente: cliente@exemplo.com / 123456');

  } catch (error) {
    console.error('❌ Erro ao popular o banco:', error);
    throw error;
  }
}