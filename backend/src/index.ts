import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

// Configura o dotenv com o caminho absoluto do arquivo .env
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Log para debug das variáveis de ambiente
console.log('Ambiente carregado:', {
  NODE_ENV: process.env.NODE_ENV,
  JWT_SECRET: process.env.JWT_SECRET?.substring(0, 10) + '...' // Mostra só o início da chave por segurança
});

import { AuthController } from './controllers/AuthController';
import { authMiddleware } from './middlewares/auth';
import { sellerAuth } from './middlewares/sellerAuth';
import { seedDatabase } from './seed';



const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors({
  origin: 'http://localhost:5173', // URL do frontend
  credentials: true
}));
app.use(express.json());

// Controllers
const authController = new AuthController();

// Rota de teste para debug
app.get('/test-token', (req, res) => {
  const token = req.headers.authorization;
  console.log('Token recebido:', token);
  res.json({ token });
});

// Rotas de autenticação
app.post('/auth/login', authController.login);
app.post('/auth/register-customer', authController.registerCustomer);
app.post('/auth/register-seller', authMiddleware, sellerAuth, authController.registerSeller);

// Inicialização do servidor
app.listen(port, async () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
  
  // Inicializa o banco de dados com o usuário admin
  await seedDatabase();
});