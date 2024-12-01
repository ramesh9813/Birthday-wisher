import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
  base:'/Birthday-wisher',
  server: {
    host: '0.0.0.0',
  }
})
