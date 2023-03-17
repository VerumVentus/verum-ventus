<script setup>
import { ref } from 'vue';
import Box from './components/Box.vue';
import Card from './components/Card.vue';

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
  <div class="min-w-full absolute z-50 flex justify-between items-center px-2">
    <a href="#page1" target="_blank">
      <img src="/logo.svg" class="logo" alt="Vite logo" />
    </a>
    <div class="flex gap-8 pr-8 uppercase">
      <a href="#page2" target="_blank"> Overview </a>
      <a href="#page3" target="_blank"> Data </a>
      <a href="#page3" target="_blank"> Methods </a>
      <a href="#page3" target="_blank"> Results </a>
      <a href="#page3" target="_blank"> Team </a>
    </div>
  </div>
  <full-page :options="options" id="fullpage" ref="fullpage">
    <div class="section">
      <div id="title" />
      <div class="h-full w-full absolute -z-[1] bg-gradient-to-t from-black" />
      <p class="text-9xl font-extrabold">Verum Ventus</p>
      <p class="text-2xl">Seek the truth in a sea of tweets.</p>
    </div>
    <div class="section">
      <div class="mx-40 flex flex-col gap-8">
        <div class="flex justify-between items-center">
          <p class="text-8xl text-left font-extrabold">Problem Formulation</p>
          <Card header="Research Question" icon="oi-search" />
        </div>
        <div class="flex gap-8">
          <Box header="Background" icon="oi-telescope" />
          <Card header="Null Hypothesis" icon="oi-skip" />
          <Card header="Alternative Hypothesis" icon="oi-star" />
          <Card header="Action Plan" icon="oi-terminal" />
        </div>
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
