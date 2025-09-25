import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CategoryPageSimple: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-4">Página de Categoria</h1>
      <p className="text-lg mb-4">Categoria ID: {categoryId}</p>
      <Link to="/" className="text-green-600 hover:text-green-700">
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default CategoryPageSimple;