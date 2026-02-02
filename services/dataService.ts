import { supabase, isSupabaseConfigured } from './supabaseClient';
import { PRODUCTS as MOCK_PRODUCTS, CATEGORIES as MOCK_CATEGORIES } from './mockData';
import { Product, Category } from '../types';

// Serviço "Híbrido" - Funciona com ou sem Backend configurado

export const dataService = {
  
  async getCategories(): Promise<Category[]> {
    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error } = await supabase
          .from('categories')
          .select('*')
          .order('name');
        
        if (!error && data && data.length > 0) return data;
      } catch (e) {
        console.warn('Erro ao buscar categorias do Supabase, usando Mock:', e);
      }
    }
    // Fallback
    return new Promise(resolve => setTimeout(() => resolve(MOCK_CATEGORIES), 300));
  },

  async getProducts(): Promise<Product[]> {
    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*');
        
        if (!error && data && data.length > 0) return data;
      } catch (e) {
        console.warn('Erro ao buscar produtos do Supabase, usando Mock:', e);
      }
    }
    // Fallback
    return new Promise(resolve => setTimeout(() => resolve(MOCK_PRODUCTS), 500));
  },

  async getProductById(id: number): Promise<Product | undefined> {
    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', id)
          .single();
        
        if (!error && data) return data;
      } catch (e) {
        console.warn('Erro ao buscar produto específico, usando Mock:', e);
      }
    }
    // Fallback
    return new Promise(resolve => 
      setTimeout(() => resolve(MOCK_PRODUCTS.find(p => p.id === id)), 300)
    );
  }
};