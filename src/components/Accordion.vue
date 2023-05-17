<script setup>
import Tweet from './Tweet.vue';
</script>

<template>
  <div class="relative gap-1 self-baseline">
    <Tweet
      :key="index"
      :index="index"
      v-for="index in 5"
      :isActive="index == 1"
    />
  </div>
</template>
