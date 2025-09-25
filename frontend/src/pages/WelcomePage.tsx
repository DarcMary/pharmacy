import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const WelcomePage = () => {
  const { signed, user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Bem-vindo à FarmaSaúde
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Sua farmácia online de confiança
          </p>

          {!signed ? (
            <div className="space-y-4">
              <Link
                to="/login"
                className="inline-block w-full sm:w-auto px-8 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition duration-150 ease-in-out mb-4 sm:mr-4"
              >
                Fazer Login
              </Link>
              <Link
                to="/register"
                className="inline-block w-full sm:w-auto px-8 py-3 text-base font-medium text-indigo-600 bg-white hover:bg-gray-50 border border-indigo-600 rounded-md shadow-sm transition duration-150 ease-in-out"
              >
                Criar Conta
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-lg text-gray-700 mb-4">
                Olá, {user?.name}!
              </p>
              <Link
                to="/products"
                className="inline-block px-8 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition duration-150 ease-in-out"
              >
                Ver Produtos
              </Link>
            </div>
          )}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Produtos de Qualidade
            </h3>
            <p className="text-gray-600">
              Oferecemos uma ampla variedade de medicamentos e produtos de saúde.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Entrega Rápida
            </h3>
            <p className="text-gray-600">
              Entregamos seus produtos com rapidez e segurança.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Atendimento 24/7
            </h3>
            <p className="text-gray-600">
              Nossa equipe está sempre disponível para ajudar você.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};