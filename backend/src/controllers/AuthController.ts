import type { Request, Response } from 'express-serve-static-core';
import { User, LoginCredentials, CustomerRegistration, SellerRegistration } from '../types/models';
import { generateToken } from '../utils/jwt';
import bcrypt from 'bcrypt';
import prisma from '../lib/prisma';

export class AuthController {
  // Usando arrow functions para manter o contexto do this
  public login = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { email, password }: LoginCredentials = req.body;

      // Busca o usuário pelo email
      const user = await prisma.user.findUnique({
        where: { email }
      });

      if (!user) {
        return res.status(401).json({ error: 'Email ou senha incorretos' });
      }

      // Verifica a senha
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ error: 'Email ou senha incorretos' });
      }

      const token = generateToken({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role.toLowerCase() as 'customer' | 'seller'
      });

      // Remove a senha do objeto de retorno
      const { password: _, ...userWithoutPassword } = user;

      return res.json({ 
        user: {
          ...userWithoutPassword,
          role: user.role.toLowerCase()
        }, 
        token 
      });
    } catch (error) {
      console.error('Erro no login:', error);
      return res.status(400).json({ error: 'Falha no login' });
    }
  };

  public registerCustomer = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data: CustomerRegistration = req.body;

      // Verifica se já existe um usuário com o mesmo email
      const existingUser = await prisma.user.findUnique({
        where: { email: data.email }
      });

      if (existingUser) {
        return res.status(400).json({ error: 'Email já cadastrado' });
      }

      // Cria novo usuário
      const hashedPassword = await bcrypt.hash(data.password, 10);
      const user = await prisma.user.create({
        data: {
          email: data.email,
          name: data.name,
          password: hashedPassword,
          role: 'CUSTOMER'
        }
      });

      const token = generateToken({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role.toLowerCase() as 'customer' | 'seller'
      });

      // Remove a senha do objeto de retorno
      const { password, ...userWithoutPassword } = user;

      return res.status(201).json({ 
        user: {
          ...userWithoutPassword,
          role: user.role.toLowerCase()
        }, 
        token 
      });
    } catch (error) {
      console.error('Erro ao registrar cliente:', error);
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

      // Verifica se já existe um usuário com o mesmo email
      const existingUser = await prisma.user.findUnique({
        where: { email: data.email }
      });

      if (existingUser) {
        return res.status(400).json({ error: 'Email já cadastrado' });
      }

      // Cria novo vendedor
      const hashedPassword = await bcrypt.hash(data.password, 10);
      const user = await prisma.user.create({
        data: {
          email: data.email,
          name: data.name,
          password: hashedPassword,
          role: 'SELLER',
          createdBy: currentUser.id
        }
      });

      const token = generateToken({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role.toLowerCase() as 'customer' | 'seller'
      });

      // Remove a senha do objeto de retorno
      const { password, ...userWithoutPassword } = user;

      return res.status(201).json({ 
        user: {
          ...userWithoutPassword,
          role: user.role.toLowerCase()
        }, 
        token 
      });
    } catch (error) {
      console.error('Erro ao registrar vendedor:', error);
      return res.status(400).json({ error: 'Falha no registro do vendedor' });
    }
  };
}