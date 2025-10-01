import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base conditionally: use '/CalcuLite/' for production (GitHub Pages), '/' for development
  base: process.env.NODE_ENV === 'production' ? '/CalcuLite/' : '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
