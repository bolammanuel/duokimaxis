import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  server: { port: 3000, open: false },
  preview: { port: 4173, open: false },
  ssr: { noExternal: ['react-router-dom', 'react-router'] },
});
