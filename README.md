# 🏥 FarmaSaúde - E-commerce de Farmácia

Uma aplicação moderna de e-commerce para farmácia desenvolvida com React, TypeScript e Tailwind CSS. O sistema oferece uma experiência completa de compra online com mais de 100 produtos farmacêuticos, cosméticos e suplementos.

## 🌟 Funcionalidades

### 🛍️ Catálogo de Produtos
- **Mais de 100 produtos** organizados por categorias
- **Categorias disponíveis**: Medicamentos, Cosméticos, Vitaminas, Higiene, Equipamentos
- **Filtros avançados** por categoria e preço
- **Sistema de busca** integrado
- **Indicadores visuais** para produtos que necessitam receita médica
- **Status de estoque** em tempo real

### 🛒 Carrinho de Compras
- **Adicionar/remover produtos** com facilidade
- **Controle de quantidade** individual por produto
- **Cálculo automático** do valor total
- **Frete grátis** para compras acima de R$ 50,00
- **Persistência** do carrinho durante a sessão
- **Finalização de compra** com feedback visual

### 📱 Interface Responsiva
- **Design moderno** com tema farmácia (verde)
- **Totalmente responsivo** para desktop, tablet e mobile
- **Micro-interações** e animações suaves
- **Estados de hover** e feedback visual
- **Navegação intuitiva** entre páginas

### 🔄 Roteamento Dinâmico
- **Página Inicial**: Catálogo completo com filtros
- **Detalhes do Produto**: Informações completas e opções de compra
- **Carrinho**: Gerenciamento de itens e finalização

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **React Router DOM** - Roteamento
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **Vite** - Build tool e dev server
- **Context API** - Gerenciamento de estado

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd farmasaude
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
```

4. **Acesse a aplicação**
```
http://localhost:5173
```

### Scripts disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx      # Cabeçalho com navegação
│   └── ProductCard.tsx # Card de produto
├── contexts/           # Contextos React
│   └── CartContext.tsx # Gerenciamento do carrinho
├── data/              # Dados estáticos
│   └── products.ts    # Base de produtos
├── pages/             # Páginas da aplicação
│   ├── HomePage.tsx   # Página inicial
│   ├── ProductDetailPage.tsx # Detalhes do produto
│   └── CartPage.tsx   # Carrinho de compras
├── App.tsx            # Componente principal
├── main.tsx          # Ponto de entrada
└── index.css         # Estilos globais
```

## 🛍️ Produtos Disponíveis

A aplicação conta com mais de 100 produtos distribuídos nas seguintes categorias:

### 💊 Medicamentos (33 produtos)
- Analgésicos e antitérmicos
- Anti-inflamatórios
- Antibióticos (com receita)
- Anti-hipertensivos (com receita)
- Antidepressivos (com receita)
- E muito mais...

### 💄 Cosméticos (20 produtos)
- Protetores solares
- Cremes hidratantes
- Produtos capilares
- Cuidados faciais
- Maquiagem básica

### 💊 Vitaminas e Suplementos (20 produtos)
- Vitaminas A, B, C, D, E, K
- Complexos vitamínicos
- Minerais (Zinco, Magnésio, Ferro)
- Ômega 3 e Colágeno
- Suplementos especializados

### 🧼 Higiene e Cuidados (20+ produtos)
- Produtos de higiene bucal
- Cuidados corporais
- Produtos infantis
- Antissépticos
- Produtos íntimos

### 🩺 Equipamentos (7 produtos)
- Termômetros
- Máscaras cirúrgicas
- Equipamentos de medição
- Materiais de primeiros socorros

## 🎨 Design System

### Cores Principais
- **Verde Primário**: `#059669` (green-600)
- **Verde Secundário**: `#047857` (green-700)
- **Cinza Neutro**: `#6B7280` (gray-500)
- **Branco**: `#FFFFFF`
- **Vermelho Alerta**: `#EF4444` (red-500)

### Tipografia
- **Fonte Principal**: Sistema (sans-serif)
- **Tamanhos**: 12px a 48px
- **Pesos**: 400 (normal), 600 (semibold), 700 (bold)

## 🔧 Funcionalidades Técnicas

### Gerenciamento de Estado
- **Context API** para carrinho de compras
- **useReducer** para operações complexas
- **Estado local** para componentes específicos

### Roteamento
- **React Router DOM v7** para navegação
- **Rotas dinâmicas** para detalhes de produtos
- **Navegação programática** com hooks

### Responsividade
- **Mobile-first** approach
- **Breakpoints Tailwind**: sm, md, lg, xl
- **Grid responsivo** para produtos
- **Menu adaptativo** para mobile

## 🚀 Deploy

A aplicação está configurada para deploy automático no Netlify:

```bash
npm run build
```

O build será gerado na pasta `dist/` e pode ser deployado em qualquer servidor estático.

**URL de Produção**: https://majestic-puppy-342d6e.netlify.app

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autor

Desenvolvido com ❤️ para demonstrar as melhores práticas em desenvolvimento React.

---

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato:

- 📧 Email: suporte@farmasaude.com.br
- 📱 WhatsApp: (11) 99999-9999
- 🌐 Site: https://farmasaude.com.br

---

**FarmaSaúde** - Sua farmácia online de confiança! 🏥✨