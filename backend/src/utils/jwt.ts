import jwt from 'jsonwebtoken';
import { User, JwtPayload } from '../types/models';

const JWT_SECRET = process.env.JWT_SECRET || 'seu-segredo-aqui';

export const generateToken = (user: User): string => {
  const payload: JwtPayload = {
    id: user.id,
    email: user.email,
    role: user.role
  };

  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
};

export const verifyToken = (token: string): JwtPayload => {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch (error) {
    throw new Error('Token inválido');
  }
};