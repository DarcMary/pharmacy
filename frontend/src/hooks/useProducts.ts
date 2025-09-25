import { useState, useEffect } from 'react';
import api from '../services/api';

export interface ProductWithStock {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  brand: string;
  inStock: boolean;
  quantity: number;
  prescription: boolean;
}

export const useProducts = () => {
  const [products, setProducts] = useState<ProductWithStock[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get('/products');
      setProducts(response.data.products || []);
      setError(null);
    } catch (err: any) {
      console.error('Erro ao buscar produtos:', err);
      setError('Erro ao carregar produtos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const checkStock = (productId: string, requestedQuantity: number = 1): boolean => {
    const product = products.find(p => p.id === productId);
    return product ? product.quantity >= requestedQuantity : false;
  };

  const getProduct = (productId: string): ProductWithStock | undefined => {
    return products.find(p => p.id === productId);
  };

  return {
    products,
    loading,
    error,
    checkStock,
    getProduct,
    refetch: fetchProducts
  };
};