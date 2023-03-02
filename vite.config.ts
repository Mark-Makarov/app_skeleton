import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  resolve: {
    alias: {
      api: '/src/api',
      assets: '/src/assets',
      components: '/scr/components',
      hooks: '/src/hooks',
      models: '/src/models',
      pages: '/src/pages',
      store: '/src/store',
      styles: '/src/styles',
      types: '/src/types',
      utils: '/src/utils',
    },
  },
  build: {
    sourcemap: false,
    commonjsOptions: {
      esmExternals: true,
    },
  },
  plugins: [
    {
      ...eslintPlugin({
        include: './src/**/*.(js|jsx|ts|tsx)',
      }),
      enforce: 'pre',
    },
    react(),
  ],
  server: {
    open: true,
    host: true,
    port: 5000,
  },
  preview: {
    open: false,
    port: 5050,
  },
});
