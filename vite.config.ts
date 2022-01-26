import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import pkg from './package.json'
process.env.VITE_APP_VERSION = pkg.version
if (process.env.NODE_ENV === 'production') {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString()
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});
