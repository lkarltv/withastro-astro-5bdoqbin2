// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 1. ADD THIS LINE HERE:
  site: 'https://drlomp.ee',

  // 2. KEEP YOUR EXISTING CONFIGURATION BELOW:
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});