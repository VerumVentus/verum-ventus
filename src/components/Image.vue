<template>
  <div class="flex relative rounded-md overflow-clip shadow-sm">
    <img v-lazy="src" class="w-full" />
    <div
      v-if="source"
      class="absolute w-fit bottom-0 right-0 bg-black/80 py-2 px-4 text-xs"
    >
      {{ `SOURCE: ${source}` }}
    </div>
  </div>
</template>

<style>
@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes brightness {
  0% {
    filter: brightness(0.5);
  }
  100% {
    filter: brightness(1);
  }
}

img[lazy='loading'] {
  @apply bg-[#1f2027];
  filter: brightness(0.5);
  animation-name: brightness;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
}

img[lazy='loaded'] {
  opacity: 0;
  animation-name: fadein;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-direction: normal;
  animation-timing-function: ease-out;
}
</style>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: '100%',
  },
  source: {
    type: String,
    default: null,
  },
});
</script>
