<script setup lang="ts">
import { computed } from "vue";

import { useStore, Mutation } from "../store";

const store = useStore();
const count = computed(() => store.state.count);

const props = defineProps<{
  text: string
}>()

function increment() {
  store.commit(Mutation.INCREMENT, 1);
}
</script>

<template>
  <button
    @click="increment"
  >
    {{props.text}}: {{ count }}
  </button>
</template>