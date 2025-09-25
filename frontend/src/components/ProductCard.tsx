import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  // Renderização para modo lista (mais compacto)
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
        <Link to={`/product/${product.id}`}>
          <div className="flex items-center p-3">
            {/* Imagem bem menor */}
            <div className="relative flex-shrink-0 w-12 h-12 mr-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded"
              />
              {product.prescription && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white px-1 py-0.5 rounded text-xs">
                  R
                </span>
              )}
              {!product.inStock && (
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center rounded">
                  <span className="text-white text-xs font-semibold">X</span>
                </div>
              )}
            </div>
            
            {/* Informações do produto */}
            <div className="flex-grow min-w-0">
              <h3 className="font-medium text-gray-800 text-sm mb-0.5 line-clamp-1">{product.name}</h3>
              <p className="text-xs text-gray-500 line-clamp-1">{product.brand}</p>
            </div>
            
            {/* Preço e botão */}
            <div className="flex items-center space-x-2 ml-3">
              <span className="text-lg font-bold text-green-600">
                R$ {product.price.toFixed(2)}
              </span>
              
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`p-1.5 rounded transition-colors ${
                  product.inStock
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  // Renderização para modo grid (padrão)
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          {product.prescription && (
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
              Receita
            </span>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold">Indisponível</span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
          <p className="text-xs text-gray-500 mb-2">Marca: {product.brand}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-green-600">
              R$ {product.price.toFixed(2)}
            </span>
            
            <div>
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`p-2 rounded-lg transition-colors ${
                  product.inStock
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;