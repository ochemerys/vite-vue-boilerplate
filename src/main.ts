import { createApp } from "vue";
import { createHead } from "@vueuse/head";

import "./assets/index.css";

import App from "./App.vue";
import router from "./router";
import { store } from "./store";

import { registerSW } from 'virtual:pwa-register'

registerSW({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onNeedRefresh() {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onOfflineReady() {},
  })

const head = createHead();

createApp(App).use(router).use(store).use(head).mount("#app");
