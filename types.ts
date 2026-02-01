export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
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
  image?: string; // Added for visual category grid
}

export enum CheckoutMethod {
  PICKUP = 'PICKUP',
  DELIVERY = 'DELIVERY' // Not implemented in MVP but good for type safety
}

export interface UserDetails {
  name: string;
  phone: string;
  notes?: string;
}