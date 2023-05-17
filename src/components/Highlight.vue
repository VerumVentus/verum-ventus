<template>
  <pre
    v-highlightjs
    class="bg-[#282a36]/50 my-8 rounded-2xl overflow-hidden"
  ><code class="max-h-screen" :class="lang" v-html="reader(input)"></code><slot><pre class="px-16 text-xs py-8 h-fit" v-if="output" v-html="reader(output)"></pre></slot></pre>
</template>

<script setup>
import reader from '@/utils/reader';

defineProps({
  input: String,
  output: String,
  lang: {
    type: String,
    default: 'python',
  },
});
</script>
