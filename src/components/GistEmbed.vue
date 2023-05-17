<template>
  <code :data-gist-id="gistId" :data-file="file"></code>
  <component
    :is="'script'"
    type="text/javascript"
    src="https://cdn.jsdelivr.net/npm/gist-embed@1.0.4/dist/gist-embed.min.js"
  ></component>
</template>

<script>
export default {
  props: {
    gistId: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      default: null,
    },
  },
};
</script>
