import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'never',
    assets: '_astro',
  },
  trailingSlash: 'ignore',
  output: 'static',
  base: '/prueba/',
});
