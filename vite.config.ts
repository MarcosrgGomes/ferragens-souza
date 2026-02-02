import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // O Vite já carrega variáveis .env que começam com VITE_ automaticamente para import.meta.env
});