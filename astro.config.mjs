import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://kaleidoscopic-seahorse-4be2c5.netlify.app",
  integrations: [preact()]
});