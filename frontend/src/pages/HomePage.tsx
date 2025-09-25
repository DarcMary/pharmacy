import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { allProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Grid, List } from 'lucide-react';

const HomePage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'medicamentos', name: 'Medicamentos' },
    { id: 'cosmeticos', name: 'Cosméticos' },
    { id: 'vitaminas', name: 'Vitaminas' },
    { id: 'higiene', name: 'Higiene' },
    { id: 'equipamentos', name: 'Equipamentos' }
  ];

  // Agrupa produtos por categoria e limita a 5 por categoria
  const productsByCategory = categories.map(category => ({
    ...category,
    products: allProducts
      .filter(product => product.category === category.id)
      .slice(0, 5) // Limita a 5 produtos por categoria
  })).filter(category => category.products.length > 0); // Remove categorias vazias

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sua Farmácia Online de Confiança
            </h1>
            <p className="text-xl mb-8">
              Medicamentos, cosméticos e produtos de saúde com entrega rápida
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">
                ✓ Entrega Grátis acima de R$ 50
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                ✓ Produtos Originais
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                ✓ Atendimento 24h
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View Mode Control */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Nossos Produtos por Categoria
              </h2>
              <p className="text-gray-600">
                Exibindo até 5 produtos de cada categoria
              </p>
            </div>
            
            <div className="flex border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'text-gray-600'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-green-600 text-white' : 'text-gray-600'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products by Category */}
        {productsByCategory.map((category) => (
          <div key={category.id} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">
                {category.name}
              </h3>
              <Link 
                to={`/category/${category.id}`}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Ver todos →
              </Link>
            </div>
            
            <div className={`grid ${
              viewMode === 'grid' 
                ? 'gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5' 
                : 'gap-2 grid-cols-1'
            }`}>
              {category.products.map((product) => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} />
              ))}
            </div>
          </div>
        ))}

        {productsByCategory.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum produto encontrado.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;