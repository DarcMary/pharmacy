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
  },{
    id: '16',
    description: "Medição rápida e precisa da temperatura.",
    name: "Termômetro Digital",
    price: 18.84,
    image: "https://images.tcdn.com.br/img/img_prod/1231250/termometro_clinico_digital_th400_g_tech_flexivel_6414_1_dda813f53459950a2276c211958e936c.png",
    category: 'equipamentos',
    brand: 'MedProtect',
    inStock: true,
    prescription: false
  },
  {
    id: '17',
    name: "Ibuprofeno 400mg",
    price: 13.01,
    image: "https://images.tcdn.com.br/img/img_prod/1189842/ibupril_400mg_10_capsulas_gelatinosas_moles_3951_1_00ece11613c45b152b3fea1a0392f397.png",
    description: "Anti-inflamatório e analgésico.",
    category: 'equipamentos',
    brand: 'MedProtect',
    inStock: true,
    prescription: false
  },
  {
    id: '18',
    name: "Pomada para Assaduras",
    price: 38.64,
    image: "https://dmvfarma.vtexassets.com/arquivos/ids/256048-800-auto?v=638602897062170000&width=800&height=auto&aspect=true",
    description: "Previne e trata assaduras em bebês.",
    category: 'medicamentos',
    brand: 'Genérico',
    inStock: true,
    prescription: false
  },
  {
    id: '19',
    name: "Protetor Solar FPS 50",
    price: 45.38,
    description: "Previne manchas.",
    image: "https://ikesaki.vtexassets.com/arquivos/ids/246154-800-auto?v=637255132536870000&width=800&height=auto&aspect=true",
    category: 'higiene',
    brand: 'Genérico',
    inStock: true,
    prescription: false
  },
  {
    id: '20',
    name: "Desodorante Roll-On",
    price: 5.99,
    image: "https://drogariavenancio.vtexassets.com/arquivos/ids/1279012-800-auto?v=638853531954070000&width=800&height=auto&aspect=true",
    description: "Proteção contra odores por 48h.",
    category: 'higiene',
    brand: 'Genérico',
    inStock: true,
    prescription: false
  },
  {
    id: '21',
    name: "Creme Dental Clareador",
    price: 14.28,
    image: "https://drogal.vtexassets.com/arquivos/ids/241671-800-600?v=638686242685100000&width=800&height=600&aspect=true",
    description: "Branqueamento e proteção prolongada.",
    category: 'higiene',
    brand: 'higiene',
    inStock: true,
    prescription: false
  },
  {
    id: '22',
    name: "Esparadrapo 10cm x 4,5m",
    price: 11.74,
    image: "https://cdn.dentalcremer.com.br/produtos/550/esparadrapo-impermeavel-25x90cm-cremer-dental-cremer-515374-01.jpg",
    description: "Fixação de curativos e dispositivos.",
    category: 'equipamentos',
    brand: 'equipamentos',
    inStock: true,
    prescription: false
  },
  {
    id: '23',
    name: "Creme Dental Clareador",
    price: 7.23,
    image: "https://drogal.vtexassets.com/arquivos/ids/241671-800-600?v=638686242685100000&width=800&height=600&aspect=true",
    description: "Branqueamento e proteção prolongada.",
    category: 'higiene',
    brand: 'higiene',
    inStock: true,
    prescription: false
  },
  {
    id: '24',
    name: "Curativo Adesivo",
    price: 3.05,
    image: "https://images.tcdn.com.br/img/img_prod/746795/curativo_adesivo_transparente_c_40_un_cremer_1104_1_20240715151010.jpg",
    description: "Protege pequenos ferimentos.",
    category: 'higiene',
    brand: 'higiene',
    inStock: true,
    prescription: false
  },
  {
    id: '25',
    name: "Sabonete Líquido Antisséptico",
    price: 14.28,
    image: "https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F3482859.webp&w=828&q=75",
    description: "Limpeza profunda com proteção antibacteriana.",
    category: 'higiene',
    brand: 'higiene',
    inStock: true,
    prescription: false
  },
  {
    id: '26',
    name: "Colágeno Hidrolisado",
    price: 47.36,
    image: "https://images.tcdn.com.br/img/img_prod/1254911/colageno_hidrolisado_103_1_571e9b06620cc2f9810c7829b6493104.png",
    description: "Melhora elasticidade da pele e articulações.",
    category: 'suplementos',
    brand: 'suplementos',
    inStock: true,
    prescription: false
  },
  {
    id: '27',
    name: "Gaze Estéril 7,5x7,5",
    price: 83.70,
    image: "https://paguemenos.vtexassets.com/arquivos/ids/638468-800-auto?v=638007989772170000&width=800&height=auto&aspect=true",
    description: "Absorção de secreções e cobertura de feridas.",
    category: 'equipamentos',
    brand: 'equipamentos',
    inStock: true,
    prescription: false
  },
  {
    id: '28',
    name: "Vitamina C 1000mg",
    price: 10.10,
    image: "https://drogariacristal.com/media/catalog/product/cache/dc75f304252411b8c602e1e96d99390d/v/i/vitamina_c_redoxon_1g_com_10_comprimidos_efervescentes.png",
    description: "Reforça a imunidade e combate radicais livres.",
    category: 'suplementos',
    brand: 'suplementos',
    inStock: true,
    prescription: false
  },
  {
    id: '29',
    name: "Colágeno Hidrolisado",
    price: 14.05,
    image: "https://images.tcdn.com.br/img/img_prod/1254911/colageno_hidrolisado_103_1_571e9b06620cc2f9810c7829b6493104.png",
    description: "Melhora elasticidade da pele e articulações.",
    category: 'suplementos',
    brand: 'suplementos',
    inStock: true,
    prescription: false
  },
  {
    id: '30',
    name: "Soro Fisiológico 500ml",
    price: 8.67,
    image: "https://cdn.dentalcremer.com.br/produtos/550/soro-fisiologico-sorimax-500ml-farmax-121319-dc.jpg",
    description: "Hidratação e limpeza de mucosas.",
    category: 'suplementos',
    brand: 'suplementos',
    inStock: true,
    prescription: false
  },
  {
    id: '31',
    name: 'Amoxicilina 500 mg – 21 cáps.',
    description: 'Antibiótico de amplo espectro para infecções respiratórias e urinárias. Uso oral adulto.*',
    price: 28.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'medicamentos',
    brand: 'Genérico EMS',
    inStock: true,
    prescription: true
  },
  {
    id: '32',
    name: 'Aspirina 100 mg c/30 comprimidos',
    description: 'Ácido acetilsalicílico para alívio de dores leves e ação antiplaquetária preventiva.',
    price: 12.50,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'medicamentos',
    brand: 'Aspirina® Bayer',
    inStock: true,
    prescription: false
  },
  {
    id: '33',
    name: 'Cetoconazol Shampoo 2 % 100 ml',
    description: 'Shampoo anticaspa medicinal para seborreia e dermatite, uso 2× por semana.',
    price: 36.40,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'cosmeticos',
    brand: 'Nizoral®',
    inStock: true,
    prescription: false
  },
  {
    id: '34',
    name: 'Cloridrato de Tramadol 50 mg – 20 cáps.',
    description: 'Analgésico opióide de ação central para dor moderada a severa. Uso adulto.*',
    price: 57.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'medicamentos',
    brand: 'Tramal® Cristália',
    inStock: true,
    prescription: true
  },
  {
    id: '35',
    name: 'Repelente Exposis Extreme Spray 100 ml',
    description: 'Loção spray com Icaridina 25 % – proteção por até 10 h contra mosquitos.',
    price: 49.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'cosmeticos',
    brand: 'Exposis®',
    inStock: true,
    prescription: false
  },
  {
    id: '36',
    name: 'Desloratadina 5 mg – 10 comprimidos',
    description: 'Antialérgico para rinite e urticária, não causa sonolência na dose recomendada.',
    price: 22.60,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'medicamentos',
    brand: 'Desalex®',
    inStock: true,
    prescription: false
  },
  {
    id: '37',
    name: 'Glicose Gel Oral 40 % – bisnaga 30 g',
    description: 'Reposição rápida de glicose em casos de hipoglicemia. Sabor morango.',
    price: 14.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'medicamentos',
    brand: 'CarbBoom®',
    inStock: true,
    prescription: false
  },
  {
    id: '38',
    name: 'Pomada Bepantol Baby 30 g',
    description: 'Pomada com dexpantenol para prevenção e tratamento de assaduras de bebês.',
    price: 37.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'higiene',
    brand: 'Bepantol®',
    inStock: true,
    prescription: false
  },
  {
    id: '39',
    name: 'Protetor Labial NIVEA Med Repair 4,8 g',
    description: 'Hidratação intensa dos lábios com FPS 15 e dexpantenol.',
    price: 15.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'cosmeticos',
    brand: 'NIVEA®',
    inStock: true,
    prescription: false
  },
  {
    id: '40',
    name: 'Soro Nasal Neosoro H 100 ml Spray',
    description: 'Solução salina isotônica para limpeza e descongestionamento nasal diário.',
    price: 17.80,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'medicamentos',
    brand: 'Neosoro®',
    inStock: true,
    prescription: false
  },
  {
    id: '41',
    name: 'Nebulizador Inalador NS Nebcom IV',
    description: 'Inalador compressor compacto com máscara adulto e infantil.',
    price: 189.00,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'equipamentos',
    brand: 'Nebcom®',
    inStock: true,
    prescription: false
  },
  {
    id: '42',
    name: 'Medidor de Glicose Accu-Chek Guide +50 tiras',
    description: 'Glicosímetro de leitura rápida com tiras de fácil manuseio.',
    price: 129.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'equipamentos',
    brand: 'Accu-Chek®',
    inStock: true,
    prescription: false
  },
  {
    id: '43',
    name: 'Esfigmomanômetro Premium Adulto Braçadeira Velcro',
    description: 'Aparelho aneróide para medir pressão arterial em casa ou consultório.',
    price: 99.50,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'equipamentos',
    brand: 'Premium®',
    inStock: true,
    prescription: false
  },
  {
    id: '44',
    name: 'Protetor Solar Neutrogena Sun Fresh FPS 70 200 ml',
    description: 'Textura ultraleve, resistente à água, proteção UVA/UVB e toque seco.',
    price: 64.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'cosmeticos',
    brand: 'Neutrogena®',
    inStock: true,
    prescription: false
  },
  {
    id: '45',
    name: 'Sabonete Antisséptico Protex Cream 85 g',
    description: 'Elimina 99,9 % das bactérias e hidrata a pele com glicerina.',
    price: 4.80,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'higiene',
    brand: 'Protex®',
    inStock: true,
    prescription: false
  },
  {
    id: '46',
    name: 'Escova Dental Colgate Twister Médio',
    description: 'Cerdas em espiral que removem mais placa nos espaços interdentais.',
    price: 8.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'higiene',
    brand: 'Colgate®',
    inStock: true,
    prescription: false
  },
  {
    id: '47',
    name: 'Fio Dental Oral-B Essential 50 m',
    description: 'Fio resistente que desliza facilmente e remove placa abaixo da linha da gengiva.',
    price: 14.20,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'higiene',
    brand: 'Oral-B®',
    inStock: true,
    prescription: false
  },
  {
    id: '48',
    name: 'Enxaguante Bucal Listerine Cool Mint 250 ml',
    description: 'Antisséptico bucal refrescante que reduz 99 % dos germes causadores de mau hálito.',
    price: 15.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'higiene',
    brand: 'Listerine®',
    inStock: true,
    prescription: false
  },
  {
    id: '49',
    name: 'Condicionador Head & Shoulders Anticaspa 200 ml',
    description: 'Hidratação e controle da caspa, uso diário, fórmula DermaSense™.',
    price: 28.50,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'cosmeticos',
    brand: 'Head & Shoulders®',
    inStock: true,
    prescription: false
  },
  {
    id: '50',
    name: 'Creme NIVEA Soft Hidratante 97 g',
    description: 'Creme leve com óleo de jojoba e vitamina E para corpo, mãos e rosto.',
    price: 22.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'cosmeticos',
    brand: 'NIVEA®',
    inStock: true,
    prescription: false
  },
  {
    id: '51',
    name: 'Shampoo Johnson’s Baby 200 ml',
    description: 'Chega de lágrimas™ – limpeza suave para cabelos e couro cabeludo sensíveis.',
    price: 17.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'higiene',
    brand: 'Johnson’s®',
    inStock: true,
    prescription: false
  },
  {
    id: '52',
    name: 'Fralda Pampers Confort Sec G – 30 un.',
    description: 'Canais de ar que ajudam a manter a pele seca por até 12 h.',
    price: 49.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'higiene',
    brand: 'Pampers®',
    inStock: true,
    prescription: false
  },
  {
    id: '53',
    name: 'Termômetro Infravermelho Sem Contato Multilaser',
    description: 'Leitura em 1 segundo, memória para 32 medições, visor retroiluminado.',
    price: 139.00,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'equipamentos',
    brand: 'Multilaser®',
    inStock: true,
    prescription: false
  },
  {
    id: '54',
    name: 'Cimegripe 16 cápsulas',
    description: 'Alívio de sintomas de gripe: febre, dores e congestão nasal (paracetamol + fenilefrina).',
    price: 19.50,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'medicamentos',
    brand: 'Cimed®',
    inStock: true,
    prescription: false
  },
  {
    id: '55',
    name: 'Benegrip Multi 20 comprimidos',
    description: 'Associação analgésica e descongestionante para sintomas de resfriado e gripe.',
    price: 17.40,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'medicamentos',
    brand: 'Benegrip®',
    inStock: true,
    prescription: false
  },
  {
    id: '56',
    name: 'Dorflex 36 comprimidos',
    description: 'Dipirona, citrato de orfenadrina e cafeína – relaxante muscular e analgésico.',
    price: 29.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'medicamentos',
    brand: 'Dorflex®',
    inStock: true,
    prescription: false
  },
  {
    id: '57',
    name: 'Buscopan Composto Gotas 10 ml',
    description: 'Escopolamina + dipirona para cólicas e dores abdominais de origem intestinal.',
    price: 22.60,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'medicamentos',
    brand: 'Buscopan®',
    inStock: true,
    prescription: false
  },
  {
    id: '58',
    name: 'Dramamine 50 mg – 20 comprimidos',
    description: 'Dimenidrinato para prevenção de enjoos em viagens, náuseas e vômitos.',
    price: 16.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'medicamentos',
    brand: 'Dramamine®',
    inStock: true,
    prescription: false
  },
  {
    id: '59',
    name: 'Polaramine 2 mg – 20 comprimidos',
    description: 'Anti-histamínico para alergias cutâneas e respiratórias. Pode causar sonolência.',
    price: 25.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'medicamentos',
    brand: 'Polaramine®',
    inStock: true,
    prescription: false
  },
  {
    id: '60',
    name: 'Xarope Vick Mel 120 ml',
    description: 'Alívio da tosse seca com extrato de mel e sabor limão.',
    price: 24.40,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'medicamentos',
    brand: 'Vick®',
    inStock: true,
    prescription: false
  },
  {
    id: '61',
    name: 'Pastilha Strepsils Mel & Limão 24 un.',
    description: 'Anestésico e antisséptico para dor e irritação de garganta.',
    price: 18.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'higiene',
    brand: 'Strepsils®',
    inStock: true,
    prescription: false
  },
  {
    id: '62',
    name: 'Addera Vitamina A + E – gotas 10 ml',
    description: 'Suplemento vitamínico para pele, visão e imunidade; dose diária em gotas.',
    price: 27.80,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'vitaminas',
    brand: 'Addera®',
    inStock: true,
    prescription: false
  },
  {
    id: '63',
    name: 'Vitamina C Redoxon 1 g – 10 comp. efervescentes',
    description: 'Alta dose de ácido ascórbico com rápida dissolução e sabor laranja.',
    price: 16.40,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'vitaminas',
    brand: 'Redoxon®',
    inStock: true,
    prescription: false
  },
  {
    id: '64',
    name: 'Centrum Mulher 30 comprimidos',
    description: 'Multivitamínico completo com ferro e ácido fólico voltado ao público feminino.',
    price: 59.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'vitaminas',
    brand: 'Centrum®',
    inStock: true,
    prescription: false
  },
  {
    id: '65',
    name: 'Cálcio + D3 Sundown 60 cápsulas',
    description: 'Suplemento de cálcio com vitamina D para saúde óssea.',
    price: 44.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'vitaminas',
    brand: 'Sundown®',
    inStock: true,
    prescription: false
  },
  {
    id: '66',
    name: 'Ômega 3 NOW 1000 mg – 120 cáps.',
    description: 'Ácidos graxos EPA/DHA concentrados para saúde cardiovascular e cerebral.',
    price: 79.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'vitaminas',
    brand: 'NOW®',
    inStock: true,
    prescription: false
  },
  {
    id: '67',
    name: 'Probiótico BioGaia Protectis 30 comp. mastigáveis',
    description: 'Lactobacillus reuteri DSM 17938 que auxilia no equilíbrio da flora intestinal.',
    price: 86.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'suplementos',
    brand: 'BioGaia®',
    inStock: true,
    prescription: false
  },
  {
    id: '68',
    name: 'Whey Protein Isolado Growth 900 g – chocolate',
    description: 'Proteína 90 % para ganho de massa muscular com BCAA natural.',
    price: 169.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'suplementos',
    brand: 'Growth®',
    inStock: true,
    prescription: false
  },
  {
    id: '69',
    name: 'Creatina Universal 300 g',
    description: 'Monoidrato micronizado para força e explosão muscular.',
    price: 139.00,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'suplementos',
    brand: 'Universal®',
    inStock: true,
    prescription: false
  },
  {
    id: '70',
    name: 'Colágeno Tipo II UC-II 40 mg – 30 cáps.',
    description: 'Colágeno não desnaturado para conforto articular e mobilidade.',
    price: 92.60,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'suplementos',
    brand: 'Sanavita®',
    inStock: true,
    prescription: false
  },
  {
    id: '71',
    name: 'Máscara Respiratória PFF2 (KN95) c/10 un.',
    description: 'Filtragem ≥ 95 %, ajuste anatômico, elástico soldado ultrassônico.',
    price: 29.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'equipamentos',
    brand: 'ProtecMask®',
    inStock: true,
    prescription: false
  },
  {
    id: '72',
    name: 'Luvas Nitrílicas Azuis M – 100 un.',
    description: 'Luvas de procedimento sem pó, alta resistência química e conforto.',
    price: 54.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'equipamentos',
    brand: 'Supermax®',
    inStock: true,
    prescription: false
  },
  {
    id: '73',
    name: 'Álcool em Gel Asseptgel Pump 500 g',
    description: 'Gel antisséptico 70 % v/v com glicerina que não resseca as mãos.',
    price: 14.50,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'higiene',
    brand: 'Asseptgel®',
    inStock: true,
    prescription: false
  },
  {
    id: '74',
    name: 'Lenço Umedecido Neutrox Baby c/100',
    description: 'Lenços dermatologicamente testados, sem álcool etílico, para pele sensível.',
    price: 17.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'higiene',
    brand: 'Neutrox®',
    inStock: true,
    prescription: false
  },
  {
    id: '75',
    name: 'Talco Tenys Pé Baruel 100 g',
    description: 'Proteção contra odores e umidade, fórmula antisséptica.',
    price: 11.60,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'cosmeticos',
    brand: 'Baruel®',
    inStock: true,
    prescription: false
  },
  {
    id: '76',
    name: 'Desodorante Aerosol Rexona Men V8 150 ml',
    description: 'Proteção 48 h contra transpiração com tecnologia MotionSense™.',
    price: 16.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'higiene',
    brand: 'Rexona®',
    inStock: true,
    prescription: false
  },
  {
    id: '77',
    name: 'Antisséptico Bucal Periogard 250 ml',
    description: 'Digluconato de clorexidina 0,12 % para tratamento de gengivite.',
    price: 36.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'higiene',
    brand: 'Periogard®',
    inStock: true,
    prescription: false
  },
  {
    id: '78',
    name: 'Shampoo Pantene Hidratação 400 ml',
    description: 'Pro-V + lipídios; restaura 3 × mais maciez desde o 1º uso.',
    price: 29.50,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'cosmeticos',
    brand: 'Pantene®',
    inStock: true,
    prescription: false
  },
  {
    id: '79',
    name: 'Condicionador Pantene Hidratação 400 ml',
    description: 'Fórmula Pro-V que sela cutículas e previne pontas duplas.',
    price: 29.50,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'cosmeticos',
    brand: 'Pantene®',
    inStock: true,
    prescription: false
  },
  {
    id: '80',
    name: 'Sabonete Líquido Dermotivin Oil Control 120 ml',
    description: 'Controle de oleosidade com ácido salicílico e extrato de hamamélis.',
    price: 79.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'cosmeticos',
    brand: 'Dermotivin®',
    inStock: true,
    prescription: false
  },
  {
    id: '81',
    name: 'Água Micelar L’Oréal Paris 5 em 1 200 ml',
    description: 'Limpa, demaquila, purifica, suaviza e reequilibra todos os tipos de pele.',
    price: 32.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'cosmeticos',
    brand: 'L’Oréal®',
    inStock: true,
    prescription: false
  },
  {
    id: '82',
    name: 'Creme Anti-Idade Olay Regenerist 50 g',
    description: 'Fórmula com niacinamida e peptídeos para firmeza e redução de linhas.',
    price: 139.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'cosmeticos',
    brand: 'Olay®',
    inStock: true,
    prescription: false
  },
  {
    id: '83',
    name: 'Gel Dental Sensodyne Repair & Protect 90 g',
    description: 'Nova tecnologia NovaMin™ que repara e protege dentina exposta.',
    price: 28.60,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'higiene',
    brand: 'Sensodyne®',
    inStock: true,
    prescription: false
  },
  {
    id: '84',
    name: 'Teste de Gravidez Clearblue Digital',
    description: 'Resultado claro em palavras e indicação de semanas de gestação.',
    price: 39.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'equipamentos',
    brand: 'Clearblue®',
    inStock: true,
    prescription: false
  },
  {
    id: '85',
    name: 'Nebacetin Pomada 30 g',
    description: 'Associação de antibióticos bacitracina + neomicina para ferimentos superficiais.',
    price: 33.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'medicamentos',
    brand: 'Nebacetin®',
    inStock: true,
    prescription: false
  },
  {
    id: '86',
    name: 'Gel Pós-Sol Banana Boat Aloe Vera 180 ml',
    description: 'Sensação refrescante que ajuda a aliviar vermelhidão e hidratar a pele.',
    price: 34.50,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'cosmeticos',
    brand: 'Banana Boat®',
    inStock: true,
    prescription: false
  },
  {
    id: '87',
    name: 'Repelente Infantil OFF! Kids Loção 200 ml',
    description: 'Proteção de até 6 h contra mosquitos, dermatologicamente testado.',
    price: 29.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'cosmeticos',
    brand: 'OFF!®',
    inStock: true,
    prescription: false
  },
  {
    id: '88',
    name: 'Spray Álcool 70 % Needs 250 ml',
    description: 'Fácil aplicação para higienização de mãos e superfícies.',
    price: 12.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'higiene',
    brand: 'Needs®',
    inStock: true,
    prescription: false
  },
  {
    id: '89',
    name: 'Solução Micelar Bioderma Sensibio H2O 500 ml',
    description: 'Limpeza e remoção de maquiagem para peles sensíveis, sem enxágue.',
    price: 109.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'cosmeticos',
    brand: 'Bioderma®',
    inStock: true,
    prescription: false
  },
  {
    id: '90',
    name: 'Inalador Portátil G-Tech NebMesh',
    description: 'Tecnologia mesh silenciosa – ideal para asma e bronquite; USB recarregável.',
    price: 229.00,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'equipamentos',
    brand: 'G-Tech®',
    inStock: true,
    prescription: false
  },
  {
    id: '91',
    name: 'Óleo de Rícino Laxante 100 ml',
    description: 'Laxante natural de ação suave para prisão de ventre ocasional.',
    price: 11.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'medicamentos',
    brand: 'Laxarex®',
    inStock: true,
    prescription: false
  },
  {
    id: '92',
    name: 'Vitamina B12 2000 µg Sundown – 100 comprimidos',
    description: 'Metilcobalamina para metabolismo energético e redução de cansaço.',
    price: 49.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'vitaminas',
    brand: 'Sundown®',
    inStock: true,
    prescription: false
  },
  {
    id: '93',
    name: 'Gel Gingival Gingilone 10 g',
    description: 'Triancinolona + anestésico para aftas e inflamações gengivais.',
    price: 21.60,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'medicamentos',
    brand: 'Gingilone®',
    inStock: true,
    prescription: false
  },
  {
    id: '94',
    name: 'Cloreto de Magnésio PA 33 g Pó',
    description: 'Suplemento mineral para músculos, ossos e metabolismo energético.',
    price: 18.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'suplementos',
    brand: 'Uniphar®',
    inStock: true,
    prescription: false
  },
  {
    id: '95',
    name: 'Sabonete Íntimo Dermacyd Breeze 200 ml',
    description: 'pH equilibrado, proteção contínua contra odores e desconfortos.',
    price: 24.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'higiene',
    brand: 'Dermacyd®',
    inStock: true,
    prescription: false
  },
  {
    id: '96',
    name: 'Escova Interdental GUM Soft-Picks c/10',
    description: 'Cerdas flexíveis de borracha que removem placa sem machucar a gengiva.',
    price: 23.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'higiene',
    brand: 'GUM®',
    inStock: true,
    prescription: false
  },
  {
    id: '97',
    name: 'Demaquilante Neutrogena Deep Clean 200 ml',
    description: 'Remove maquiagem à prova d’água sem deixar a pele oleosa.',
    price: 39.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'cosmeticos',
    brand: 'Neutrogena®',
    inStock: true,
    prescription: false
  },
  {
    id: '98',
    name: 'Simeticona Luftal 125 mg – 10 comprimidos mastigáveis',
    description: 'Alívio rápido dos gases e sensação de estufamento.',
    price: 17.50,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'medicamentos',
    brand: 'Luftal®',
    inStock: true,
    prescription: false
  },
  {
    id: '99',
    name: 'Melatonina 3 mg Natrol – 60 comp.',
    description: 'Suplemento de melatonina para regular o ciclo do sono naturalmente.',
    price: 62.90,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'suplementos',
    brand: 'Natrol®',
    inStock: true,
    prescription: false
  },
  {
    id: '100',
    name: 'Spray Higienizador de Máscaras Lifeguard 100 ml',
    description: 'Desinfeta e prolonga o uso de máscaras faciais de tecido e PFF2.',
    price: 18.20,
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg',
    category: 'higiene',
    brand: 'Lifeguard®',
    inStock: true,
    prescription: false
  }
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

  for (let i = 100; i <= 100; i++) {
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