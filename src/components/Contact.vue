<script setup>
import { ref } from 'vue';

defineProps({
  email: String,
  name: String,
  src: String,
});

const lorem = ref(
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, doloribus? Quae magnam vel libero veritatis enim quod. Similique aliquid doloribus deserunt laborum, dolor, qui iste asperiores quis suscipit accusamus consequatur.'
);
</script>

<template>
  <a
    class="group block xl:max-w-sm max-w-[16rem] hover:bg-gradient-to-b from-[#8f3ced] to-[#c82881] p-[4px] bg-[#21272a] shadow ease-in-out transition-all duration-500 hover:-translate-y-2"
  >
    <div class="text-left bg-[#121619] h-full overflow-hidden">
      <img
        class="w-full grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transform transition-all duration-500"
        v-lazy="src || 'mutya.webp'"
      />
      <div class="p-8 tracking-tight text-gray-900 dark:text-white">
        <h1 class="text-2xl font-bold my-0">
          {{ name || 'Jane Doe' }}
        </h1>
        <p class="font-normal font-mono text-gray-700 dark:text-gray-400 my-0">
          {{ email || 'jdoe@up.edu.ph' }}
        </p>
        <p class="text-sm"><slot /></p>
      </div>
    </div>
  </a>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
