export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  inStock: boolean;
  prescription: boolean;
}

export const products: Product[] = [
  // Medicamentos
  {
    id: '1',
    name: 'Paracetamol 500mg',
    description: 'Analgésico e antitérmico para dores leves a moderadas e febre. Caixa com 20 comprimidos.',
    price: 8.50,
    image: 'https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F3541518.webp&w=828&q=75',
    category: 'medicamentos',
    brand: 'Genérico',
    inStock: true,
    prescription: false
  },
  {
    id: '2',
    name: 'Ibuprofeno 600mg',
    description: 'Anti-inflamatório não esteroidal para dores, inflamações e febre. Caixa com 30 comprimidos.',
    price: 15.90,
    image: 'https://sinete.com.br/media/mf_webp/png/media/catalog/product/cache/5b40fce2765566b85b6a8905e9b49538/i/b/ibuprofeno_600mg_30_comprimidos_prati_donaduzzi_gen_rico_1_1_.webp',
    category: 'medicamentos',
    brand: 'Advil',
    inStock: true,
    prescription: false
  },
  {
    id: '3',
    name: 'Dipirona 500mg',
    description: 'Analgésico e antitérmico potente para dores intensas e febre alta. Caixa com 20 comprimidos.',
    price: 12.30,
    image: 'https://farma22.vtexassets.com/arquivos/ids/184751-800-450?v=638133589433970000&width=800&height=450&aspect=true',
    category: 'medicamentos',
    brand: 'Novalgina',
    inStock: true,
    prescription: false
  },
  {
    id: '4',
    name: 'Omeprazol 20mg',
    description: 'Inibidor da bomba de prótons para tratamento de úlceras e gastrite. Caixa com 14 cápsulas.',
    price: 22.80,
    image: 'https://santaluciadrogaria.vtexassets.com/arquivos/ids/310913-800-auto?v=637820192066670000&width=800&height=auto&aspect=true',
    category: 'medicamentos',
    brand: 'Losec',
    inStock: true,
    prescription: false
  },
  {
    id: '5',
    name: 'Loratadina 10mg',
    description: 'Anti-histamínico para alergias, rinite e urticária. Caixa com 12 comprimidos.',
    price: 18.60,
    image: 'https://cdn1.staticpanvel.com.br/produtos/15/157190-15.jpg?ims=424x',
    category: 'medicamentos',
    brand: 'Claritin',
    inStock: true,
    prescription: false
  },
  // Cosméticos
  {
    id: '6',
    name: 'Protetor Solar FPS 60',
    description: 'Proteção solar avançada com FPS 60, resistente à água. Textura leve e não oleosa.',
    price: 45.90,
    image: 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/365731-450-450/protetor-solar-la-roche-posay-anthelios-xl-protect-fps60.jpg?v=637115165189600000',
    category: 'cosmeticos',
    brand: 'La Roche-Posay',
    inStock: true,
    prescription: false
  },
  {
    id: '7',
    name: 'Hidratante Facial Anti-idade',
    description: 'Creme hidratante com ácido hialurônico e vitamina C para redução de rugas.',
    price: 89.90,
    image: 'https://amobeleza.vtexassets.com/arquivos/ids/259584-800-auto?v=638440349126270000&width=800&height=auto&aspect=true',
    category: 'cosmeticos',
    brand: 'Vichy',
    inStock: true,
    prescription: false
  },
  {
    id: '8',
    name: 'Shampoo Anticaspa',
    description: 'Shampoo medicinal para tratamento e prevenção da caspa. Fórmula dermatologicamente testada.',
    price: 32.50,
    image: 'https://a-static.mlcdn.com.br/1500x1500/shampoo-selsun-blue-naturals-325ml-anti-caspa-e-coceira-para-couro-cabeludo-seco/nocnoceua/aub001p0mwy6/e97fbbbfa6f4f5094969ad07c38bf79d.jpeg',
    category: 'cosmeticos',
    brand: 'Selsun',
    inStock: true,
    prescription: false
  },
  // Vitaminas e Suplementos
  {
    id: '9',
    name: 'Vitamina D3 1000UI',
    description: 'Suplemento de vitamina D3 para fortalecimento ósseo e imunidade. Frasco com 60 cápsulas.',
    price: 35.80,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_790845-MLB47432564524_092021-F.webp',
    category: 'vitaminas',
    brand: 'Vitalis',
    inStock: true,
    prescription: false
  },
  {
    id: '10',
    name: 'Complexo B',
    description: 'Suplemento vitamínico do complexo B para energia e sistema nervoso. Frasco com 30 cápsulas.',
    price: 28.90,
    image: 'https://artenativaprodutosnaturais.com.br/wp-content/uploads/2023/09/complexo-b-50-un-copiar-400x400.webp',
    category: 'vitaminas',
    brand: 'Centrum',
    inStock: true,
    prescription: false
  },
  {
    id: '11',
    name: 'Ômega 3',
    description: 'Suplemento de ômega 3 para saúde cardiovascular e cerebral. Frasco com 120 cápsulas.',
    price: 42.30,
    image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now01664/g/27.jpg',
    category: 'vitaminas',
    brand: 'Naturalis',
    inStock: true,
    prescription: false
  },
  // Higiene e Cuidados
  {
    id: '12',
    name: 'Álcool em Gel 70%',
    description: 'Álcool em gel para higienização das mãos. Frasco de 500ml com bico dosador.',
    price: 12.90,
    image: 'https://cdn.dentalcremer.com.br/produtos/550/alcool-gel-70-septpro-pump-440g-antissept-prolink-dental-cremer-101357-01.jpg',
    category: 'higiene',
    brand: 'Antisséptico',
    inStock: true,
    prescription: false
  },
  {
    id: '13',
    name: 'Sabonete Líquido Antisséptico',
    description: 'Sabonete líquido com ação antisséptica para higiene corporal. Frasco de 200ml.',
    price: 18.70,
    image: 'https://www.protex-soap.com.br/content/dam/cp-sites/personal-care/protex-relaunch/pt_br/products/protex-duo-para-as-maos-01.png',
    category: 'higiene',
    brand: 'Protex',
    inStock: true,
    prescription: false
  },
  {
    id: '14',
    name: 'Termômetro Digital',
    description: 'Termômetro digital de precisão para medição de temperatura corporal. Visor LCD.',
    price: 29.90,
    image: 'https://images.tcdn.com.br/img/img_prod/1125779/termometro_clinico_digital_rigido_dellamed_952_1_ceda58dbc2d7eb8f64538685a4297631.jpg',
    category: 'equipamentos',
    brand: 'TechLine',
    inStock: true,
    prescription: false
  },
  {
    id: '15',
    name: 'Máscara Cirúrgica',
    description: 'Máscara cirúrgica descartável tripla camada. Caixa com 50 unidades.',
    price: 25.50,
    image: 'https://images.tcdn.com.br/img/img_prod/1217991/mascara_cirurgica_tripla_com_filtro_elastico_descartavel_azul_50_unidades_1356_1_9474f8605b9e086256ddb6f653279628.jpg',
    category: 'equipamentos',
    brand: 'MedProtect',
    inStock: true,
    prescription: false
  },
  // Adicionar mais produtos para chegar a 100...
  // Vou adicionar uma função para gerar produtos automaticamente
];

// Função para gerar produtos adicionais
const generateAdditionalProducts = (): Product[] => {
  const additionalProducts: Product[] = [];
  const categories = ['medicamentos', 'cosmeticos', 'vitaminas', 'higiene', 'equipamentos'];
  const brands = ['Genérico', 'Bayer', 'Pfizer', 'Novartis', 'Roche', 'Johnson', 'Neutrogena', 'Vichy', 'La Roche-Posay'];
  
  const productTemplates = [
    { name: 'Vitamina C', base: 'Suplemento vitamínico', category: 'vitaminas' },
    { name: 'Creme Hidratante', base: 'Creme para pele', category: 'cosmeticos' },
    { name: 'Antibiótico', base: 'Medicamento antibacteriano', category: 'medicamentos' },
    { name: 'Desodorante', base: 'Produto de higiene', category: 'higiene' },
    { name: 'Medidor de Pressão', base: 'Equipamento médico', category: 'equipamentos' },
    { name: 'Protetor Labial', base: 'Produto de proteção', category: 'cosmeticos' },
    { name: 'Antialérgico', base: 'Medicamento para alergias', category: 'medicamentos' },
    { name: 'Colírio', base: 'Medicamento oftálmico', category: 'medicamentos' },
    { name: 'Creme Dental', base: 'Produto de higiene bucal', category: 'higiene' },
    { name: 'Multivitamínico', base: 'Suplemento completo', category: 'vitaminas' },
  ];

  for (let i = 16; i <= 100; i++) {
    const template = productTemplates[Math.floor(Math.random() * productTemplates.length)];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const price = Math.floor(Math.random() * 80) + 10;
    
    additionalProducts.push({
      id: i.toString(),
      name: `${template.name} ${brand} ${i}`,
      description: `${template.base} de alta qualidade da marca ${brand}. Produto testado e aprovado pela ANVISA.`,
      price: price,
      image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
      category: template.category,
      brand: brand,
      inStock: Math.random() > 0.1, // 90% dos produtos em estoque
      prescription: Math.random() > 0.7 // 30% dos produtos necessitam prescrição
    });
  }
  
  return additionalProducts;
};

export const allProducts = [...products, ...generateAdditionalProducts()];