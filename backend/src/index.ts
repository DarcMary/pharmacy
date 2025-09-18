import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AuthController } from './controllers/AuthController';
import { authMiddleware, sellerMiddleware } from './middlewares/auth';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Controllers
const authController = new AuthController();

// Rotas de autenticação
app.post('/auth/login', authController.login);
app.post('/auth/register/customer', authController.registerCustomer);
app.post('/auth/register/seller', authMiddleware, sellerMiddleware, authController.registerSeller);

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});