import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eng.tech-new.ru',
  integrations: [react(), sitemap()],
  devToolbar: {
    enabled: false,
  }
});