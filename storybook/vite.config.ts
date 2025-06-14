import { defineConfig } from "vite";
// import { fileURLToPath, URL } from 'node:url'
import vue from "@vitejs/plugin-vue";
// import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
