import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/traduzir': {
        target: 'https://libretranslate.de',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/traduzir/, '')
      }
    }
  }
});
