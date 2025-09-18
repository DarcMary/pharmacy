import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterCustomerPage } from './pages/RegisterCustomerPage';
import PrivateRoute from './components/PrivateRoute';
import { WelcomePage } from './pages/WelcomePage';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/products" element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              } />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterCustomerPage />} />
              <Route path="/product/:id" element={
                <PrivateRoute>
                  <ProductDetailPage />
                </PrivateRoute>
              } />
              <Route 
                path="/cart" 
                element={
                  <PrivateRoute allowedRoles={['customer']}>
                    <CartPage />
                  </PrivateRoute>
                } 
              />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;