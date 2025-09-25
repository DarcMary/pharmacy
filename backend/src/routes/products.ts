import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';
import { authMiddleware as auth } from '../middlewares/auth';

const router = Router();
const productController = new ProductController();

// Rotas públicas
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);

// Rotas protegidas (apenas vendedores)
router.post('/', auth, productController.uploadImages, productController.createProduct);
router.put('/:id', auth, productController.uploadImages, productController.updateProduct);
router.delete('/:id', auth, productController.deleteProduct);
router.patch('/:id/stock', auth, productController.updateStock);

export default router;