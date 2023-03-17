<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

const options = ref({
  licenseKey: 'YOUR_KEY_HERE',
  scrollOverflow: true,
  scrollBar: false,
  menu: '#menu',
  navigation: true,
  controlArrows: false,
  navigationPosition: 'left',
  anchors: ['page1', 'page2', 'page3'],
  sectionsColor: [
    '#121619',
    '#121619',
    '#121619',
    '#21272a',
    '#1bcee6',
    '#ee1a59',
    '#2c3e4f',
    '#ba5be9',
    '#b4b8ab',
  ],
});
</script>

<template>
  <a href="#page1" target="_blank">
    <img src="/logo.svg" class="logo" alt="Vite logo" />
  </a>
  <full-page :options="options" id="fullpage" ref="fullpage">
    <div class="section">
      <div id="title"></div>
      <p class="text-9xl font-extrabold">Verum Ventus</p>
      <p class="text-2xl">Seek the truth in a sea of tweets.</p>
    </div>
    <div class="section">
      <div class="slide">
        <h3>Slide 2.1</h3>
      </div>
      <div class="slide">
        <h3>Slide 2.2</h3>
      </div>
      <div class="slide">
        <h3>Slide 2.3</h3>
      </div>
    </div>
    <div class="section">
      <h3>Section 3</h3>
    </div>
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
