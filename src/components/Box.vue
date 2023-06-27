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
    aria-disabled="true"
    class="text-left block bg-gradient-to-b from-[#8f3ced] to-[#c82881] p-1 border shadow border-gray-700"
  >
    <div class="bg-inherit p-9 h-full">
      <v-icon :name="icon" v-if="icon" scale="2" class="mb-1" />
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-white"
        v-if="header"
      >
        {{ header }}
      </h5>
      <span class="font-normal">
        <slot></slot>
      </span>
    </div>
  </a>
</template>

<style scoped></style>
