const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔄 Tentando regenerar Prisma Client...');

// Função para tentar várias vezes
async function regeneratePrisma(attempts = 3) {
  for (let i = 0; i < attempts; i++) {
    try {
      console.log(`Tentativa ${i + 1}/${attempts}...`);
      
      // Remover pasta .prisma
      const prismaPath = path.join(__dirname, 'node_modules', '.prisma');
      if (fs.existsSync(prismaPath)) {
        fs.rmSync(prismaPath, { recursive: true, force: true });
        console.log('✅ Pasta .prisma removida');
      }
      
      // Aguardar um pouco
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Executar prisma generate
      await new Promise((resolve, reject) => {
        exec('npx prisma generate', (error, stdout, stderr) => {
          if (error) {
            console.log(`❌ Erro na tentativa ${i + 1}:`, error.message);
            if (i === attempts - 1) reject(error);
          } else {
            console.log('✅ Prisma Client gerado com sucesso!');
            console.log(stdout);
            resolve();
          }
        });
      });
      
      break; // Sucesso, sair do loop
      
    } catch (error) {
      if (i === attempts - 1) {
        console.log('❌ Falha após todas as tentativas:', error.message);
        console.log('\n🚨 WORKAROUND: Execute manualmente no terminal como administrador:');
        console.log('cd "C:\\Users\\Douglas Fernandes\\Downloads\\pharmacy-main\\backend"');
        console.log('npx prisma generate');
      } else {
        console.log(`⏰ Aguardando antes da próxima tentativa...`);
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  }
}

regeneratePrisma();