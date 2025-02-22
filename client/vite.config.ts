import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Zachowaj port 3000, jeśli chcesz
    proxy: {
      '/process': {
        target: 'https://scrabblecam.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/process/, '/process'), // Zachowuje ścieżkę
      },
    },
  },
  base: '/gcg-report-viewer', // Twój bazowy URL
});
