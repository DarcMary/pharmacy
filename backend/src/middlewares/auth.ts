import type { Request, Response, NextFunction } from 'express-serve-static-core';
import jwt from 'jsonwebtoken';
import { JwtPayload } from '../types/models';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default-secret') as JwtPayload;
    req.user = decoded;
    return next();
  } catch {
    return res.status(401).json({ error: 'Token inválido' });
  }
}

export function sellerMiddleware(req: Request, res: Response, next: NextFunction) {
  if (!req.user || req.user.role !== 'seller') {
    return res.status(403).json({ error: 'Acesso negado. Apenas vendedores podem acessar este recurso.' });
  }
  return next();
}