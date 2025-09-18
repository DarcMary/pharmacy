export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'seller';
  createdBy?: string;
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
}

export interface SellerRegistration extends CustomerRegistration {
  createdBy?: string;
}

