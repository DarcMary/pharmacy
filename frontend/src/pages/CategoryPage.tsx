import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ArrowLeft, Grid, List } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'medicamentos', name: 'Medicamentos' },
    { id: 'cosmeticos', name: 'Cosméticos' },
    { id: 'vitaminas', name: 'Vitaminas' },
    { id: 'higiene', name: 'Higiene' },
    { id: 'equipamentos', name: 'Equipamentos' }
  ];

  const currentCategory = categories.find(c => c.id === categoryId);

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Categoria não encontrada</h1>
          <Link to="/" className="text-green-600 hover:text-green-700">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    );
  }  const filteredProducts = (allProducts || [])
    .filter(product => product.category === categoryId)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para a página inicial
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {currentCategory.name}
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} produtos encontrados
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="name">Ordenar por Nome</option>
                <option value="price-low">Menor Preço</option>
                <option value="price-high">Maior Preço</option>
              </select>
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

        {/* Products Grid */}
        <div className={`grid ${
          viewMode === 'grid' 
            ? 'gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'gap-2 grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} viewMode={viewMode} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum produto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;