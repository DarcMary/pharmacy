import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Seu carrinho está vazio</h1>
          <p className="text-gray-600 mb-8">Adicione produtos ao seu carrinho para continuar</p>
          <button
            onClick={() => navigate('/')}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Continuar Comprando
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-green-600 hover:text-green-700 transition-colors mb-2"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Continuar Comprando
            </button>
            <h1 className="text-3xl font-bold text-gray-800">Carrinho de Compras</h1>
            <p className="text-gray-600">{state.items.length} {state.items.length === 1 ? 'item' : 'itens'} no carrinho</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.product.name}</h3>
                      <p className="text-sm text-gray-600">Marca: {item.product.brand}</p>
                      <p className="text-green-600 font-semibold mt-1">
                        R$ {item.product.price.toFixed(2)}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">
                        R$ {(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-500 hover:text-red-700 transition-colors mt-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete</span>
                  <span className="text-green-600">
                    {state.total >= 50 ? 'Grátis' : 'R$ 8,90'}
                  </span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>R$ {(state.total + (state.total >= 50 ? 0 : 8.90)).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {state.total < 50 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                  <p className="text-sm text-yellow-800">
                    Adicione R$ {(50 - state.total).toFixed(2)} para ganhar frete grátis!
                  </p>
                </div>
              )}

              <button
                onClick={handleCheckout}
                className="w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-colors bg-green-600 text-white hover:bg-green-700"
              >
                <CreditCard className="w-5 h-5" />
                <span>Finalizar Compra</span>
              </button>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Pagamento seguro com SSL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;