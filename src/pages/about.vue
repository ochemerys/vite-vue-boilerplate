<script setup lang="ts">
const VERSION = import.meta.env.VITE_APP_VERSION
const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
  ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
  : undefined
const thisYear = new Date().getFullYear()
</script>

<template>
  <h1>About</h1>
  <p>Version: {{ VERSION }}</p>
  <p>
    Project Name by
    <a class="" href="#">Company Name</a> &copy; 2020-{{ thisYear }}.
    <template v-if="BUILD_DATE"> Site built {{ BUILD_DATE.toLocaleDateString() }}. </template>
    <template v-else> Development mode. </template>
  </p>  
</template>
