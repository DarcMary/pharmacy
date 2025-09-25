import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { authMiddleware } from '../middlewares/auth';
import { sellerMiddleware } from '../middlewares/auth';

const authRouter = Router();
const authController = new AuthController();

// Rotas públicas
authRouter.post('/login', authController.login);
authRouter.post('/register-customer', authController.registerCustomer);

// Rotas protegidas
authRouter.post('/register-seller', authMiddleware, sellerMiddleware, authController.registerSeller);

export default authRouter;