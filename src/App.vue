<template>
  <main class="min-h-screen min-w-screen">
    <navbar class="absolute" />
    <div>
      <router-view />
    </div>
  </main>
</template>
<script setup>
import Navbar from './components/Navbar.vue';
</script>
