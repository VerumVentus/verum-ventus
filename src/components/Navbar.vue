<template>
  <div
    class="min-w-full z-50"
    @wheel.prevent
    @touchmove.prevent
    @scroll.prevent
  >
    <Transition name="fade">
      <div
        v-if="scrolled"
        class="h-[150%] w-full absolute -z-[1] top-0 bg-gradient-to-b from-[#101213]"
      />
    </Transition>
    <nav class="z-50 flex justify-between items-center py-8 wrapper">
      <router-link to="/">
        <img src="/logo.svg" class="h-16 w-16 invert" alt="Vite logo" />
      </router-link>
      <div class="flex gap-8 uppercase">
        <router-link to="/"> Overview </router-link>
        <router-link to="/collection"> Collection </router-link>
        <router-link to="/exploration"> Exploration </router-link>
        <router-link to="/methods"> Methods </router-link>
        <router-link to="/results"> Results </router-link>
        <router-link to="/team"> Team </router-link>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const scrolled = ref(false);

onMounted(() => {
  const nav = document.querySelector('nav');
  const navHeight = nav.offsetHeight;
  const navOffset = nav.offsetTop;

  const app = document.querySelector('#app');

  app.addEventListener('scroll', () => {
    if (app.scrollTop > navHeight) {
      scrolled.value = true;
    } else {
      scrolled.value = false;
    }
  });
});
</script>
