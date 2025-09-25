import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Package, BarChart3, Users } from 'lucide-react';

const SellerDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Dashboard do Vendedor
          </h1>
          <p className="text-gray-600">
            Gerencie seus produtos e vendas
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link
            to="/create-product"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <Plus className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600">
                  Novo Produto
                </h3>
                <p className="text-sm text-gray-600">
                  Cadastrar produto
                </p>
              </div>
            </div>
          </Link>

          <Link
            to="/stock-management"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                  Gestão de Estoque
                </h3>
                <p className="text-sm text-gray-600">
                  Controlar inventário
                </p>
              </div>
            </div>
          </Link>

          <Link
            to="/seller-sales"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600">
                  Ver Vendas
                </h3>
                <p className="text-sm text-gray-600">
                  Dashboard de vendas
                </p>
              </div>
            </div>
          </Link>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Clientes
                </h3>
                <p className="text-sm text-gray-600">
                  Em breve
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Bem-vindo ao Dashboard do Vendedor!
          </h2>
          <p className="text-gray-600 mb-4">
            Aqui você pode gerenciar todos os seus produtos e acompanhar suas vendas.
          </p>
          <p className="text-gray-600">
            Para começar, clique em "Novo Produto" para cadastrar seu primeiro produto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;