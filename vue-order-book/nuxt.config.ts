export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  runtimeConfig: {
    public: {
      APP_WRITE_PROJECT_ID: process.env.APP_WRITE_PROJECT_ID,
      APP_WRITE_DOMAIN: process.env.APP_WRITE_DOMAIN,
      APP_WRITE_API_KEY: process.env.APP_WRITE_API_KEY,
    },
  },
  experimental: {
    renderJsonPayloads: false,
  },
  devtools: { enabled: true },
  modules: [
    "shadcn-nuxt",
    "@pinia/nuxt",
    "@vee-validate/nuxt",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/test-utils/module",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
  ],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  shadcn: {
    prefix: "Ui",
    componentDir: "./components/ui/",
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      Roboto: [400, 500, 700],
    },
  },
});
