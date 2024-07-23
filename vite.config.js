import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: '/softswiss_test_assignment',
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets'),
    },
  },
});
