<script setup>
import { ref } from 'vue';

defineProps({
  header: String,
  icon: String,
});

const lorem = ref(
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, doloribus? Quae magnam vel libero veritatis enim quod. Similique aliquid doloribus deserunt laborum, dolor, qui iste asperiores quis suscipit accusamus consequatur.'
);

const count = ref(0);
</script>

<template>
  <a
    href="#"
    class="block max-w-sm bg-gradient-to-b from-[#8f3ced] to-[#c82881] p-1 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#21272a] dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <div class="text-left bg-[#121619] p-9 h-full">
      <v-icon :name="icon || 'oi-accessibility'" scale="2" class="mb-1" />
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ header || 'Header' }}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {{ msg || lorem }}
      </p>
    </div>
  </a>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
