export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  runtimeConfig: {
    public: {
      APP_WRITE_PROJECT_ID: process.env.APP_WRITE_PROJECT_ID,
    }

  },
  experimental: {
    renderJsonPayloads: false,
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: [400, 500, 600, 700],
          Roboto: [400, 500, 700],
        },
      },
    ],
    "@nuxt/icon",
  ],
  colorMode: {
    preference: "dark",
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  shadcn: {
    prefix: "Ui",
    componentDir: "./components/ui/",
  },
});
