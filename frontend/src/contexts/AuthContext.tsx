import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import {
  User,
  AuthContextData,
  LoginCredentials,
  CustomerRegistration,
  SellerRegistration
} from '../types/auth';

// Temporário: será substituído pela chamada à API
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@farmasaude.com',
    name: 'Admin',
    role: 'seller',
  }
];

const mockAuthAPI = {
  login: async (credentials: LoginCredentials) => {
    // Simulação de chamada à API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = mockUsers.find(u => u.email === credentials.email);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    
    return {
      user,
      token: 'mock-jwt-token'
    };
  },
  
  registerCustomer: async (data: CustomerRegistration) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (mockUsers.some(u => u.email === data.email)) {
      throw new Error('Email já cadastrado');
    }
    
    const newUser: User = {
      id: String(mockUsers.length + 1),
      email: data.email,
      name: data.name,
      role: 'customer',
    };
    
    mockUsers.push(newUser);
    return { user: newUser, token: 'mock-jwt-token' };
  },
  
  registerSeller: async (data: SellerRegistration, currentUser?: User) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (!currentUser || currentUser.role !== 'seller') {
      throw new Error('Apenas vendedores podem cadastrar outros vendedores');
    }
    
    if (mockUsers.some(u => u.email === data.email)) {
      throw new Error('Email já cadastrado');
    }
    
    const newUser: User = {
      id: String(mockUsers.length + 1),
      email: data.email,
      name: data.name,
      role: 'seller',
    };
    
    mockUsers.push(newUser);
    return { user: newUser, token: 'mock-jwt-token' };
  }
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Verificar se há usuário no localStorage
    const storedUser = localStorage.getItem('@FarmaSaude:user');
    const storedToken = localStorage.getItem('@FarmaSaude:token');
    
    if (storedUser && storedToken) {
      return JSON.parse(storedUser);
    }
    
    return null;
  });
  
  const [loading, setLoading] = useState(false);

  const login = useCallback(async (credentials: LoginCredentials) => {
    try {
      setLoading(true);
      const response = await mockAuthAPI.login(credentials);
      
      localStorage.setItem('@FarmaSaude:user', JSON.stringify(response.user));
      localStorage.setItem('@FarmaSaude:token', response.token);
      
      setUser(response.user);
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('@FarmaSaude:user');
    localStorage.removeItem('@FarmaSaude:token');
    setUser(null);
  }, []);

  const registerCustomer = useCallback(async (data: CustomerRegistration) => {
    try {
      setLoading(true);
      const response = await mockAuthAPI.registerCustomer(data);
      
      localStorage.setItem('@FarmaSaude:user', JSON.stringify(response.user));
      localStorage.setItem('@FarmaSaude:token', response.token);
      
      setUser(response.user);
    } finally {
      setLoading(false);
    }
  }, []);

  const registerSeller = useCallback(async (data: SellerRegistration) => {
    try {
      setLoading(true);
      if (!user) {
        throw new Error('Usuário não autenticado');
      }
      await mockAuthAPI.registerSeller(data, user);
    } finally {
      setLoading(false);
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        loading,
        login,
        logout,
        registerCustomer,
        registerSeller
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};