<script setup lang="ts">
const VERSION = import.meta.env.VITE_APP_VERSION;
const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
  ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
  : undefined;
const thisYear = new Date().getFullYear();
</script>

<template>
  <h1 class="text-blue-800 text-xl font-medium mb-8">About</h1>
  <p class="text-slate-600">Version: {{ VERSION }}</p>
  <p class="text-slate-500">
    Project Name by
    <a class="hover:text-slate-900" href="#">Company Name</a> &copy; 2020-{{
      thisYear
    }}.
    <template v-if="BUILD_DATE">
      Site built {{ BUILD_DATE.toLocaleDateString() }}.
    </template>
    <template v-else> Development mode. </template>
  </p>
</template>
