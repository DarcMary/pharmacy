# 🏥 Sistema de Farmácia - Deploy Guide

## 📁 Estrutura do Projeto

```
pharmacy-main/
├── frontend/          ← PROJETO REACT (para deploy no Vercel)
├── backend/           ← API NODE.JS (para deploy separado)
├── vercel.json        ← Configuração do Vercel
└── README.md
```

## 🚀 Deploy no Vercel

### 1. Configuração Automática
O arquivo `vercel.json` já está configurado para fazer deploy correto do frontend:

```json
{
  "buildCommand": "cd frontend && npm install && npm run build",
  "outputDirectory": "frontend/dist",
  "installCommand": "cd frontend && npm install",
  "framework": "vite"
}
```

### 2. Passos no Vercel:
1. Conecte seu repositório GitHub
2. O Vercel irá automaticamente detectar as configurações
3. O deploy será feito da pasta `frontend/`
4. A aplicação React será disponibilizada

### 3. Funcionalidades do Frontend:
- ✅ Sistema de autenticação (Login/Registro)
- ✅ Catálogo de produtos por categorias
- ✅ Carrinho de compras
- ✅ Checkout completo
- ✅ Dashboard do vendedor
- ✅ Gerenciamento de estoque
- ✅ Design responsivo

## 🔧 Backend (Deploy Separado)
O backend deve ser deployado em serviços como:
- Railway
- Render
- Heroku
- DigitalOcean

## 🔄 Após o Deploy
1. Configure a URL do backend no frontend
2. Configure variáveis de ambiente
3. Teste todas as funcionalidades

---
*Projeto completo de e-commerce para farmácia desenvolvido com React + Node.js*