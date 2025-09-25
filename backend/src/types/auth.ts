import { Request } from 'express';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'CUSTOMER' | 'SELLER';
  createdBy?: string;
}

export interface JwtPayload {
  id: string;
  email: string;
  role: 'CUSTOMER' | 'SELLER';
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

export interface AuthRequest extends Request {
  user?: User;
}

