import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import svgLoader from "vite-svg-loader";

// https://astro.build/config
export default defineConfig({
  site: 'https://feature-tour.netlify.app',
  integrations: [sitemap({
    canonicalURL: 'https://feature-tour.netlify.app'
  }), vue(), tailwind()],
  vite: {
    plugins: [svgLoader()]
  }
});