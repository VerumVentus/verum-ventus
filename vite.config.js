import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      onRoutesGenerated(routes) {
        const transformRoute = (route) => ({
          ...route,
          path: route.path.replace('/:@', '/@:'),
          children: route.children?.map(transformRoute) ?? [],
        });

        return routes.map(transformRoute);
      },
    }),
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // map '@' to './src'
    },
  },
});
