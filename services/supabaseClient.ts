import { createClient } from '@supabase/supabase-js';

// Usando import.meta.env (Padrão Vite). Type cast para any para evitar erro de tipo se vite/client não estiver configurado.
const SUPABASE_URL = (import.meta as any).env.VITE_SUPABASE_URL || '';
const SUPABASE_KEY = (import.meta as any).env.VITE_SUPABASE_KEY || '';

// Criamos o cliente apenas se as chaves existirem e forem válidas
export const supabase = (SUPABASE_URL && SUPABASE_KEY) 
  ? createClient(SUPABASE_URL, SUPABASE_KEY) 
  : null;

export const isSupabaseConfigured = () => !!supabase;