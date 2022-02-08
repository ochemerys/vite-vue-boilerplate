<script setup lang="ts">
import { computed } from "vue";
import { useHead } from "@vueuse/head";
import { useRoute } from "vue-router";

const route = useRoute();
useHead({
  title: computed(() =>
    route && route.meta && route.meta.title
      ? <string>route.meta.title
      : "Boilerplate"
  ),
});
</script>

<template>
  <div class="flex flex-col items-center mx-4">
    <ul class="flex justify-center mb-4">
      <li class="mr-6">
        <router-link to="/" class="text-blue-600 hover:text-blue-800"
          >Home</router-link
        >
      </li>
      <li class="mr-6">
        <router-link to="/about" class="text-blue-600 hover:text-blue-800"
          >About</router-link
        >
      </li>
      <li class="mr-6">
        <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
      </li>
    </ul>

    <router-view />
  </div>
</template>

<style></style>
