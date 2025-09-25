import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { ShoppingBag, CreditCard, Truck, Check, AlertCircle } from 'lucide-react';
import api from '../services/api';

const CheckoutPage: React.FC = () => {
  const { state, dispatch } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const total = state.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Converter itens do carrinho para o formato esperado pela API
      const orderItems = state.items.map(item => ({
        productId: item.product.id,
        quantity: item.quantity
      }));

      // Fazer pedido para a API
      const response = await api.post('/orders', {
        items: orderItems
      });

      if (response.data) {
        // Limpar carrinho
        dispatch({ type: 'CLEAR_CART' });
        
        // Mostrar sucesso
        setSuccess(true);
        
        // Redirecionar para pedidos após 3 segundos
        setTimeout(() => {
          navigate('/my-orders');
        }, 3000);
      }

    } catch (err: any) {
      console.error('Erro no checkout:', err);
      setError(
        err.response?.data?.error || 
        'Erro ao processar pedido. Verifique se há estoque suficiente.'
      );
    } finally {
      setLoading(false);
    }
  };

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Carrinho vazio</h2>
          <p className="text-gray-600 mb-6">Adicione produtos ao carrinho antes de finalizar a compra.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Continuar Comprando
          </button>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto text-center bg-green-50 p-8 rounded-lg border border-green-200">
          <Check className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h2 className="text-2xl font-bold text-green-800 mb-2">Pedido Realizado!</h2>
          <p className="text-green-700 mb-4">
            Seu pedido foi processado com sucesso. Você será redirecionado para visualizar seus pedidos.
          </p>
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Finalizar Compra</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resumo do Pedido */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Resumo do Pedido
              </h2>
              
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <div className="flex items-center">
                      <img
                        src={item.product.image || '/images/placeholder.jpg'}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg mr-4"
                      />
                      <div>
                        <h3 className="font-medium text-gray-800">{item.product.name}</h3>
                        <p className="text-sm text-gray-600">Quantidade: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">
                        R$ {(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600">
                        R$ {item.product.price.toFixed(2)} cada
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center text-xl font-bold text-gray-800">
                  <span>Total:</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Informações de Entrega */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Truck className="w-5 h-5 mr-2" />
                Informações de Entrega
              </h2>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-800 font-medium">Cliente: {user?.name}</p>
                <p className="text-blue-700">Email: {user?.email}</p>
                <p className="text-sm text-blue-600 mt-2">
                  * Para esta demonstração, as informações de entrega são simplificadas.
                </p>
              </div>
            </div>
          </div>

          {/* Pagamento */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Pagamento
              </h2>

              {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                    <p className="text-red-800 text-sm">{error}</p>
                  </div>
                </div>
              )}

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6">
                <p className="text-yellow-800 text-sm">
                  💡 Esta é uma versão de demonstração. O pagamento é simulado.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="text-gray-800">R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frete:</span>
                  <span className="text-green-600">Grátis</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total:</span>
                    <span>R$ {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processando...
                  </>
                ) : (
                  'Finalizar Pedido'
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Ao finalizar o pedido, você concorda com os termos de uso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;