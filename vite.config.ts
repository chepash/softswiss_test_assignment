import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: '/softswiss_test_assignment',
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets'),
    },
  },
});
