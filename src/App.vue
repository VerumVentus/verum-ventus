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
</script>
