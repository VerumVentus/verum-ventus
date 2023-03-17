<script setup>
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
      <p class="text-2xl">Hello, we are</p>
      <p class="text-4xl font-bold">Verum Ventus</p>
    </div>
    <div class="section">Second section</div>
  </full-page>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
