export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  brand?: string; // Tornando opcional para segurança
  description: string;
  specs?: Record<string, string>;
  image: string;
  available: boolean;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  image?: string;
}

export enum CheckoutMethod {
  PICKUP = 'PICKUP',
  DELIVERY = 'DELIVERY'
}

export interface UserDetails {
  name: string;
  phone: string;
  notes?: string;
}