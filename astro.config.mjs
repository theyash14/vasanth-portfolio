// @ts-check

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.example.com',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
  integrations: [icon()],
});
