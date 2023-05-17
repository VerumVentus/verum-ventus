<script setup>
import { ref } from 'vue';
import Box from '../components/Box.vue';
import Card from '../components/Card.vue';
import Contact from '../components/Contact.vue';
import Accordion from '../components/Accordion.vue';
import Footer from '@/components/Footer.vue';
import { onMounted } from 'vue';
import { onBeforeUnmount } from 'vue';
import { onUnmounted } from 'vue';

// add an event listener for #app that scrolls the page to the next section when the user scrolls down and previous section when the user scrolls up

const anchors = ref(null);

const scrollTo = (anchor) => {
  anchor.scrollIntoView({
    behavior: 'smooth',
  });
};

const scroll = (e) => {
  e.preventDefault();
  if (e.deltaY > 0) {
    const next = Array.from(anchors.value).find(
      (section) => section.offsetTop > app.scrollTop
    );
    next?.scrollIntoView({
      behavior: 'smooth',
    });
  } else {
    const prev = Array.from(anchors.value)
      .reverse()
      .find((section) => section.offsetTop < app.scrollTop);
    prev?.scrollIntoView({
      behavior: 'smooth',
    });
  }
};

onUnmounted(() => {
  const app = document.querySelector('#app');
  app.removeEventListener('wheel', scroll);
});

onMounted(() => {
  const app = document.querySelector('#app');
  const anchor = document.querySelectorAll('.anchor');
  anchors.value = anchor;

  app.addEventListener('wheel', scroll);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      const next = Array.from(anchor).find(
        (section) => section.offsetTop > app.scrollTop
      );
      next?.scrollIntoView({
        behavior: 'smooth',
      });
    } else if (e.key === 'ArrowUp') {
      console.log('up');
      const prev = Array.from(anchor)
        .reverse()
        .find((section) => section.offsetTop < app.scrollTop);
      prev?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});
</script>

<style scoped>
#app {
  overflow-y: hidden;
  height: 100vh;
}
</style>

<template>
  <div
    class="absolute left-16 top-0 bottom-0 m-auto h-fit flex flex-col gap-4 z-50"
  >
    <div
      v-for="anchor in anchors"
      :key="anchor"
      class="h-2 w-2 bg-base rounded-full hover:scale-150 hover:bg-[#8f3ced] hover:shadow-lg cursor-pointer"
      @click="scrollTo(anchor)"
    />
  </div>
  <div class="flex flex-col items-center relative">
    <div class="section anchor">
      <div class="bg-img bg-cover" v-lazy:background-image="'/cover.jpg'"></div>
      <div
        class="h-1/2 w-full absolute -z-[1] bottom-0 bg-gradient-to-t from-[#171a1c]"
      />
      <div class="w-full wrapper">
        <div class="flex gap-8 h-full">
          <div class="w-fit align-top flex flex-col gap-8">
            <h1 class="text-left">
              Following the
              <br />
              Red Bricked Road
              <br />
              to see where
              <br />it goes.
            </h1>
            <p class="text-3xl font-mono text-left">
              A Data-Driven Investigation into the rampant
              <br />
              Red Tagging of Activists in the Philippines
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section anchor">
      <div class="bg-img bg-cover bg-[#171a1c]" id="grid" />
      <div class="wrapper flex flex-col gap-8">
        <div class="flex justify-between items-center gap-16">
          <p class="text-8xl text-left font-extrabold w-min">
            Problem Formulation
          </p>
          <Box
            header="Background"
            icon="oi-telescope"
            class="text-left flex-1 bg-dark"
          >
            Red-tagging in the Philippines has been used for decades as the
            government's approach to campaign against insurgencies since 1969.
            With the creation of NTF-ELCAC during the Duterte's administration,
            red-tagging became more dangerous -- dedicated and funded
            specifically to tracking down alleged members of CPP-NPA.
          </Box>
        </div>
        <div class="flex gap-8">
          <Card
            header="Research Question"
            msg="Did the Duterte Administration exacerbate the problem of red-tagging in the Philippines?"
            icon="hi-search"
          />
          <Card
            header="Hypothesis"
            msg="Red-tagging of activists increased with time in the course of the Duterte administration"
            icon="hi-star"
          />
          <Card
            header="Null Hypothesis"
            msg="The red-tagging of activists did not change during the course of the Duterte Administration"
            icon="hi-ban"
          />
          <Card
            header="Action Plan"
            msg="Analyze and compare the yearly frequency of the mis/disinformation tweets that red-tag activists"
            icon="hi-terminal"
          />
        </div>
      </div>
      <div
        class="h-1/4 w-full absolute -z-[1] bottom-0 bg-gradient-to-t from-[#101213]"
      />
    </div>
    <div class="section anchor">
      <div
        class="bg-img bg-[#101213]"
        v-lazy:background-image="'/texture3.png'"
      />
      <div
        class="h-1/4 w-full absolute -z-[1] top-0 bg-gradient-to-b from-[#101213]"
      />
      <div class="w-full wrapper">
        <div class="">
          <p class="text-8xl text-left font-extrabold">See the tweets</p>
        </div>
        <div class="max-w-screen-xl flex flex-row gap-8">
          <Accordion />
        </div>
      </div>
    </div>
    <div class="section anchor">
      <div class="bg-img bg-cover" v-lazy:background-image="'/wave.png'" />
      <div class="wrapper">
        <div class="">
          <p class="text-8xl text-left font-extrabold">Meet our team</p>
        </div>
        <div class="w-full flex justify-center gap-8">
          <Contact
            name="Mutya Gulapa"
            email="mcgulapa@up.edu.ph"
            src="mutya.jpg"
          />
          <Contact
            name="Migo Pagdanganan"
            email="avpagdanganan@up.edu.ph"
            src="migo.jpg"
          />
          <Contact
            name="Jarred Luzada"
            email="jeluzada@up.edu.ph"
            src="jarred.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>
