export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'seller';
  createdBy?: string; // ID do vendedor que criou (apenas para vendedores)
}

export interface JwtPayload {
  id: string;
  email: string;
  role: 'customer' | 'seller';
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface CustomerRegistration extends LoginCredentials {
  name: string;
  cpf?: string;
  phone?: string;
  birthDate?: string;
}

export interface SellerRegistration extends CustomerRegistration {
  createdBy: string; // ID do vendedor que está criando o novo vendedor
}