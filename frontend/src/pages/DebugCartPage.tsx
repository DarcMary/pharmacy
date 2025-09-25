import React from 'react';
import { useCart } from '../contexts/CartContext';

const DebugCartPage: React.FC = () => {
  const { state } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Debug - Carrinho</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Itens no Carrinho:</h2>
        
        {state.items.length === 0 ? (
          <p>Carrinho vazio</p>
        ) : (
          <div className="space-y-4">
            {state.items.map((item, index) => (
              <div key={index} className="border p-4 rounded">
                <h3 className="font-semibold">Item {index + 1}</h3>
                <pre className="text-sm bg-gray-100 p-2 rounded mt-2">
                  {JSON.stringify(item, null, 2)}
                </pre>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-6">
          <h3 className="font-semibold">Estado completo do carrinho:</h3>
          <pre className="text-sm bg-gray-100 p-2 rounded mt-2">
            {JSON.stringify(state, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default DebugCartPage;