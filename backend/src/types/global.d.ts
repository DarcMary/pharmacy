import { JwtPayload } from "../auth";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

// precisa ter um export vazio para ser tratado como módulo
export {};
