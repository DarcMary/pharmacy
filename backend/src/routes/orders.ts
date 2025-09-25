import { Router } from 'express';
import { OrderController } from '../controllers/OrderController';
import { authMiddleware } from '../middlewares/auth';

const router = Router();

// Todas as rotas precisam de autenticação
router.use(authMiddleware);

// Criar pedido (checkout)
router.post('/', OrderController.createOrder);

// Listar pedidos do cliente logado
router.get('/my-orders', OrderController.getCustomerOrders);

// Listar todas as vendas (apenas vendedores)
router.get('/all-sales', OrderController.getAllSales);

// Buscar pedido específico
router.get('/:orderId', OrderController.getOrderById);

// Cancelar pedido
router.put('/:orderId/cancel', OrderController.cancelOrder);

export default router;