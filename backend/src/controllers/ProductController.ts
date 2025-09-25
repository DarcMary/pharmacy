import type { Request, Response } from 'express-serve-static-core';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import prisma from '../lib/prisma';

// Configuração do multer para upload de imagens
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../../uploads/products');
    
    // Criar pasta se não existir
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Gerar nome único para o arquivo
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  },
  fileFilter: (req, file, cb) => {
    // Permitir apenas imagens
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Apenas arquivos de imagem são permitidos!'));
    }
  }
});

export class ProductController {
  // Upload de imagens
  public uploadImages = upload.array('images', 5); // Máximo 5 imagens

  // Criar novo produto
  public createProduct = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, description, price, category, brand, quantity, prescription } = req.body;
      const currentUser = req.user;

      if (!currentUser || currentUser.role !== 'SELLER') {
        return res.status(403).json({ error: 'Apenas vendedores podem cadastrar produtos' });
      }

      // Processar imagens enviadas
      const images: string[] = [];
      if (req.files && Array.isArray(req.files)) {
        req.files.forEach((file) => {
          images.push(`/uploads/products/${file.filename}`);
        });
      }

      const product = await prisma.product.create({
        data: {
          name,
          description,
          price: parseFloat(price),
          category,
          brand,
          quantity: parseInt(quantity) || 0,
          prescription: prescription === 'true',
          images,
          createdBy: currentUser.id
        }
      });

      return res.status(201).json(product);
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      return res.status(400).json({ error: 'Falha ao criar produto' });
    }
  };

  // Listar produtos
  public getProducts = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { category, search } = req.query;
      
      const where: any = {
        quantity: { gt: 0 } // Apenas produtos em estoque
      };

      if (category) {
        where.category = category;
      }

      if (search) {
        where.OR = [
          { name: { contains: search as string, mode: 'insensitive' } },
          { description: { contains: search as string, mode: 'insensitive' } },
          { brand: { contains: search as string, mode: 'insensitive' } }
        ];
      }

      const products = await prisma.product.findMany({
        where,
        include: {
          creator: {
            select: {
              id: true,
              name: true,
              email: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      return res.json(products);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      return res.status(500).json({ error: 'Falha ao buscar produtos' });
    }
  };

  // Buscar produto por ID
  public getProductById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;

      const product = await prisma.product.findUnique({
        where: { id },
        include: {
          creator: {
            select: {
              id: true,
              name: true,
              email: true
            }
          }
        }
      });

      if (!product) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }

      return res.json(product);
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      return res.status(500).json({ error: 'Falha ao buscar produto' });
    }
  };

  // Atualizar produto
  public updateProduct = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const { name, description, price, category, brand, quantity, prescription } = req.body;
      const currentUser = req.user;

      if (!currentUser || currentUser.role !== 'SELLER') {
        return res.status(403).json({ error: 'Apenas vendedores podem atualizar produtos' });
      }

      // Verificar se o produto existe e se o usuário pode editá-lo
      const existingProduct = await prisma.product.findUnique({
        where: { id }
      });

      if (!existingProduct) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }

      if (existingProduct.createdBy !== currentUser.id) {
        return res.status(403).json({ error: 'Você só pode editar produtos que criou' });
      }

      // Processar novas imagens se enviadas
      let images = existingProduct.images;
      if (req.files && Array.isArray(req.files)) {
        const newImages: string[] = [];
        req.files.forEach((file) => {
          newImages.push(`/uploads/products/${file.filename}`);
        });
        images = [...images, ...newImages];
      }

      const product = await prisma.product.update({
        where: { id },
        data: {
          ...(name && { name }),
          ...(description && { description }),
          ...(price && { price: parseFloat(price) }),
          ...(category && { category }),
          ...(brand && { brand }),
          ...(quantity !== undefined && { quantity: parseInt(quantity) }),
          ...(prescription !== undefined && { prescription: prescription === 'true' }),
          ...(req.files && { images })
        }
      });

      return res.json(product);
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      return res.status(400).json({ error: 'Falha ao atualizar produto' });
    }
  };

  // Deletar produto
  public deleteProduct = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const currentUser = req.user;

      if (!currentUser || currentUser.role !== 'SELLER') {
        return res.status(403).json({ error: 'Apenas vendedores podem deletar produtos' });
      }

      // Verificar se o produto existe e se o usuário pode deletá-lo
      const existingProduct = await prisma.product.findUnique({
        where: { id }
      });

      if (!existingProduct) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }

      if (existingProduct.createdBy !== currentUser.id) {
        return res.status(403).json({ error: 'Você só pode deletar produtos que criou' });
      }

      await prisma.product.delete({
        where: { id }
      });

      return res.json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
      return res.status(400).json({ error: 'Falha ao deletar produto' });
    }
  };

  // Atualizar estoque
  public updateStock = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const { quantity } = req.body;
      const currentUser = req.user;

      if (!currentUser || currentUser.role !== 'SELLER') {
        return res.status(403).json({ error: 'Apenas vendedores podem atualizar estoque' });
      }

      const product = await prisma.product.findUnique({
        where: { id }
      });

      if (!product) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }

      if (product.createdBy !== currentUser.id) {
        return res.status(403).json({ error: 'Você só pode gerenciar estoque de produtos que criou' });
      }

      const updatedProduct = await prisma.product.update({
        where: { id },
        data: {
          quantity: parseInt(quantity),
          inStock: parseInt(quantity) > 0
        }
      });

      return res.json(updatedProduct);
    } catch (error) {
      console.error('Erro ao atualizar estoque:', error);
      return res.status(400).json({ error: 'Falha ao atualizar estoque' });
    }
  };
}