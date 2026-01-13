import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''), // Usuwa '/api' z path, jeśli backend nie ma prefiksu
      },
    },
  },
  base: '/gcg-report-viewer', // Twój bazowy URL
});
