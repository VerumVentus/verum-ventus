<template>
  <code :data-gist-id="gistId" :data-gist-file="file"></code>
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
  mounted() {
    let gistembed = document.createElement('script');
    gistembed.setAttribute(
      'src',
      'https://cdn.jsdelivr.net/npm/gist-embed@1.0.4/dist/gist-embed.min.js'
    );
    document.body.appendChild(gistembed);
  },
};
</script>
