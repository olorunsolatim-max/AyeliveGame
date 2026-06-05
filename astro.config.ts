import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://ayelive-game.vercel.app/",
  integrations: [
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  vite: {
    resolve: {
      alias: {
        '@config': '/src/config.ts'
      }
    }
  }
});
