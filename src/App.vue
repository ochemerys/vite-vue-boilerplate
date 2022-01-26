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
  <ul class="flex">
    <li class="mr-6">
      <router-link to="/" class="text-blue-600 hover:text-blue-800">Home</router-link>
    </li>
    <li class="mr-6">
      <router-link to="/about" class="text-blue-600 hover:text-blue-800">About</router-link>
    </li>
    <li class="mr-6">
      <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
    </li>
  </ul>

  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex {
  display: flex;
  list-style-type: none;
  justify-content: center;
}
.mr-6 {
  margin-left: 12px;
  text-decoration: none;
}
.text-blue-600 {
  text-decoration: none;
  color: darkblue;
} 

.text-gray-400 {
  text-decoration: none;
  color: darkgray
}
</style>
