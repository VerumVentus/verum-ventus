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
    @click="active = !active"
    v-click-away="onClickAway"
    class="bg-[#121619] cursor-pointer flex-1 text-[#c1c3c3] float-left flex w-fit flex-col hover:text-inherit overflow-hidden shadow-lg p-1 transition-all duration-[300ms] ease-in-out delay-400"
  >
    <div
      class="text-left flex p-8 flex-col gap-4 border-4 border-gray-700 h-[320px] overflow-hidden relative transition-all duration-[300ms] ease-in-out delay-400"
      :class="active ? 'w-[500px]' : 'w-20'"
    >
      <div v-if="!active" class="absolute top-10 left-0 right-0 mx-auto w-fit">
        <p class="text-[#71767b] text-sm font-mono">
          {{ String(index).padStart(2, '0') || '00' }}
        </p>
      </div>
      <Transition name="expand">
        <div
          class="overflow-hidden h-full flex flex-col justify-between gap-4"
          v-if="active"
        >
          <div class="flex flex-col gap-4">
            <div class="flex gap-4 items-center">
              <img src="/mutya.jpg" class="h-10 rounded-full" alt="Vite logo" />
              <div class="flex flex-col">
                <h6 class="font-bold my-0">
                  John Doe
                  <v-icon name="hi-solid-badge-check" class="text-[#1da1f2]" />
                </h6>
                <h6 class="text-[#71767b] text-sm my-0">@jdoe</h6>
              </div>
              <v-icon
                name="bi-twitter"
                class="text-[#1da1f2] ml-auto"
                scale="1.5"
              />
            </div>
            <h6 class="break-words w-[calc(500px-4rem)]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati explicabo et perspiciatis ab iure pariatur debitis alias
              expedita illo saepe hic doloremque nihil ad ea, incidunt ipsa nam
              sapiente fugiat!
            </h6>
          </div>
          <div class="flex gap-4 items-center">
            <div class="gap-2 flex">
              <v-icon name="hi-heart" />
              <div>1.2k</div>
            </div>
            <div>3:25 PM - Jan 16, 2019</div>
          </div>
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
