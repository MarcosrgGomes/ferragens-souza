import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // O terceiro argumento '' permite carregar todas as variáveis de ambiente (incluindo API_KEY do sistema/Vercel)
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // Substitui 'process.env.API_KEY' no código pelo valor real da chave durante o build
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});