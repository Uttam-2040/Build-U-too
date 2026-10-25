import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures assets load correctly on GitHub Pages, Vercel, or any subpath
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
