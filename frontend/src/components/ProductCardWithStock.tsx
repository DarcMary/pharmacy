import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, AlertCircle } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { ProductWithStock } from '../hooks/useProducts';

interface ProductCardWithStockProps {
  product: ProductWithStock;
  viewMode?: 'grid' | 'list';
}

const ProductCardWithStock: React.FC<ProductCardWithStockProps> = ({ 
  product, 
  viewMode = 'grid' 
}) => {
  const { state, dispatch } = useCart();
  const [showStockAlert, setShowStockAlert] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Verificar quantidade atual no carrinho
    const cartItem = state.items.find(item => item.product.id === product.id);
    const currentQuantityInCart = cartItem ? cartItem.quantity : 0;

    // Verificar se há estoque suficiente
    if (currentQuantityInCart >= product.quantity) {
      setShowStockAlert(true);
      setTimeout(() => setShowStockAlert(false), 3000);
      return;
    }

    // Converter ProductWithStock para Product para compatibilidade
    const productForCart: Product = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.images[0] || '',
      category: product.category,
      brand: product.brand,
      inStock: product.inStock && product.quantity > 0,
      prescription: product.prescription
    };

    dispatch({ 
      type: 'ADD_ITEM_WITH_STOCK_CHECK', 
      payload: { 
        product: productForCart, 
        maxQuantity: product.quantity 
      } 
    });
  };

  const isOutOfStock = !product.inStock || product.quantity === 0;
  const cartItem = state.items.find(item => item.product.id === product.id);
  const currentQuantityInCart = cartItem ? cartItem.quantity : 0;
  const canAddMore = currentQuantityInCart < product.quantity;

  // Renderização para modo lista (mais compacto)
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 relative">
        {showStockAlert && (
          <div className="absolute top-2 right-2 z-10 bg-red-500 text-white px-2 py-1 rounded text-xs flex items-center">
            <AlertCircle className="w-3 h-3 mr-1" />
            Estoque insuficiente
          </div>
        )}
        
        <Link to={`/product/${product.id}`}>
          <div className="flex items-center p-3">
            {/* Imagem */}
            <div className="relative flex-shrink-0 w-12 h-12 mr-3">
              <img
                src={product.images[0] || '/images/placeholder.jpg'}
                alt={product.name}
                className={`w-full h-full object-cover rounded ${isOutOfStock ? 'opacity-50' : ''}`}
              />
              {product.prescription && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white px-1 py-0.5 rounded text-xs">
                  R
                </span>
              )}
              {isOutOfStock && (
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center rounded">
                  <span className="text-white text-xs font-bold">Esgotado</span>
                </div>
              )}
            </div>

            {/* Conteúdo */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-800 truncate">{product.name}</h3>
              <p className="text-xs text-gray-600 truncate">{product.brand}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-lg font-bold text-green-600">
                  R$ {product.price.toFixed(2)}
                </span>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Estoque: {product.quantity}</span>
                  {currentQuantityInCart > 0 && (
                    <span className="ml-2 bg-green-100 text-green-800 px-2 py-0.5 rounded">
                      {currentQuantityInCart} no carrinho
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Botão */}
            {!isOutOfStock && (
              <button
                onClick={handleAddToCart}
                disabled={!canAddMore}
                className={`ml-3 flex items-center justify-center px-2 py-1 rounded text-xs font-medium transition-colors ${
                  canAddMore
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </Link>
      </div>
    );
  }

  // Renderização para modo grid (padrão)
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
      {showStockAlert && (
        <div className="absolute top-2 right-2 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
          <AlertCircle className="w-4 h-4 mr-1" />
          Estoque insuficiente
        </div>
      )}

      <Link to={`/product/${product.id}`}>
        <div className="relative">
          <img
            src={product.images[0] || '/images/placeholder.jpg'}
            alt={product.name}
            className={`w-full h-48 object-cover ${isOutOfStock ? 'opacity-50' : ''}`}
          />
          {product.prescription && (
            <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              Prescrição
            </span>
          )}
          {isOutOfStock && (
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white px-4 py-2 rounded-lg">
                <span className="text-gray-800 font-bold">Produto Esgotado</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold text-green-600">
              R$ {product.price.toFixed(2)}
            </span>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                Estoque: {product.quantity}
              </div>
              {currentQuantityInCart > 0 && (
                <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded mt-1">
                  {currentQuantityInCart} no carrinho
                </div>
              )}
            </div>
          </div>

          {!isOutOfStock && (
            <button
              onClick={handleAddToCart}
              disabled={!canAddMore}
              className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-semibold transition-colors ${
                canAddMore
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>
                {canAddMore ? 'Adicionar ao Carrinho' : 'Estoque Máximo Atingido'}
              </span>
            </button>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCardWithStock;