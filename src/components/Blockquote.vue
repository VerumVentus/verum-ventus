<script setup>
import { ref } from 'vue';

defineProps({
  header: String,
  msg: String,
  icon: String,
});

const lorem = ref(
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, doloribus? Quae magnam vel libero veritatis enim quod. Similique aliquid doloribus deserunt laborum, dolor, qui iste asperiores quis suscipit accusamus consequatur.'
);
</script>

<template>
  <a
    href="#"
    aria-disabled="true"
    class="flex max-w-xl shadow hover:bg-[#121619]"
  >
    <div class="h-full w-4 bg-gradient-to-b from-[#8f3ced] to-[#c82881]" />
    <div class="text-left bg-transparent px-4 py-2 h-full">
      <p class="font-normal dark:text-gray-400">
        {{ msg || lorem }}
      </p>
    </div>
  </a>
</template>

<style scoped></style>
