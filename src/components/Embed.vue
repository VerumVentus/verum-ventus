<template>
  <div :id="`gist-${props.file}`"></div>
</template>

<script setup>
import postscribe from 'postscribe';
import { onMounted } from 'vue';

const props = defineProps({
  gistId: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    default: null,
  },
});

onMounted(() => {
  postscribe(
    `#gist-${props.file}`,
    `<script src="https://gist.github.com/${props.gistId}.js?file=${props.file}"><\/script>`
  );
});
</script>
