import { Product, Category } from '../types';

export const CATEGORIES: Category[] = [
  { 
    id: 'eletrica', 
    name: 'Elétrica', 
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'iluminacao', 
    name: 'Iluminação', 
    icon: 'Lightbulb',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'ferramentas', 
    name: 'Ferramentas', 
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'hidraulica', 
    name: 'Hidráulica', 
    icon: 'Droplets',
    image: 'https://images.unsplash.com/photo-1585909696092-c07a09d6f657?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'pintura', 
    name: 'Pintura', 
    icon: 'PaintRoller',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'construcao', 
    name: 'Construção', 
    icon: 'BrickWall',
    image: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'jardinagem', 
    name: 'Jardinagem', 
    icon: 'Sprout',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'seguranca', 
    name: 'Segurança', 
    icon: 'Shield',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'fixacao', 
    name: 'Fixação', 
    icon: 'Wrench',
    image: 'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'utilidades', 
    name: 'Utilidades', 
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=400&auto=format&fit=crop'
  },
];

export const PRODUCTS: Product[] = [
  // --- Elétrica ---
  {
    id: 1,
    name: 'Cabo Flexível 2.5mm 750V Rolo 100m',
    price: 229.90, 
    category: 'eletrica',
    brand: 'Sil',
    description: 'Fio de cobre flexível antichama, ideal para tomadas residenciais (10A/20A). Produto certificado pelo Inmetro. Flexibilidade classe 5.',
    specs: {
      'Bitola': '2.5mm',
      'Comprimento': '100 metros',
      'Material': 'Cobre',
      'Voltagem Máx': '750V',
      'Isolação': 'PVC Antichama BWF'
    },
    // Rolos de fios coloridos (amarelo, verde, vermelho)
    image: 'https://images.unsplash.com/photo-1549925245-c63d59666014?q=80&w=800&auto=format&fit=crop',
    available: true,
    featured: true
  },
  {
    id: 2,
    name: 'Disjuntor Unipolar DIN 20A Curva C',
    price: 22.50, 
    category: 'eletrica',
    brand: 'Siemens',
    description: 'Disjuntor termomagnético para proteção de circuitos. Modelo DIN (branco), fácil encaixe em trilhos.',
    specs: {
      'Amperagem': '20A',
      'Pólos': '1 (Unipolar)',
      'Curva': 'C (Cargas gerais)',
      'Capacidade': '3kA'
    },
    // Quadro de força com disjuntores
    image: 'https://images.unsplash.com/photo-1563805909946-4e59670f443b?q=80&w=800&auto=format&fit=crop', 
    available: true
  },
  {
    id: 3,
    name: 'Fita Isolante 33+ Profissional 20m',
    price: 24.90, 
    category: 'eletrica',
    brand: '3M',
    description: 'A melhor fita do mercado. Alta aderência, flexibilidade e memória elástica. Suporta até 90°C.',
    specs: {
      'Comprimento': '20m',
      'Largura': '19mm',
      'Espessura': '0.19mm',
      'Uso': 'Profissional'
    },
    // Ferramentas de eletricista com fita em destaque
    image: 'https://images.unsplash.com/photo-1616423668832-628d052608c0?q=80&w=800&auto=format&fit=crop',
    available: true
  },

  // --- Iluminação ---
  {
    id: 101,
    name: 'Kit 5 Lâmpadas LED Bulbo 9W Bivolt',
    price: 39.90, 
    category: 'iluminacao',
    brand: 'Avant',
    description: 'Kit econômico. Luz branca fria (6500K), ideal para cozinhas, escritórios e banheiros. Bivolt automático.',
    specs: {
      'Potência': '9W (Substitui 60W)',
      'Fluxo Luminoso': '810lm',
      'Soquete': 'E27 (Padrão)',
      'Vida Útil': '25.000h'
    },
    // Lâmpada estilo Edison ou moderna acesa (fundo escuro)
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop',
    available: true,
    featured: true
  },
  {
    id: 102,
    name: 'Refletor LED 50W Holofote IP66',
    price: 49.90,
    category: 'iluminacao',
    brand: 'Ourolux',
    description: 'Iluminação potente para áreas externas, jardins e fachadas. Resistente à chuva e poeira (IP66).',
    specs: {
      'Potência': '50W',
      'Proteção': 'IP66',
      'Cor Luz': 'Branco Frio',
      'Carcaça': 'Alumínio Preto'
    },
    // Refletor iluminando parede externa
    image: 'https://images.unsplash.com/photo-1557063673-0493e5bd3419?q=80&w=800&auto=format&fit=crop',
    available: true
  },

  // --- Hidráulica ---
  {
    id: 4,
    name: 'Torneira Jardim Esfera Metal 1/2"',
    price: 35.90, 
    category: 'hidraulica',
    brand: 'Deca',
    description: 'Alta durabilidade e resistência. Acabamento cromado, sistema de abertura rápida por esfera. Inclui bico.',
    specs: {
      'Material': 'Metal',
      'Rosca': '1/2" (com adaptador 3/4")',
      'Uso': 'Área Externa/Tanque',
      'Garantia': '10 anos'
    },
    // Torneira de metal com água correndo
    image: 'https://images.unsplash.com/photo-1585909696092-c07a09d6f657?q=80&w=800&auto=format&fit=crop',
    available: true
  },
  {
    id: 5,
    name: 'Tubo Soldável PVC 25mm Barra 3m',
    price: 18.50, 
    category: 'hidraulica',
    brand: 'Tigre',
    description: 'Tubo marrom clássico para água fria. O melhor PVC do mercado, não resseca e solda fácil.',
    specs: {
      'Diâmetro': '25mm (3/4")',
      'Comprimento': '3 metros',
      'Pressão': '7,5 kgf/cm²',
      'Norma': 'NBR 5648'
    },
    // Tubos de PVC empilhados (laranja/marrom)
    image: 'https://images.unsplash.com/photo-1580910051051-60a953861869?q=80&w=800&auto=format&fit=crop', 
    available: true,
    featured: true
  },
  {
    id: 6,
    name: 'Caixa D\'Água Polietileno 1.000L',
    price: 369.90, 
    category: 'hidraulica',
    brand: 'Fortlev',
    description: 'Tampa com travamento de 1/4 de volta, vedação total contra insetos. Interior liso para facilitar limpeza.',
    specs: {
      'Capacidade': '1000 Litros',
      'Material': 'Polietileno',
      'Camadas': '3',
      'Altura': '0,96m'
    },
    // Textura azul forte (remetendo ao plástico da caixa)
    image: 'https://images.unsplash.com/photo-1558507206-8d5930113c59?q=80&w=800&auto=format&fit=crop',
    available: false 
  },

  // --- Ferramentas ---
  {
    id: 7,
    name: 'Martelo Unha 27mm Cabo Madeira',
    price: 45.90, 
    category: 'ferramentas',
    brand: 'Tramontina',
    description: 'Cabeça forjada e temperada em aço especial. Cabo de madeira envernizada fixado com epóxi.',
    specs: {
      'Tamanho': '27mm',
      'Cabeça': 'Aço Carbono',
      'Cabo': 'Madeira Eucalipto',
      'Peso': '0.65 kg'
    },
    // Martelo em ação ou sobre madeira
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=800&auto=format&fit=crop',
    available: true
  },
  {
    id: 8,
    name: 'Jogo Chaves Fenda/Philips 6 Peças',
    price: 79.90, 
    category: 'ferramentas',
    brand: 'Tramontina',
    description: 'Haste em aço cromo vanádio (muito mais resistente). Pontas imantadas e cabo ergonômico.',
    specs: {
      'Qtd': '6 chaves',
      'Pontas': '3 Fenda, 3 Philips',
      'Material': 'Cromo Vanádio',
      'Cabo': 'Grip Emborrachado'
    },
    // Várias chaves de fenda com cabos coloridos
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=800&auto=format&fit=crop',
    available: true,
    featured: true
  },
  {
    id: 9,
    name: 'Furadeira de Impacto 1/2" 550W GSB',
    price: 329.90, 
    category: 'ferramentas',
    brand: 'Bosch',
    description: 'Potente e robusta. Ideal para perfurações em concreto, madeira e metal. Acompanha chave de mandril.',
    specs: {
      'Potência': '550W',
      'Mandril': '1/2" (13mm)',
      'Rotação': '3.100 min-1',
      'Impacto': 'Sim'
    },
    // Furadeira sendo usada (ação)
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop',
    available: true
  },

  // --- Jardinagem ---
  {
    id: 201,
    name: 'Mangueira Flex 20m com Esguicho',
    price: 69.90,
    category: 'jardinagem',
    brand: 'Tramontina',
    description: 'Mangueira flexível com tripla camada (PVC + Poliéster). Não dobra facilmente. Kit pronto para usar.',
    specs: {
      'Comprimento': '20 metros',
      'Acessórios': 'Esguicho + Adaptador',
      'Pressão': 'Até 10 bar',
      'Cor': 'Verde'
    },
    // Mangueira verde em gramado
    image: 'https://images.unsplash.com/photo-1598166649830-46639d675b47?q=80&w=800&auto=format&fit=crop',
    available: true,
    featured: true
  },

  // --- Segurança ---
  {
    id: 301,
    name: 'Cadeado 35mm Latão Maciço',
    price: 36.90, 
    category: 'seguranca',
    brand: 'Pado',
    description: 'Corpo em latão maciço e haste em aço cementado. Nível de segurança padrão para portões.',
    specs: {
      'Tamanho': '35mm',
      'Material': 'Latão',
      'Chaves': '2 unidades',
      'Haste': 'Média'
    },
    // Cadeado fechando uma corrente ou portão
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    available: true
  },

  // --- Pintura ---
  {
    id: 10,
    name: 'Tinta Acrílica Fosca Standard 18L',
    price: 359.90, 
    category: 'pintura',
    brand: 'Suvinil',
    description: 'Tinta de altíssimo rendimento e cobertura. Acabamento fosco aveludado que disfarça imperfeições.',
    specs: {
      'Volume': '18 Litros',
      'Cor': 'Branco Neve',
      'Uso': 'Interior/Exterior',
      'Rendimento': 'Até 380m² por demão'
    },
    // Rolo de pintura com tinta azul/branca
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
    available: true,
    featured: true
  },
  {
    id: 11,
    name: 'Kit Pintura 3 Peças (Rolo+Bandeja)',
    price: 32.90,
    category: 'pintura',
    brand: 'Atlas',
    description: 'Kit prático com bandeja rígida, suporte e rolo de lã sintética antigota. Ideal para paredes lisas.',
    specs: {
      'Rolo': '23cm',
      'Material': 'Lã Sintética',
      'Indicação': 'Tinta Acrílica/Látex',
      'Peças': '3'
    },
    // Latas de tinta coloridas e pincéis
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop',
    available: true
  },

  // --- Construção ---
  {
    id: 13,
    name: 'Cimento CP II-E-32 50kg',
    price: 34.90, 
    category: 'construcao',
    brand: 'Votoran',
    description: 'Cimento Todas as Obras. Versátil, serve da fundação ao acabamento. Secagem rápida.',
    specs: {
      'Peso': '50kg',
      'Tipo': 'CP II-E-32',
      'Embalagem': 'Saco Papel',
      'Norma': 'NBR 11578'
    },
    // Textura de concreto/cimento aplicado
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop', 
    available: true
  },
  {
    id: 401,
    name: 'Maleta Parafusos e Buchas 200un',
    price: 49.90,
    category: 'fixacao',
    brand: 'Bemfixa',
    description: 'Kit organizador completo. Tenha sempre a bucha certa (6, 8 e 10mm) para pendurar quadros e móveis.',
    specs: {
      'Qtd Total': '200 peças',
      'Medidas': '6mm, 8mm, 10mm',
      'Parafusos': 'Philips Chipboard',
      'Acompanha': 'Maleta Plástica'
    },
    // Parafusos prateados em destaque
    image: 'https://images.unsplash.com/photo-1535352494877-c3359d997230?q=80&w=800&auto=format&fit=crop',
    available: true
  }
];