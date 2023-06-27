<template>
  <div class="bg-[#22242a] rounded-md overflow-hidden my-8">
    <Disclosure v-slot="{ open }">
      <DisclosureButton
        class="flex w-full h-[3rem] items-center justify-between rounded-none px-4 py-2 text-left text-sm font-medium outline-none"
      >
        <div class="flex gap-2 items-center justify-center">
          <v-icon name="hi-terminal" />
          <span class="leading-[100%] translate-y-[4px]">Codeblock</span>
        </div>
        <div class="flex items-center gap-2">
          <code v-if="!open"> Expand </code>
          <v-icon
            name="hi-chevron-up"
            class="h-5 w-5"
            :class="open ? 'rotate-180 transform' : ''"
          />
        </div>
      </DisclosureButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform -translate-y-5 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform =translate-y-5 opacity-0"
      >
        <DisclosurePanel>
          <pre
            v-highlightjs
            class="bg-[#282a36]/50 mb-8 overflow-hidden"
          ><code v-if="input" :class="lang" class="rounded-none" v-html="reader(input)"></code><slot><pre class="px-16 text-xs py-8 h-fit" v-if="output" v-html="reader(output)"></pre></slot></pre>
        </DisclosurePanel>
      </transition>
    </Disclosure>
  </div>
</template>

<style scoped>
code {
  @apply max-h-[80vh];
}
</style>

<script setup>
import reader from '@/utils/reader';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

defineProps({
  input: String,
  output: String,
  lang: {
    type: String,
    default: 'python',
  },
});
</script>
