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
