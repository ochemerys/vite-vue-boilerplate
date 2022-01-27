<script setup lang="ts">
import { computed } from "vue";

import { useStore, Mutation } from "../store";

const store = useStore();
const count = computed(() => store.state.count);

function increment() {
  store.commit(Mutation.INCREMENT, 1);
}
</script>

<template>
  <h1 class="text-blue-800 text-xl font-medium mb-8">Home</h1>
  <button 
    class="bg-blue-600 m-4 px-3 py-3 text-blue-200 rounded-md hover:bg-blue-800"
    @click="increment"
  >
    count is: {{ count }}
  </button>
</template>
