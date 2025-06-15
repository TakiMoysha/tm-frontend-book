import { createApp } from "vue";

import PrimeVue from "primevue/config";

import App from "@/App.vue";
import { definePreset } from "@primeuix/themes";
import Nora from "@primeuix/themes/nora";

const PrimeNoraPreset = definePreset(Nora, {});

import "@/styles";

createApp(App)
  .use(PrimeVue, {
    theme: { preset: PrimeNoraPreset },
    ripple: true,
  })
  .mount("#app");
