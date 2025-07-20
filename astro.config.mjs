// astro.config.mjs
import { defineConfig } from 'astro/config';
import remark from '@astrojs/markdown-remark';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    remark(),          // for rendering markdown
    tailwind()         // official Tailwind plugin for Astro
  ]
});

