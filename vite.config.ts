import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to your GitHub repo name for GitHub Pages
  base: '/Smart-Calories-Calculator/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
