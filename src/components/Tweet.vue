<script setup>
import { computed } from 'vue';
import { ref } from 'vue';

const props = defineProps({
  index: Number,
  isActive: Boolean,
  name: String,
  img: String,
  handle: String,
  replies: {
    type: Number,
    default: 0,
  },
  retweets: {
    type: Number,
    default: 0,
  },
  likes: Number,
  date: String,
});

const formattedDate = computed(() => {
  if (!props.date) return null;

  const [datePart, timePart] = props.date.split(' ');
  const [day, month, year] = datePart.split('/');
  const [hour, minute] = timePart.split(':');

  const dateObj = new Date(year, month - 1, day, hour, minute);

  const formattedTime = dateObj.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const formattedDate = dateObj.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return `${formattedTime} · ${formattedDate}`;
});

const active = ref(props.isActive);
const onClickAway = () => {
  active.value = false;
};

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati explicabo et perspiciatis ab iure pariatur debitis alias expedita illo saepe hic doloremque nihil ad ea, incidunt ipsa nam sapiente fugiat!';
</script>

<template>
  <div
    @click="active = !active"
    v-click-away="onClickAway"
    class="bg-dark cursor-pointer flex-1 text-[#c1c3c3] float-left flex w-fit flex-col hover:text-inherit overflow-hidden shadow-lg p-1 transition-all duration-[300ms] ease-in-out delay-400"
  >
    <div
      class="text-left flex p-8 flex-col gap-4 h-[300px] overflow-hidden relative transition-all duration-[300ms] ease-in-out delay-400"
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
              <img v-lazy="props.img" class="h-10 rounded-full" alt="avatar" />
              <div class="flex flex-col">
                <h6 class="font-bold text-base my-0">
                  {{ props.name ?? 'John Doe' }}
                  <v-icon name="hi-solid-badge-check" class="text-[#1da1f2]" />
                </h6>
                <h6 class="text-[#71767b] text-base my-0">
                  {{ props.handle ?? '@jdoe' }}
                </h6>
              </div>
              <v-icon
                name="bi-twitter"
                class="text-[#1da1f2] ml-auto"
                scale="1.5"
              />
            </div>
            <div class="break-words line-clamp-4 text-base w-full">
              <slot>{{ lorem }}</slot>
            </div>
          </div>
          <div class="flex gap-8 items-center">
            <div class="flex gap-2">
              <div class="gap-2 flex items-center">
                <v-icon name="la-comment-alt" />
                <div>
                  {{
                    new Intl.NumberFormat('en-US', {
                      notation: 'compact',
                      compactDisplay: 'short',
                    }).format(props.replies) ?? '1.2k'
                  }}
                </div>
              </div>
              <div class="gap-2 flex items-center">
                <v-icon name="la-heart" />
                <div>
                  {{
                    new Intl.NumberFormat('en-US', {
                      notation: 'compact',
                      compactDisplay: 'short',
                    }).format(props.likes) ?? '1.2k'
                  }}
                </div>
              </div>
              <div class="gap-2 flex items-center">
                <v-icon name="la-retweet-solid" />
                <div>
                  {{
                    new Intl.NumberFormat('en-US', {
                      notation: 'compact',
                      compactDisplay: 'short',
                    }).format(props.retweets) ?? '1.2k'
                  }}
                </div>
              </div>
            </div>
            <div>{{ formattedDate ?? '3:25 PM - Jan 16, 2019' }}</div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
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
