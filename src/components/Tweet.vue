<script setup>
import { ref } from 'vue';

const props = defineProps({
  index: Number,
  isActive: Boolean,
});

const active = ref(props.isActive);
const onClickAway = () => {
  active.value = false;
};
</script>

<template>
  <a
    href="#"
    v-on:click="active = !active"
    v-click-away="onClickAway"
    class="bg-[#121619] text-[#c1c3c3] w-fit flex flex-col hover:text-inherit overflow-hidden shadow-lg p-1 transition-all duration-[300ms] ease-in-out delay-400"
    :class="active ? 'flex-initial' : 'flex-1'"
  >
    <div
      class="text-left flex flex-col gap-4 border-4 border-gray-700 p-8 h-[280px] overflow-hidden"
    >
      <Transition name="fade">
        <div v-if="!active">
          <p class="text-[#71767b] text-sm font-mono">
            {{ String(index).padStart(2, '0') || '00' }}
          </p>
        </div>
      </Transition>
      <Transition>
        <div class="overflow-auto flex flex-col gap-4" v-if="active">
          <div class="flex gap-4 items-center">
            <img src="/mutya.jpg" class="h-10 rounded-full" alt="Vite logo" />
            <div class="flex flex-col">
              <p class="font-bold">John Doe</p>
              <p class="text-[#71767b] text-sm">@jdoe</p>
            </div>
          </div>
          <p class="break-words max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            explicabo et perspiciatis ab iure pariatur debitis alias expedita
            illo saepe hic doloremque nihil ad ea, incidunt ipsa nam sapiente
            fugiat!
          </p>
        </div>
      </Transition>
    </div>
  </a>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  width: 0;
  height: 0;
}
</style>
