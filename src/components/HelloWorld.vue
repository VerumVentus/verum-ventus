<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <p class="text-2xl">Hello, we are</p>
  <p class="text-4xl font-bold">Verum Ventus</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
