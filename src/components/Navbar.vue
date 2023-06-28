<template>
  <div class="min-w-full z-50">
    <Transition name="grow">
      <div
        v-if="scrolled"
        class="h-[150%] w-full absolute -z-[1] top-0 bg-gradient-to-b from-[#101213]"
      />
    </Transition>
    <nav class="z-50 w-full flex justify-between items-center py-8 wrapper">
      <router-link to="/">
        <Logo />
      </router-link>
      <div class="lg:flex hidden gap-8 uppercase">
        <router-link to="/" :class="currentRoute === '/' ? 'active-route' : ''">
          Overview
        </router-link>
        <router-link
          to="/collection"
          :class="currentRoute === '/collection' ? 'active-route' : ''"
        >
          Collection
        </router-link>
        <router-link
          to="/exploration"
          :class="currentRoute === '/exploration' ? 'active-route' : ''"
        >
          Exploration
        </router-link>
        <router-link
          to="/results"
          :class="currentRoute === '/results' ? 'active-route' : ''"
        >
          Results
        </router-link>
        <router-link
          to="/summary"
          :class="currentRoute === '/summary' ? 'active-route' : ''"
        >
          Summary
        </router-link>
        <router-link
          to="/team"
          :class="currentRoute === '/team' ? 'active-route' : ''"
        >
          Team
        </router-link>
      </div>
      <div class="lg:hidden">
        <v-icon name="hi-view-grid" />
      </div>
    </nav>
  </div>
</template>

<style>
.active-route {
  @apply relative font-bold;
}

.active-route::after {
  @apply content-[''] w-4/5 h-1 rounded-full absolute bg-primary left-0 right-0 mx-auto -bottom-1;
}
</style>

<script setup>
import { computed } from 'vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Logo from './Logo.vue';
const route = useRoute();

const currentRoute = computed(() => route.path);

const scrolled = ref(false);

onMounted(() => {
  const nav = document.querySelector('nav');
  const navHeight = nav.offsetHeight;

  const app = document.querySelector('html');

  window.addEventListener('scroll', () => {
    if (app.scrollTop > navHeight) {
      scrolled.value = true;
    } else {
      scrolled.value = false;
    }
  });
});
</script>
