import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: false
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'zustand', 'clsx', 'tailwind-merge'],
          charts: ['recharts'],
          subject01: ['./src/data/questions/subject-01.js'],
          subject02: ['./src/data/questions/subject-02.js']
        }
      }
    }
  }
});
