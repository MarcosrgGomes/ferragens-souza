import { Product, Category } from '../types';

export const CATEGORIES: Category[] = [
  { 
    id: 'eletrica', 
    name: 'Elétrica', 
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'iluminacao', 
    name: 'Iluminação', 
    icon: 'Lightbulb',
    image: 'https://images.unsplash.com/photo-1513506003013-d8cdd3c9a469?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'ferramentas', 
    name: 'Ferramentas', 
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'hidraulica', 
    name: 'Hidráulica', 
    icon: 'Droplets',
    image: 'https://images.unsplash.com/photo-1606168096263-cf9d9c223a27?q=80&w=400&auto=format&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1518709779341-56cf4535e94b?q=80&w=400&auto=format&fit=crop'
  },
  { 
    id: 'jardinagem', 
    name: 'Jardinagem', 
    icon: 'Sprout',
    image: 'https://images.unsplash.com/photo-1599687267812-35905d212787?q=80&w=400&auto=format&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=400&auto=format&fit=crop'
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
    name: 'Fio Flexível 2.5mm Rolo 100m Sil',
    price: 189.90,
    category: 'eletrica',
    description: 'Fio de cobre flexível antichama, ideal para tomadas residenciais. Certificado Inmetro.',
    image: 'https://images.unsplash.com/photo-1558317374-a354d5f6d4da?q=80&w=400&auto=format&fit=crop',
    available: true,
    featured: true
  },
  {
    id: 2,
    name: 'Disjuntor Unipolar 20A DIN Siemens',
    price: 18.50,
    category: 'eletrica',
    description: 'Proteção essencial para seu circuito elétrico. Padrão DIN de alta qualidade.',
    image: 'https://images.unsplash.com/photo-1574686470003-88746dc4943b?q=80&w=400&auto=format&fit=crop',
    available: true
  },
  {
    id: 3,
    name: 'Fita Isolante 20m 3M Imperial',
    price: 9.90,
    category: 'eletrica',
    description: 'Alta aderência e flexibilidade. Uso geral e profissional.',
    image: 'https://images.unsplash.com/photo-1616423661583-0498b965f80b?q=80&w=400&auto=format&fit=crop',
    available: true
  },

  // --- Iluminação (NOVA) ---
  {
    id: 101,
    name: 'Lâmpada LED 9W Branca Fria Kit 5un',
    price: 49.90,
    category: 'iluminacao',
    description: 'Economize energia com alta luminosidade. Bivolt.',
    image: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?q=80&w=400&auto=format&fit=crop',
    available: true,
    featured: true
  },
  {
    id: 102,
    name: 'Refletor LED 50W Prova D\'água',
    price: 75.00,
    category: 'iluminacao',
    description: 'Ideal para jardins e fachadas. Proteção IP66.',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=400&auto=format&fit=crop',
    available: true
  },

  // --- Hidráulica ---
  {
    id: 4,
    name: 'Torneira Jardim Metal 1/2" Esfera',
    price: 35.00,
    category: 'hidraulica',
    description: 'Torneira resistente para áreas externas e tanque. Acabamento cromado.',
    image: 'https://images.unsplash.com/photo-1585909696092-c07a09d6f657?q=80&w=400&auto=format&fit=crop',
    available: true
  },
  {
    id: 5,
    name: 'Cano PVC 25mm Soldável Barra 3m',
    price: 22.00,
    category: 'hidraulica',
    description: 'Tubo para água fria soldável. Tigre ou Amanco (conforme estoque).',
    image: 'https://images.unsplash.com/photo-1606168096263-cf9d9c223a27?q=80&w=400&auto=format&fit=crop',
    available: true,
    featured: true
  },

  // --- Ferramentas ---
  {
    id: 7,
    name: 'Martelo Unha Cabo Madeira 27mm',
    price: 45.00,
    category: 'ferramentas',
    description: 'Cabeça em aço forjado, cabo em madeira envernizada de alta resistência.',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=400&auto=format&fit=crop',
    available: true
  },
  {
    id: 8,
    name: 'Jogo Chave de Fenda e Philips 6 Peças',
    price: 59.90,
    category: 'ferramentas',
    description: 'Haste em aço cromo vanádio, ponta imantada e cabo ergonômico.',
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=400&auto=format&fit=crop',
    available: true,
    featured: true
  },
  {
    id: 9,
    name: 'Alicate Universal 8" Isolado',
    price: 38.90,
    category: 'ferramentas',
    description: 'Cabo isolado 1000V, ideal para eletricistas e uso geral.',
    image: 'https://images.unsplash.com/photo-1586864387789-628af9de8730?q=80&w=400&auto=format&fit=crop',
    available: true
  },

  // --- Jardinagem (NOVA) ---
  {
    id: 201,
    name: 'Mangueira Flexível 20m com Esguicho',
    price: 89.90,
    category: 'jardinagem',
    description: 'Mangueira trançada siliconada, não dobra fácil. Acompanha bico e engate.',
    image: 'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?q=80&w=400&auto=format&fit=crop',
    available: true,
    featured: true
  },
  {
    id: 202,
    name: 'Pá de Jardim Pequena Metálica',
    price: 15.90,
    category: 'jardinagem',
    description: 'Ferramenta essencial para plantio e transplante em vasos.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=400&auto=format&fit=crop',
    available: true
  },

  // --- Segurança (NOVA) ---
  {
    id: 301,
    name: 'Cadeado 35mm Latão Maciço',
    price: 32.00,
    category: 'seguranca',
    description: 'Segurança reforçada para portões e correntes. Acompanha 2 chaves.',
    image: 'https://images.unsplash.com/photo-1598822927289-54ebeb112e4f?q=80&w=400&auto=format&fit=crop',
    available: true
  },

  // --- Fixação (NOVA) ---
  {
    id: 401,
    name: 'Kit Parafusos e Buchas (200un)',
    price: 42.50,
    category: 'fixacao',
    description: 'Maleta organizadora com buchas 6, 8 e 10mm e parafusos compatíveis.',
    image: 'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?q=80&w=400&auto=format&fit=crop',
    available: true
  },

  // --- Pintura ---
  {
    id: 10,
    name: 'Tinta Látex Branca 18L Suvinil',
    price: 329.00,
    category: 'pintura',
    description: 'Tinta fosca standard para interiores. Alto rendimento e cobertura.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=400&auto=format&fit=crop',
    available: true,
    featured: true
  },
  {
    id: 11,
    name: 'Kit Pintura Rolo + Bandeja + Pincel',
    price: 45.00,
    category: 'pintura',
    description: 'Tudo o que você precisa para começar a pintar sua parede.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400&auto=format&fit=crop',
    available: true
  },

  // --- Construção ---
  {
    id: 13,
    name: 'Cimento CP II 50kg Votoran',
    price: 36.00,
    category: 'construcao',
    description: 'Cimento para uso geral, reboco, contrapiso e lajes. Retirada somente na loja.',
    image: 'https://images.unsplash.com/photo-1518709779341-56cf4535e94b?q=80&w=400&auto=format&fit=crop',
    available: true
  }
];