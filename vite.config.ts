import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // O terceiro argumento '' permite carregar todas as variáveis de ambiente (incluindo API_KEY do sistema/Vercel)
  // Fix: Cast process to any to avoid TypeScript error "Property 'cwd' does not exist on type 'Process'"
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // Substitui 'process.env.API_KEY' no código pelo valor real da chave durante o build
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});