import type { Request, Response, NextFunction } from 'express-serve-static-core';
import { User } from '../types/auth';

export const sellerAuth = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user as User | undefined;

  if (!user) {
    return res.status(401).json({ error: 'Não autenticado' });
  }

  if (user.role !== 'SELLER') {
    return res.status(403).json({ error: 'Acesso negado. Apenas vendedores têm permissão.' });
  }

  next();
};

export const canCreateSeller = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user as User | undefined;

  if (!user) {
    return res.status(401).json({ error: 'Não autenticado' });
  }

  if (user.role !== 'SELLER') {
    return res.status(403).json({ error: 'Acesso negado. Apenas vendedores podem criar outros vendedores.' });
  }

  // Adiciona o ID do vendedor que está criando
  req.body.createdBy = user.id;

  next();
};
