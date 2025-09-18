import type { Request, Response } from 'express-serve-static-core';
import { User, LoginCredentials, CustomerRegistration, SellerRegistration } from '../types/models';
import { generateToken } from '../utils/jwt';
import bcrypt from 'bcrypt';

export class AuthController {
  // Usando arrow functions para manter o contexto do this
  public login = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { email, password }: LoginCredentials = req.body;

      // TODO: Implementar lógica de verificação de usuário no banco de dados
      const user: User = {
        id: '1',
        email,
        name: 'Test User',
        role: 'customer'
      };
      const token = generateToken(user);

      return res.json({ user, token });
    } catch (error) {
      return res.status(400).json({ error: 'Falha no login' });
    }
  };

  public registerCustomer = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data: CustomerRegistration = req.body;

      // TODO: Implementar lógica de criação de usuário no banco de dados
      const hashedPassword = await bcrypt.hash(data.password, 10);
      const user: User = {
        id: '2',
        email: data.email,
        name: data.name,
        role: 'customer'
      };
      const token = generateToken(user);

      return res.status(201).json({ user, token });
    } catch (error) {
      return res.status(400).json({ error: 'Falha no registro' });
    }
  };

  public registerSeller = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data: SellerRegistration = req.body;
      const currentUser = req.user;

      if (!currentUser || currentUser.role !== 'seller') {
        return res.status(403).json({ error: 'Não autorizado' });
      }

      // TODO: Implementar lógica de criação de vendedor no banco de dados
      const hashedPassword = await bcrypt.hash(data.password, 10);
      const user: User = {
        id: '3',
        email: data.email,
        name: data.name,
        role: 'seller',
        createdBy: currentUser.id
      };
      const token = generateToken(user);

      return res.status(201).json({ user, token });
    } catch (error) {
      return res.status(400).json({ error: 'Falha no registro do vendedor' });
    }
  };
}