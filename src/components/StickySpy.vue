<template>
  <nav class="section-nav h-fit w-full max-w-sm xl:block hidden">
    <div class="progress-bar" />
    <ol class="bullet-list">
      <li v-for="link in links">
        <a :href="link.target">{{ link.name }}</a>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const observer = ref(null);
const links = ref([]);
const root = ref(null);

onMounted(() => {
  observer.value = new IntersectionObserver(onElementObserved, {
    threshold: 0,
    rootMargin: '-50% 0px -50% 0px',
  });

  root.value = document.querySelector('.article-wrapper');

  root.value.querySelectorAll('section[id]').forEach((section) => {
    observer.value.observe(section);
  });

  links.value = Array.from(
    root.value.querySelectorAll('section[id]'),
    (section) => ({
      name: section.querySelector('h2').textContent,
      target: `#${section.getAttribute('id')}`,
    })
  );

  // add scroll listener to window document and
  // on scroll, set section-nav::after height to scroll position percentage
  const sectionNav = document.querySelector('.progress-bar');

  window.addEventListener('scroll', () => {
    const scrollPercentage =
      (document.documentElement.scrollTop /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
      100;

    sectionNav.style.height = `${scrollPercentage}%`;
  });
});

onUnmounted(() => {
  observer.value.disconnect();
});

function onElementObserved(entries) {
  entries.forEach(({ target, isIntersecting }) => {
    const id = target.getAttribute('id');
    if (isIntersecting) {
      document
        .querySelector(`nav ol li a[href="#${id}"]`)
        .parentElement.classList.add('active');
    } else {
      document
        .querySelector(`nav ol li a[href="#${id}"]`)
        .parentElement.classList.remove('active');
    }
  });
}
</script>

<style scoped>
/* Sidebar Navigation */
.section-nav {
  position: sticky;
  top: 120px;
  right: 0;
  margin-top: 2rem;
  padding-left: 0;
  @apply border-l border-light/10;
}

.progress-bar {
  box-sizing: border-box;
  @apply absolute h-0 border-l-4 transform translate-x-[-2px] border-primary left-0 top-0;
}

.section-nav a {
  text-decoration: none;
  display: block;
  padding: 0.125rem 0;
  color: #ccc;
  transition: all 50ms ease-in-out;
}

.section-nav a:hover,
.section-nav a:focus {
  color: #666;
}

.section-nav li.active > a {
  @apply text-primary font-extrabold;
}

/* Sticky Navigation */
main > nav {
  position: sticky;
  top: 2rem;
  align-self: start;
}

ul.bullet-list,
ol.bullet-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin-left: 1rem;
}

/** page layout **/
main {
  display: grid;
  position: relative;
  grid-template-columns: 1fr 15em;
  max-width: 100em;
  width: 90%;
  margin: 0 auto;
}

/** enlarge the sections for this demo, so that we have a long scrollable page **/
section {
  margin-bottom: 50rem;
}
</style>
