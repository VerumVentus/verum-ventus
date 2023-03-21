<script setup>
import { ref } from 'vue';
import Tweet from './Tweet.vue';

const active = ref(0);
</script>

<template>
  <div class="flex gap-4">
    <Tweet
      :key="index"
      :index="index"
      v-for="index in 5"
      :isActive="index == 1"
    />
  </div>
</template>
