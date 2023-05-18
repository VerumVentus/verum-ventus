<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
  header: String,
  icon: String,
});

const lorem = ref(
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, doloribus? Quae magnam vel libero veritatis enim quod. Similique aliquid doloribus deserunt laborum, dolor, qui iste asperiores quis suscipit accusamus consequatur.'
);
</script>

<template>
  <a
    class="text-left block bg-gradient-to-r from-[#202629] via-[#202629] p-1 shadow hover:bg-[#202629] ease-in-out duration-500"
  >
    <div class="p-8 h-full">
      <v-icon :name="icon || 'oi-accessibility'" scale="2" class="mb-1" />
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
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
