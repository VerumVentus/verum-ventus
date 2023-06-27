<template>
  <Vue3Marquee
    class="w-[150vw] -translate-x-4 flex items-center transform absolute py-7 bg-[#ead62a] text-[#24200a]"
    :clone="true"
    :duration="16"
    :direction="direction"
  >
    <div
      class="text-[3.5vw] transform translate-y-3 leading-[100%] tracking-widest"
    >
      POLICE LINE DO NOT CROSS
    </div>
    <div class="bg-current h-5 w-5 rounded-full mx-10"></div>
  </Vue3Marquee>
</template>

<style>
.vue3-marquee.horizontal {
  width: 120vw;
}
</style>

<script setup>
defineProps({
  direction: {
    type: String,
    default: 'normal',
  },
});
</script>
