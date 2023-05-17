<template>
  <div class="min-w-full z-50 flex justify-between items-center px-2 py-8">
    <a href="#page1" target="_blank">
      <img src="/logo.svg" class="logo" alt="Vite logo" />
    </a>
    <div class="flex gap-8 pr-8 uppercase">
      <router-link to="/"> Overview </router-link>
      <router-link to="/data"> Data </router-link>
      <router-link to="/methods"> Methods </router-link>
      <router-link to="/results"> Results </router-link>
      <router-link to="/team"> Team </router-link>
    </div>
  </div>
</template>
