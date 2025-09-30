import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to your GitHub repo name for GitHub Pages
  base: '/CalcuLite/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
