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
  <h1>Home</h1>
  <button
    @click="increment"
  >
    count is: {{ count }}
  </button>
</template>
