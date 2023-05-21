<template>
  <main class="min-h-screen min-w-screen flex flex-col justify-between">
    <navbar class="absolute" />
    <router-view />
    <Footer />
  </main>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute();

onMounted(() => {
  if (route.hash) {
    const id = route.hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
</script>
