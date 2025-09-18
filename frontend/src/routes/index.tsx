import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import  PrivateRoute from '../components/PrivateRoute';
import { LoginPage } from '../pages/LoginPage';
import { RegisterCustomerPage } from '../pages/RegisterCustomerPage';
import  HomePage  from '../pages/HomePage';
import  CartPage  from '../pages/CartPage';
import  ProductDetailPage  from '../pages/ProductDetailPage';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterCustomerPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route 
            path="/cart" 
            element={
              <PrivateRoute allowedRoles={['customer']}>
                <CartPage />
              </PrivateRoute>
            } 
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};