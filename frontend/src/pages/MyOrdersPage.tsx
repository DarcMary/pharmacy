import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Package, Calendar, DollarSign, X, Eye, Truck } from 'lucide-react';
import api from '../services/api';

interface OrderItem {
  id: string;
  quantity: number;
  price: number;
  product: {
    id: string;
    name: string;
    images: string[];
    category: string;
  };
}

interface Order {
  id: string;
  total: number;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
  createdAt: string;
  items: OrderItem[];
}

const MyOrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cancellingOrder, setCancellingOrder] = useState<string | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    fetchOrders();
  }, [user, navigate]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await api.get('/orders/my-orders');
      setOrders(response.data.orders);
    } catch (err: any) {
      console.error('Erro ao buscar pedidos:', err);
      setError('Erro ao carregar pedidos');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelOrder = async (orderId: string) => {
    try {
      setCancellingOrder(orderId);
      await api.put(`/orders/${orderId}/cancel`);
      
      // Atualizar lista de pedidos
      await fetchOrders();
      
    } catch (err: any) {
      console.error('Erro ao cancelar pedido:', err);
      alert(err.response?.data?.error || 'Erro ao cancelar pedido');
    } finally {
      setCancellingOrder(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING': return 'bg-yellow-100 text-yellow-800';
      case 'CONFIRMED': return 'bg-blue-100 text-blue-800';
      case 'COMPLETED': return 'bg-green-100 text-green-800';
      case 'CANCELLED': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'PENDING': return 'Pendente';
      case 'CONFIRMED': return 'Confirmado';
      case 'COMPLETED': return 'Concluído';
      case 'CANCELLED': return 'Cancelado';
      default: return status;
    }
  };

  const canCancelOrder = (status: string) => {
    return status === 'PENDING' || status === 'CONFIRMED';
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-600">
          <p>{error}</p>
          <button
            onClick={fetchOrders}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <Package className="w-8 h-8 mr-3 text-green-600" />
            Meus Pedidos
          </h1>
          <button
            onClick={() => navigate('/')}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Continuar Comprando
          </button>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">Nenhum pedido encontrado</h2>
            <p className="text-gray-500 mb-6">Você ainda não fez nenhum pedido.</p>
            <button
              onClick={() => navigate('/')}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Fazer Primeiro Pedido
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Header do pedido */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="text-sm text-gray-600">Pedido #{order.id.slice(-8)}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(order.createdAt).toLocaleDateString('pt-BR')}
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="flex items-center text-lg font-bold text-gray-800">
                          <DollarSign className="w-5 h-5 mr-1" />
                          R$ {order.total.toFixed(2)}
                        </div>
                        <p className="text-sm text-gray-500">{order.items.length} item(s)</p>
                      </div>

                      {canCancelOrder(order.status) && (
                        <button
                          onClick={() => handleCancelOrder(order.id)}
                          disabled={cancellingOrder === order.id}
                          className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center text-sm"
                        >
                          {cancellingOrder === order.id ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Cancelando...
                            </>
                          ) : (
                            <>
                              <X className="w-4 h-4 mr-1" />
                              Cancelar
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Itens do pedido */}
                <div className="px-6 py-4">
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            src={item.product.images?.[0] || '/images/placeholder.jpg'}
                            alt={item.product.name}
                            className="w-16 h-16 object-cover rounded-lg mr-4"
                          />
                          <div>
                            <h3 className="font-medium text-gray-800">{item.product.name}</h3>
                            <p className="text-sm text-gray-600">Categoria: {item.product.category}</p>
                            <p className="text-sm text-gray-600">Quantidade: {item.quantity}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-800">
                            R$ {(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-600">
                            R$ {item.price.toFixed(2)} cada
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status do pedido */}
                <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <Truck className="w-4 h-4 mr-2" />
                      {order.status === 'PENDING' && 'Aguardando processamento'}
                      {order.status === 'CONFIRMED' && 'Pedido confirmado, preparando para envio'}
                      {order.status === 'COMPLETED' && 'Pedido entregue com sucesso'}
                      {order.status === 'CANCELLED' && 'Pedido cancelado'}
                    </div>
                    <button
                      onClick={() => navigate(`/order/${order.id}`)}
                      className="text-green-600 hover:text-green-700 flex items-center text-sm"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrdersPage;