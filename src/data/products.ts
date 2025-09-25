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
  {
    id: '16',
    name: 'Amoxicilina 500mg',
    description: 'Antibiótico para infecções bacterianas. Caixa com 21 cápsulas.',
    price: 24.90,
    image: 'https://maxxieconomica.com/storage/photos/1/Products/ean/7896004702223.jpg',
    category: 'medicamentos',
    brand: 'EMS',
    inStock: true,
    prescription: true
  },
  {
    id: '17',
    name: 'Azitromicina 500mg',
    description: 'Antibiótico de amplo espectro. Caixa com 3 comprimidos.',
    price: 19.90,
    image: 'https://farmex.cl/cdn/shop/products/azitromicina-500-mg-x-6-comp-mintlab-405002.jpg?v=1692989533',
    category: 'medicamentos',
    brand: 'EMS',
    inStock: true,
    prescription: true
  },
  {
    id: '18',
    name: 'Losartana Potássica 50mg',
    description: 'Anti-hipertensivo para controle da pressão arterial. Caixa com 30 comprimidos.',
    price: 16.50,
    image: 'https://d1jgmae0hcnr1i.cloudfront.net/Custom/Content/Products/91/67/91673_losartana-potassica-50-mg-c-30-cp-rev-p67633_m1_638375339080967822.webp',
    category: 'medicamentos',
    brand: 'Medley',
    inStock: true,
    prescription: true
  },
  {
    id: '19',
    name: 'Sinvastatina 20mg',
    description: 'Redutor de colesterol. Caixa com 30 comprimidos.',
    price: 22.00,
    image: 'https://d1jgmae0hcnr1i.cloudfront.net/Custom/Content/Products/93/08/93082_sinvastatina-20-mg-c-30-cp-rev-p70610_m1_638288353718338615.webp',
    category: 'medicamentos',
    brand: 'Sandoz',
    inStock: true,
    prescription: true
  },
  {
    id: '20',
    name: 'Metformina 850mg',
    description: 'Medicamento para diabetes tipo 2. Caixa com 30 comprimidos.',
    price: 14.90,
    image: 'https://d1jgmae0hcnr1i.cloudfront.net/Custom/Content/Products/89/35/89352_cloridrato-de-metformina-850-mg-c-30-cpr-p63292_m1_638279488174785118.webp',
    category: 'medicamentos',
    brand: 'Merck',
    inStock: true,
    prescription: true
  },
  {
    id: '21',
    name: 'Cetoconazol Creme',
    description: 'Antifúngico tópico para micoses de pele. Bisnaga com 30g.',
    price: 18.90,
    image: 'https://product-data.raiadrogasil.io/images/3553671.webp',
    category: 'medicamentos',
    brand: 'Medley',
    inStock: true,
    prescription: false
  },
  {
    id: '22',
    name: 'Prednisona 20mg',
    description: 'Corticóide para processos inflamatórios. Caixa com 20 comprimidos.',
    price: 13.50,
    image: 'https://d1jgmae0hcnr1i.cloudfront.net/Custom/Content/Products/92/62/92622_prednisona-20mg-c-10-cpr-p123093_m1_638372779580702959.webp',
    category: 'medicamentos',
    brand: 'EMS',
    inStock: true,
    prescription: true
  },
  {
    id: '23',
    name: 'Cloridrato de Sertralina 50mg',
    description: 'Antidepressivo. Caixa com 30 comprimidos.',
    price: 29.90,
    image: 'https://farmaciapermanente.com.br/media/produtos/7896422506304_400x400.jpg',
    category: 'medicamentos',
    brand: 'Pfizer',
    inStock: true,
    prescription: true
  },
  {
    id: '24',
    name: 'Diclofenaco Sódico 50mg',
    description: 'Anti-inflamatório para dores e inflamações. Caixa com 20 comprimidos.',
    price: 11.90,
    image: 'https://d1jgmae0hcnr1i.cloudfront.net/Custom/Content/Products/89/33/89332_diclofenaco-sodico-50-mg-c-20-cp-p62936_m1_638279469482344345.webp',
    category: 'medicamentos',
    brand: 'Cimed',
    inStock: true,
    prescription: false
  },
  {
    id: '25',
    name: 'Enalapril 10mg',
    description: 'Anti-hipertensivo. Caixa com 30 comprimidos.',
    price: 15.90,
    image: 'https://d1jgmae0hcnr1i.cloudfront.net/Custom/Content/Products/90/24/90248_maleato-de-enalapril-10-mg-c-30-cp-p65583_m1_638393602540686287.webp',
    category: 'medicamentos',
    brand: 'Bayer',
    inStock: true,
    prescription: true
  },
  {
    id: '26',
    name: 'Clonazepam 2mg',
    description: 'Ansiolítico e anticonvulsivante. Caixa com 30 comprimidos.',
    price: 27.90,
    image: 'https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F14982029.webp&w=3840&q=40',
    category: 'medicamentos',
    brand: 'Roche',
    inStock: true,
    prescription: true
  },
  {
    id: '27',
    name: 'AAS 100mg',
    description: 'Antitrombótico para prevenção de eventos cardiovasculares. Caixa com 30 comprimidos.',
    price: 9.90,
    image: 'https://cdn1.staticpanvel.com.br/produtos/15/437240-15_964659.jpg',
    category: 'medicamentos',
    brand: 'Bayer',
    inStock: true,
    prescription: false
  },
  {
    id: '28',
    name: 'Levotiroxina Sódica 50mcg',
    description: 'Hormônio tireoidiano. Caixa com 30 comprimidos.',
    price: 21.90,
    image: 'https://www.santoremedio.com.br/media/produtos/7897595901316_400x400.png',
    category: 'medicamentos',
    brand: 'Sanofi',
    inStock: true,
    prescription: true
  },
  {
    id: '29',
    name: 'Captopril 25mg',
    description: 'Anti-hipertensivo. Caixa com 30 comprimidos.',
    price: 12.90,
    image: 'https://d1jgmae0hcnr1i.cloudfront.net/Custom/Content/Products/90/22/90227_captopril-25mg-c-30cpr-p65235_m1_638284790715134601.webp',
    category: 'medicamentos',
    brand: 'EMS',
    inStock: true,
    prescription: true
  },
  {
    id: '30',
    name: 'Ibuprofeno 400mg',
    description: 'Anti-inflamatório para dores e febre. Caixa com 20 comprimidos.',
    price: 14.90,
    image: 'https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F3540956.webp&w=3840&q=40',
    category: 'medicamentos',
    brand: 'Advil',
    inStock: true,
    prescription: false
  },
  {
    id: '31',
    name: 'Nimesulida 100mg',
    description: 'Anti-inflamatório para dores agudas. Caixa com 12 comprimidos.',
    price: 13.90,
    image: 'https://d3mhu901409m9r.cloudfront.net/Custom/Content/Products/45/98/45986_nimesulida-100-mg-c-12-cpr-globo-p37733_l1_638700461701870805.webp',
    category: 'medicamentos',
    brand: 'Medley',
    inStock: true,
    prescription: false
  },
  {
    id: '32',
    name: 'Omeprazol 40mg',
    description: 'Inibidor da bomba de prótons. Caixa com 14 cápsulas.',
    price: 28.90,
    image: 'https://images.tcdn.com.br/img/img_prod/621928/omeprazol_40mg_60_capsulas_659_1_20190508173134.jpg',
    category: 'medicamentos',
    brand: 'Eurofarma',
    inStock: true,
    prescription: false
  },
  {
    id: '33',
    name: 'Fluoxetina 20mg',
    description: 'Antidepressivo. Caixa com 30 cápsulas.',
    price: 23.90,
    image: 'https://e.drogasul.med.br/4711-large_default/gfluoxetina-20-mg-30-caps-p344.webp',
    category: 'medicamentos',
    brand: 'EMS',
    inStock: true,
    prescription: true
  },
  {
  id: '88',
  name: 'Cetirizina 10mg',
  description: 'Antialérgico para alívio de sintomas de rinite e alergias. Caixa com 10 comprimidos.',
  price: 16.90,
  image: 'https://loja.farmaciagarcia.net/cdn/shop/products/cetirizina-sandoz-10-mg-comprimidos.jpg?v=1619201084',
  category: 'medicamentos',
  brand: 'Zyrtec',
  inStock: true,
  prescription: false
},
{
  id: '89',
  name: 'Dexametasona 4mg',
  description: 'Corticóide para processos inflamatórios. Caixa com 10 comprimidos.',
  price: 12.50,
  image: 'https://d1jgmae0hcnr1i.cloudfront.net/Custom/Content/Products/88/96/88962_dexametasona-4mg-c-10cpr-p62069_m1_638277817808348366.webp',
  category: 'medicamentos',
  brand: 'EMS',
  inStock: true,
  prescription: true
},
{
  id: '90',
  name: 'Amoxicilina + Clavulanato',
  description: 'Antibiótico para infecções bacterianas. Caixa com 14 comprimidos.',
  price: 39.90,
  image: 'https://70913.cdn.simplo7.net/static/70913/sku/farmacia-antibioticos-agemoxi-cl-amoxilina-clavulanato-de-potassio--p-1631924661418.jpg',
  category: 'medicamentos',
  brand: 'GlaxoSmithKline',
  inStock: true,
  prescription: true
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
   {
    id: '34',
    name: 'Shampoo Reconstrutor',
    description: 'Shampoo para cabelos danificados. Frasco com 400ml.',
    price: 29.90,
    image: 'https://drogariasp.vteximg.com.br/arquivos/ids/1151266-1000-1000/720364---Shampoo-Tio-Nacho-Reconstrutor-Total-415ml_0000_7898636192144--3-.png?v=638611603281000000',
    category: 'cosmeticos',
    brand: 'Pantene',
    inStock: true,
    prescription: false
  },
  {
    id: '35',
    name: 'Condicionador Nutritivo',
    description: 'Condicionador para cabelos secos. Frasco com 400ml.',
    price: 31.90,
    image: 'https://invictusmanipulacao.com.br/wp-content/uploads/2025/02/Condicionador-Nutritivo.png',
    category: 'cosmeticos',
    brand: 'Elseve',
    inStock: true,
    prescription: false
  },
  {
    id: '36',
    name: 'Creme para Pentear',
    description: 'Creme para pentear cabelos cacheados. Frasco com 250ml.',
    price: 19.90,
    image: 'https://cdn.awsli.com.br/600x450/223/223578/produto/289422232/elseve-cachos-longos-dos-sonhos-creme-de-pentear--1--j6gvn17pyi.jpg',
    category: 'cosmeticos',
    brand: 'Salon Line',
    inStock: true,
    prescription: false
  },
  {
    id: '37',
    name: 'Óleo Capilar',
    description: 'Óleo nutritivo para cabelos. Frasco com 100ml.',
    price: 27.90,
    image: 'https://product-data.raiadrogasil.io/images/3542922.webp',
    category: 'cosmeticos',
    brand: 'Elseve',
    inStock: true,
    prescription: false
  },
  {
    id: '38',
    name: 'Sabonete Facial',
    description: 'Sabonete líquido para limpeza facial. Frasco com 150ml.',
    price: 22.90,
    image: 'https://drogal.vtexassets.com/arquivos/ids/236626/116680.jpg?v=638633531656000000',
    category: 'cosmeticos',
    brand: 'Neutrogena',
    inStock: true,
    prescription: false
  },
  {
    id: '39',
    name: 'Água Micelar',
    description: 'Solução de limpeza facial. Frasco com 200ml.',
    price: 24.90,
    image: 'https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F3445646.webp&w=3840&q=40',
    category: 'cosmeticos',
    brand: 'L\'Oréal',
    inStock: true,
    prescription: false
  },
  {
    id: '40',
    name: 'Protetor Solar FPS 30',
    description: 'Protetor solar facial e corporal. Frasco com 120ml.',
    price: 39.90,
    image: 'https://drogariasp.vteximg.com.br/arquivos/ids/668500-1000-1000/690570---protetor-solar-facial-darrow-actine-fps30-40gr-darrow-1.jpg?v=637903160837230000',
    category: 'cosmeticos',
    brand: 'Nivea',
    inStock: true,
    prescription: false
  },
  {
    id: '41',
    name: 'Creme Antissinais',
    description: 'Creme facial para redução de linhas de expressão. Bisnaga com 50g.',
    price: 49.90,
    image: 'https://tfdfn2.vtexassets.com/arquivos/ids/246767-800-800?v=638424157865970000&width=800&height=800&aspect=true',
    category: 'cosmeticos',
    brand: 'Vichy',
    inStock: true,
    prescription: false
  },
  {
    id: '42',
    name: 'Máscara Facial de Argila',
    description: 'Máscara para limpeza profunda da pele. Sachê com 8g.',
    price: 7.90,
    image: 'https://drogariasp.vteximg.com.br/arquivos/ids/634752-1000-1000/662569---mascara-facial-ricca-argila-natural-da-lhe-lama-25g.jpg?v=637873576978230000',
    category: 'cosmeticos',
    brand: 'Avon',
    inStock: true,
    prescription: false
  },
  {
    id: '43',
    name: 'Esfoliante Corporal',
    description: 'Esfoliante para renovação da pele. Frasco com 200ml.',
    price: 26.90,
    image: 'https://images.tcdn.com.br/img/img_prod/1221238/esfoliante_corpo_e_rosto_pitaya_acido_hialuronico_labotrat_150g_5377_1_d81dd1f6f87e684aa48fd9c3eb8d1269.png',
    category: 'cosmeticos',
    brand: 'Natura',
    inStock: true,
    prescription: false
  },
  {
    id: '44',
    name: 'Desodorante Roll-on',
    description: 'Desodorante antitranspirante. Frasco com 50ml.',
    price: 12.90,
    image: 'https://io.convertiez.com.br/m/farmaciasheroos/shop/products/images/103720/medium/des-above-roll-derm-men-50ml_57607.png',
    category: 'cosmeticos',
    brand: 'Rexona',
    inStock: true,
    prescription: false
  },
  {
    id: '45',
    name: 'Batom Hidratante',
    description: 'Batom com vitamina E. Estojo com 3,5g.',
    price: 18.90,
    image: 'https://product-data.raiadrogasil.io/images/10656426.webp',
    category: 'cosmeticos',
    brand: 'Maybelline',
    inStock: true,
    prescription: false
  },
  {
    id: '46',
    name: 'Demaquilante Bifásico',
    description: 'Removedor de maquiagem à prova d\'água. Frasco com 120ml.',
    price: 23.90,
    image: 'https://drogariasp.vtexassets.com/arquivos/ids/477024/312525---locao-demaquilante-nivea-visage-double-effect-bifasico-125ml-1.jpg?v=637697386649370000',
    category: 'cosmeticos',
    brand: 'L\'Oréal',
    inStock: true,
    prescription: false
  },
  {
    id: '47',
    name: 'Creme para Mãos',
    description: 'Hidratação intensiva para mãos ressecadas. Bisnaga com 50g.',
    price: 15.90,
    image: 'https://drogariasp.vteximg.com.br/arquivos/ids/1174447-1000-1000/325082---creme-para-as-maos-granado-pink-neutralizador-de-odor-60g_0000_creme_maos_C.png.png?v=638660007810100000',
    category: 'cosmeticos',
    brand: 'Granado',
    inStock: true,
    prescription: false
  },
  {
    id: '48',
    name: 'Gel Esfoliante Facial',
    description: 'Gel para limpeza e esfoliação do rosto. Frasco com 100g.',
    price: 21.90,
    image: 'https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F3513602.webp&w=3840&q=40',
    category: 'cosmeticos',
    brand: 'Nivea',
    inStock: true,
    prescription: false
  },
  {
    id: '49',
    name: 'Creme Noturno Facial',
    description: 'Creme facial para uso noturno. Bisnaga com 50g.',
    price: 34.90,
    image: 'https://io.convertiez.com.br/m/morifarma/shop/products/images/270063/large/creme-facial-nivea-nutritivo-noturno-100g_8068.jpg',
    category: 'cosmeticos',
    brand: 'Vichy',
    inStock: true,
    prescription: false
  },
  {
    id: '50',
    name: 'Sérum Facial',
    description: 'Sérum antioxidante com vitamina C. Frasco com 30ml.',
    price: 59.90,
    image: 'https://d16w7cuzwgzfcy.cloudfront.net/Custom/Content/Products/18/55/185575_serum-facial-principia-mix-02-30ml-p563218_m1_638217276171998650.webp',
    category: 'cosmeticos',
    brand: 'La Roche-Posay',
    inStock: true,
    prescription: false
  },
  {
    id: '51',
    name: 'Lenço Demaquilante',
    description: 'Lenços para remoção de maquiagem. Embalagem com 25 unidades.',
    price: 16.90,
    image: 'https://farmaciasdescontao.com.br/BACKOFFICE/Uploads/Produto/Normal/7891010566722.jpg',
    category: 'cosmeticos',
    brand: 'Neutrogena',
    inStock: true,
    prescription: false
  },
  {
  id: '91',
  name: 'Creme Hidratante Corporal',
  description: 'Hidratação profunda para todos os tipos de pele. Frasco com 200ml.',
  price: 27.90,
  image: 'https://paguemenos.vtexassets.com/arquivos/ids/1002287-800-auto?v=638791089793530000&width=800&height=auto&aspect=true',
  category: 'cosmeticos',
  brand: 'Nivea',
  inStock: true,
  prescription: false
},
{
  id: '92',
  name: 'Máscara Capilar Nutritiva',
  description: 'Máscara para nutrição intensa dos fios. Pote com 300g.',
  price: 34.90,
  image: 'https://drogariasp.vteximg.com.br/arquivos/ids/473795-1000-1000/Mascara-Nutritiva-Capilar-Lowell-Protect-Care-240g-739634.jpg?v=637674991112630000',
  category: 'cosmeticos',
  brand: 'Elseve',
  inStock: true,
  prescription: false
},
{
  id: '93',
  name: 'Tônico Facial',
  description: 'Tônico para limpeza e tonificação da pele. Frasco com 200ml.',
  price: 22.90,
  image: 'https://drogal.vtexassets.com/arquivos/ids/242596/123014.jpg?v=638713023120430000',
  category: 'cosmeticos',
  brand: 'Natura',
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
  {
    id: '52',
    name: 'Vitamina C 1000mg',
    description: 'Suplemento de vitamina C. Frasco com 60 comprimidos.',
    price: 29.90,
    image: 'https://sjdigital.vtexassets.com/arquivos/ids/1110858/primia-vitamina-c-1000mg-30-comprimidos-10022151-1.jpg?v=638700303709630000',
    category: 'vitaminas',
    brand: 'Sundown',
    inStock: true,
    prescription: false
  },
  {
    id: '53',
    name: 'Vitamina E 400UI',
    description: 'Suplemento de vitamina E. Frasco com 60 cápsulas.',
    price: 34.90,
    image: 'https://drogariasp.vteximg.com.br/arquivos/ids/932923-1000-1000/image-e07cbc2795834079b3f1effd845a8d33.jpg?v=638249411984330000',
    category: 'vitaminas',
    brand: 'Now Foods',
    inStock: true,
    prescription: false
  },
  {
    id: '54',
    name: 'Cálcio + Vitamina D',
    description: 'Suplemento para ossos e dentes. Frasco com 60 comprimidos.',
    price: 32.90,
    image: 'https://drogariasp.vteximg.com.br/arquivos/ids/1193670-1000-1000/861928-Suplemento-Alimentar-Neo-Quimica-Calcio-Vitamina-D-60-Comprimidos.jpg.jpg?v=638732358598830000',
    category: 'vitaminas',
    brand: 'Centrum',
    inStock: true,
    prescription: false
  },
  {
    id: '55',
    name: 'Magnésio Dimalato',
    description: 'Suplemento mineral. Frasco com 60 cápsulas.',
    price: 39.90,
    image: 'https://drogariasp.vteximg.com.br/arquivos/ids/487278-1000-1000/711152---Magnesio-Dimalato-500mg-Vitalab-60-Comprimidos-1.jpg?v=637728763746930000',
    category: 'vitaminas',
    brand: 'Unilife',
    inStock: true,
    prescription: false
  },
  {
    id: '56',
    name: 'Zinco Quelato',
    description: 'Suplemento de zinco. Frasco com 60 cápsulas.',
    price: 27.90,
    image: 'https://cdn.vnda.com.br/1920x/fmiligrama/2023/11/30/17_17_56_454_7a0ff4ac8fdb616892aafcbaa81abf4e.jpg?v=1701375476',
    category: 'vitaminas',
    brand: 'Vitafor',
    inStock: true,
    prescription: false
  },
  {
    id: '57',
    name: 'Colágeno Hidrolisado',
    description: 'Suplemento para pele, unhas e cabelos. Pote com 300g.',
    price: 49.90,
    image: 'https://farmaciasnissei.com.br/media/produtos/42069.jpg',
    category: 'vitaminas',
    brand: 'Sanavita',
    inStock: true,
    prescription: false
  },
  {
    id: '58',
    name: 'Biotina 5mg',
    description: 'Suplemento para fortalecimento de cabelos e unhas. Frasco com 60 cápsulas.',
    price: 24.90,
    image: 'https://cdn.awsli.com.br/800x800/1293/1293344/produto/49917198/90ad7e53d4.jpg',
    category: 'vitaminas',
    brand: 'Now Foods',
    inStock: true,
    prescription: false
  },
  {
    id: '59',
    name: 'Ômega 3 1000mg',
    description: 'Suplemento de óleo de peixe. Frasco com 120 cápsulas.',
    price: 44.90,
    image: 'https://sjdigital.vtexassets.com/arquivos/ids/1110854/primia-omega-3-1000mg-60-capsulas-10018958-1.jpg?v=638700303636070000',
    category: 'vitaminas',
    brand: 'Vitafor',
    inStock: true,
    prescription: false
  },
  {
    id: '60',
    name: 'Vitamina B12 1000mcg',
    description: 'Suplemento de vitamina B12. Frasco com 60 comprimidos.',
    price: 28.90,
    image: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/1183384-1000-1000/image-7683962e8f104b76ade558ef312f9bbd.jpg?v=638349548902230000',
    category: 'vitaminas',
    brand: 'Nature\'s Bounty',
    inStock: true,
    prescription: false
  },
  {
    id: '61',
    name: 'Multivitamínico Adulto',
    description: 'Suplemento completo para adultos. Frasco com 60 cápsulas.',
    price: 36.90,
    image: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/1356093-1000-1000/38890---centrum-wyeth-whitehall-30-comprimidos_0005_38890-1.png.png?v=638657237435600000',
    category: 'vitaminas',
    brand: 'Centrum',
    inStock: true,
    prescription: false
  },
  {
    id: '62',
    name: 'Vitamina D3 2000UI',
    description: 'Suplemento de vitamina D3. Frasco com 60 cápsulas.',
    price: 33.90,
    image: 'https://product-data.raiadrogasil.io/images/3835752.webp',
    category: 'vitaminas',
    brand: 'Vitafor',
    inStock: true,
    prescription: false
  },
  {
    id: '63',
    name: 'Vitamina K2',
    description: 'Suplemento para saúde óssea. Frasco com 60 cápsulas.',
    price: 41.90,
    image: 'https://drogariasp.vteximg.com.br/arquivos/ids/1177034-1000-1000/876356---Vitamina-K2-125mcg-Maxinutri-60-Capsulas_0000_Layer-1.png.png?v=638666679296370000',
    category: 'vitaminas',
    brand: 'Unilife',
    inStock: true,
    prescription: false
  },
  {
    id: '64',
    name: 'Coenzima Q10',
    description: 'Suplemento antioxidante. Frasco com 60 cápsulas.',
    price: 59.90,
    image: 'https://drogariasp.vteximg.com.br/arquivos/ids/818860-1000-1000/681407---coenzima-q10-100mg-catarinense-30-capsulas-4.jpg?v=638085688365300000',
    category: 'vitaminas',
    brand: 'Now Foods',
    inStock: true,
    prescription: false
  },
  {
    id: '65',
    name: 'Vitamina A 5000UI',
    description: 'Suplemento de vitamina A. Frasco com 60 cápsulas.',
    price: 22.90,
    image: 'https://images.tcdn.com.br/img/img_prod/1093137/vitamina_a_5_000ui_60_capsulas_101100793_1_0dd9e72aa5584eb5c5d6352a7fc7b90a.png',
    category: 'vitaminas',
    brand: 'Nature\'s Bounty',
    inStock: true,
    prescription: false
  },
  {
    id: '66',
    name: 'Vitamina B6 50mg',
    description: 'Suplemento de vitamina B6. Frasco com 60 cápsulas.',
    price: 19.90,
    image: 'https://images.tcdn.com.br/img/img_prod/1093137/vitamina_piridoxina_b6_50mg_120_capsulas_110201559_1_8f7d8980e17a8926a19a1ce22fb54a32.png',
    category: 'vitaminas',
    brand: 'Unilife',
    inStock: true,
    prescription: false
  },
  {
    id: '67',
    name: 'Vitamina B3 500mg',
    description: 'Suplemento de vitamina B3. Frasco com 60 cápsulas.',
    price: 21.90,
    image: 'https://product-data.raiadrogasil.io/images/4081205.webp',
    category: 'vitaminas',
    brand: 'Now Foods',
    inStock: true,
    prescription: false
  },
  {
    id: '68',
    name: 'Vitamina B5 500mg',
    description: 'Suplemento de vitamina B5. Frasco com 60 cápsulas.',
    price: 23.90,
    image: 'https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F4081207.webp&w=3840&q=40',
    category: 'vitaminas',
    brand: 'Unilife',
    inStock: true,
    prescription: false
  },
  {
    id: '69',
    name: 'Vitamina B2 100mg',
    description: 'Suplemento de vitamina B2. Frasco com 60 cápsulas.',
    price: 20.90,
    image: 'https://product-data.raiadrogasil.io/images/11187506.webp',
    category: 'vitaminas',
    brand: 'Now Foods',
    inStock: true,
    prescription: false
  },
  {
  id: '94',
  name: 'Vitamina D3 5000UI',
  description: 'Suplemento de vitamina D3. Frasco com 60 cápsulas.',
  price: 38.90,
  image: 'https://paguemenos.vtexassets.com/arquivos/ids/265254/Vitamina-D3-5.000UI-30-caps.jpg?v=637255941532070000',
  category: 'vitaminas',
  brand: 'Vitafor',
  inStock: true,
  prescription: false
},
{
  id: '95',
  name: 'Ferro Quelato',
  description: 'Suplemento de ferro para anemia. Frasco com 60 cápsulas.',
  price: 29.90,
  image: 'https://product-data.raiadrogasil.io/images/3511523.webp',
  category: 'vitaminas',
  brand: 'Unilife',
  inStock: true,
  prescription: false
},
{
  id: '96',
  name: 'Vitamina B9 (Ácido Fólico)',
  description: 'Suplemento de ácido fólico. Frasco com 60 comprimidos.',
  price: 18.90,
  image: 'https://images.tcdn.com.br/img/img_prod/741488/vitamina_b9_acido_folico_400mcg_120_capsulas_737_1_097904ec4ae3e096038c5c9bb85d1ca1_20220307153908.jpg',
  category: 'vitaminas',
  brand: 'Nature\'s Bounty',
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
   {
    id: '70',
    name: 'Escova Dental Macia',
    description: 'Escova dental para higiene bucal diária.',
    price: 7.90,
    image: 'https://sjdigital.vtexassets.com/arquivos/ids/928644-800-800?v=638868830064200000&width=800&height=800&aspect=true',
    category: 'higiene',
    brand: 'Colgate',
    inStock: true,
    prescription: false
  },
  {
    id: '71',
    name: 'Fio Dental 50m',
    description: 'Fio dental para limpeza interdental.',
    price: 8.90,
    image: 'https://drogariasp.vteximg.com.br/arquivos/ids/650599-1000-1000/67962---fio-dental-colgate-total-50m.jpg?v=637891043042200000',
    category: 'higiene',
    brand: 'Oral-B',
    inStock: true,
    prescription: false
  },
  {
    id: '72',
    name: 'Enxaguante Bucal',
    description: 'Enxaguante bucal refrescante. Frasco com 500ml.',
    price: 17.90,
    image: 'https://drogal.vtexassets.com/arquivos/ids/241680/122063.jpg?v=638686284916830000',
    category: 'higiene',
    brand: 'Listerine',
    inStock: true,
    prescription: false
  },
  {
    id: '73',
    name: 'Sabonete em Barra',
    description: 'Sabonete hidratante para o corpo. Barra com 90g.',
    price: 3.90,
    image: 'https://drogariasp.vteximg.com.br/arquivos/ids/1174359-1000-1000/41416---sabonete-granado-medicinal-enxofre-90g_0000_0.png.png?v=638659983474700000',
    category: 'higiene',
    brand: 'Dove',
    inStock: true,
    prescription: false
  },
  {
    id: '74',
    name: 'Desodorante Aerosol',
    description: 'Desodorante antitranspirante. Frasco com 150ml.',
    price: 14.90,
    image: 'https://farmaciasdescontao.com.br/BACKOFFICE/Uploads/Produto/Normal/7891150068735.jpg',
    category: 'higiene',
    brand: 'Rexona',
    inStock: true,
    prescription: false
  },
  {
    id: '75',
    name: 'Lenço Umedecido',
    description: 'Lenços umedecidos para higiene. Embalagem com 48 unidades.',
    price: 12.90,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Vpzv9SjiNAS5Ua_dRDJV3LahdHFBRtFtxw&s',
    category: 'higiene',
    brand: 'Johnson\'s',
    inStock: true,
    prescription: false
  },
  {
    id: '76',
    name: 'Cotonete',
    description: 'Hastes flexíveis para higiene. Embalagem com 75 unidades.',
    price: 6.90,
    image: 'https://drogariasp.vteximg.com.br/arquivos/ids/702007-1000-1000/203530---hastes-flexiveis-cotonetes-pote-150-unidades.jpg?v=637934170137630000',
    category: 'higiene',
    brand: 'Cotonete',
    inStock: true,
    prescription: false
  },
  {
    id: '77',
    name: 'Creme Dental Infantil',
    description: 'Creme dental com flúor para crianças. Tubo com 50g.',
    price: 7.90,
    image: 'https://drogal.vtexassets.com/arquivos/ids/246216-800-auto?v=638739804025970000&width=800&height=auto&aspect=true',
    category: 'higiene',
    brand: 'Colgate',
    inStock: true,
    prescription: false
  },
  {
    id: '78',
    name: 'Absorvente Noturno',
    description: 'Absorvente para uso noturno. Embalagem com 8 unidades.',
    price: 9.90,
    image: 'https://drogariasp.vteximg.com.br/arquivos/ids/1205535-1000-1000/704040---absorvente-intimus-dia-e-noite-ultrafino-extra-suave-14-unidades-1.jpg.jpg?v=638778312075170000',
    category: 'higiene',
    brand: 'Always',
    inStock: true,
    prescription: false
  },
  {
    id: '79',
    name: 'Papel Higiênico Folha Dupla',
    description: 'Papel higiênico folha dupla. Pacote com 12 rolos.',
    price: 19.90,
    image: 'https://cdn1.staticpanvel.com.br/produtos/15/95124-15.jpg',
    category: 'higiene',
    brand: 'Neve',
    inStock: true,
    prescription: false
  },
  {
    id: '80',
    name: 'Sabonete Íntimo',
    description: 'Sabonete líquido para higiene íntima. Frasco com 200ml.',
    price: 18.90,
    image: 'https://drogal.vtexassets.com/arquivos/ids/234460/114404.jpg?v=638605332293530000',
    category: 'higiene',
    brand: 'Dermacyd',
    inStock: true,
    prescription: false
  },
  {
    id: '81',
    name: 'Talco Antisséptico',
    description: 'Talco para pés e axilas. Frasco com 100g.',
    price: 11.90,
    image: 'https://d225afdvrjsxie.cloudfront.net/Custom/Content/Products/47/44/47447_talco-antisseptico-granado-fresh-100g_m1_637683591360687706.webp',
    category: 'higiene',
    brand: 'Granado',
    inStock: true,
    prescription: false
  },
  {
    id: '82',
    name: 'Álcool 70% Spray',
    description: 'Álcool em spray para higienização. Frasco com 250ml.',
    price: 13.90,
    image: 'https://sjdigital.vtexassets.com/arquivos/ids/918923/alcool-70-50ml-spray-uniphar-10039040.jpg?v=638586981326230000',
    category: 'higiene',
    brand: 'Asseptgel',
    inStock: true,
    prescription: false
  },
  {
    id: '83',
    name: 'Sabonete Líquido Infantil',
    description: 'Sabonete líquido para bebês. Frasco com 200ml.',
    price: 15.90,
    image: 'https://product-data.raiadrogasil.io/images/3513080.webp',
    category: 'higiene',
    brand: 'Johnson\'s',
    inStock: true,
    prescription: false
  },
  {
    id: '84',
    name: 'Desodorante Creme',
    description: 'Desodorante em creme. Bisnaga com 55g.',
    price: 10.90,
    image: 'https://drogal.vtexassets.com/arquivos/ids/222663/102967.jpg?v=638554128772730000',
    category: 'higiene',
    brand: 'Dove',
    inStock: true,
    prescription: false
  },
  {
    id: '85',
    name: 'Escova de Cabelo',
    description: 'Escova para pentear cabelos.',
    price: 19.90,
    image: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/640559-1000-1000/escova-de-cabelo-marco-boni-raquete--deluxe-marco-boni-Drogaria-Pacheco-647799--2-.jpg?v=637394001562230000',
    category: 'higiene',
    brand: 'Ricca',
    inStock: true,
    prescription: false
  },
  {
    id: '86',
    name: 'Cremes para Assaduras',
    description: 'Creme para prevenção de assaduras. Bisnaga com 45g.',
    price: 14.90,
    image: 'https://dmvfarma.vtexassets.com/arquivos/ids/169312/7702031610823_1.jpg?v=637598048360200000',
    category: 'higiene',
    brand: 'Hipoglós',
    inStock: true,
    prescription: false
  },
  {
    id: '87',
    name: 'Lenço de Papel',
    description: 'Lenço de papel descartável. Caixa com 50 unidades.',
    price: 6.90,
    image: 'https://tfdfn2.vtexassets.com/arquivos/ids/235421-800-800?v=638278156515900000&width=800&height=800&aspect=true',
    category: 'higiene',
    brand: 'Kleenex',
    inStock: true,
    prescription: false
  },
  {
  id: '97',
  name: 'Sabonete Líquido Antibacteriano',
  description: 'Sabonete líquido para higiene das mãos. Frasco com 250ml.',
  price: 13.90,
  image: 'https://drogariasp.vteximg.com.br/arquivos/ids/421256-1000-1000/Sabonete-Liquido-Antibacteriano-Protex-Erva-Doce-400ml-Drogaria-SP-721506-3.jpg?v=637413545669170000',
  category: 'higiene',
  brand: 'Protex',
  inStock: true,
  prescription: false
},
{
  id: '98',
  name: 'Lenço Umedecido Antisséptico',
  description: 'Lenços umedecidos para limpeza das mãos. Embalagem com 40 unidades.',
  price: 15.90,
  image: 'https://product-data.raiadrogasil.io/images/12763227.webp',
  category: 'higiene',
  brand: 'Asseptgel',
  inStock: true,
  prescription: false
},
{
  id: '99',
  name: 'Desodorante Roll-on Sem Perfume',
  description: 'Desodorante antitranspirante sem fragrância. Frasco com 50ml.',
  price: 12.90,
  image: 'https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F12736383.webp&w=3840&q=40',
  category: 'higiene',
  brand: 'Dove',
  inStock: true,
  prescription: false
},
{
  id: '100',
  name: 'Água Oxigenada 10 Volumes',
  description: 'Solução antisséptica para limpeza de ferimentos. Frasco com 100ml.',
  price: 7.50,
  image: 'https://drogariasp.vteximg.com.br/arquivos/ids/571513-1000-1000/656143---agua-oxigenada-10v-ever-care-100ml.jpg?v=638799015253670000',
  category: 'higiene',
  brand: 'Farmax',
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

export const allProducts = products; //[...products, ...generateAdditionalProducts()];