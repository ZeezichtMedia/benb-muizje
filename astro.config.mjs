// @ts-check
// Configuration update to ensure React integration is loaded
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en', 'de'],
    routing: {
      prefixDefaultLocale: true
    }
  },

  integrations: [react()]
});