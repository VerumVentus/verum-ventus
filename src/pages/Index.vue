<script setup>
import { ref, watch } from 'vue';
import Box from '../components/Box.vue';
import Card from '../components/Card.vue';
import Contact from '../components/Contact.vue';
import Accordion from '../components/Accordion.vue';
import { onMounted } from 'vue';
import { onUnmounted } from 'vue';

// add an event listener for #app that scrolls the page to the next section when the user scrolls down and previous section when the user scrolls up

const anchors = ref(null);

const active = ref(0);

const scrollTo = (anchor) => {
  anchor.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
};

const scrollElemIntoView = async (elem, options) => {
  return new Promise((resolve, reject) => {
    if (!elem) {
      reject('Cannot scroll as the target element does not exist');
      return;
    }
    elem.scrollIntoView({
      behavior: 'smooth',
      onScrollEnd: resolve(),
      ...options,
    });
  });
};

const scroll = async (e) => {
  if (e.ctrlKey) return;

  e.preventDefault();
  if (e.deltaY > 0) {
    const index = Math.min(active.value + 1, anchors.value.length - 1);
    const next = anchors.value[index];
    await scrollElemIntoView(next, {
      behavior: 'smooth',
      block: 'center',
    });
    active.value = index;
  } else {
    const index = Math.max(active.value - 1, 0);
    const prev = anchors.value[index];
    await scrollElemIntoView(prev, {
      behavior: 'smooth',
      block: 'center',
    });
    active.value = index;
  }
};

const arrow = async (e) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    const index = Math.min(active.value + 1, anchors.value.length - 1);
    const next = anchors.value[index];
    await scrollElemIntoView(next, {
      behavior: 'smooth',
      block: 'center',
    });
    active.value = index;
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    const index = Math.max(active.value - 1, 0);
    const prev = anchors.value[index];
    await scrollElemIntoView(prev, {
      behavior: 'smooth',
      block: 'center',
    });
    active.value = index;
  }
};

const resizeObserver = new ResizeObserver((entries) => {
  const body = window.document.body;
  if (entries[0].contentRect.width > 1280) {
    body.addEventListener('wheel', scroll, { passive: false });
    body.addEventListener('keydown', arrow, { passive: false });
  } else {
    body.removeEventListener('wheel', scroll), { passive: false };
    body.removeEventListener('keydown', arrow, { passive: false });
  }
});

onUnmounted(() => {
  const body = window.document.body;
  body.removeEventListener('wheel', scroll, { passive: false });
  body.removeEventListener('keydown', arrow, { passive: false });
  body.style.overflowY = 'auto';
  resizeObserver.unobserve(body);
});

onMounted(() => {
  const body = window.document.body;
  if (window.innerWidth > 1280) {
    body.style.overflowY = 'hidden';
  }
  const anchor = document.querySelectorAll('.anchor');
  anchors.value = anchor;
  resizeObserver.observe(body);
});
</script>

<template>
  <div
    class="absolute left-16 top-0 bottom-0 m-auto h-fit flex flex-col gap-4 z-50"
  >
    <div
      v-for="(anchor, index) in anchors"
      :key="anchor"
      class="h-2 w-2 bg-light rounded-full hover:scale-150 hover:bg-[#8f3ced] hover:shadow-lg cursor-pointer"
      :class="active === index ? 'bg-[#8f3ced] shadow-lg scale-150' : ''"
      @click="scrollTo(anchor), (active = index)"
    />
  </div>
  <div class="flex flex-col items-center relative">
    <div class="section anchor">
      <div class="bg-img bg-cover" v-lazy:background-image="'/cover.jpg'"></div>
      <div
        class="h-1/2 w-full absolute -z-[1] bottom-0 bg-gradient-to-t from-[#171a1c]"
      />
      <div class="w-full wrapper">
        <div class="flex gap-8 h-full w-full">
          <div class="align-top flex flex-col">
            <h1 class="text-left xl:w-1/2 lg:w-3/4">
              Following the Red-bricked Road to see where it goes.
            </h1>
            <p class="text-3xl font-mono text-left">
              A Data-Driven Investigation into the rampant
              <br />
              Red-tagging of Activists in the Philippines
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="anchor">
      <div class="wrapper flex flex-col items-center p-10">
        <div class="text-center text-5xl">❝</div>
        <blockquote class="max-w-4xl border-y-2 px-8 py-4 text-center">
          <h1 class="italic text-4xl">
            Sabihin mo, ‘Pulis, barilin mo na ‘yang kasali diyan para makita
            talaga kung anong klaseng human right’
          </h1>
          <h2 class="text-2xl">
            — Duterte addressing the nation on protests against war on drugs —
          </h2>
        </blockquote>
      </div>
    </div>
    <div class="section anchor">
      <div class="bg-img bg-cover bg-[#171a1c]" id="grid" />
      <div class="wrapper flex flex-col gap-8">
        <div
          class="flex xl:flex-row xl:gap-16 flex-col justify-between items-center gap-4"
        >
          <h1 class="text-8xl text-left font-extrabold xl:w-min">
            Problem Formulation
          </h1>
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
        <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
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
        class="h-1/4 w-full absolute -z-[1] bottom-0 bg-gradient-to-t from-[#171a1c]"
      />
    </div>
    <div class="section anchor">
      <div
        class="bg-img mix-blend-lighten"
        v-lazy:background-image="'/texture3.png'"
      />
      <div
        class="h-1/4 w-full absolute -z-[1] top-0 bg-gradient-to-b from-[#171a1c]"
      />
      <div class="w-full wrapper">
        <div class="">
          <h1 class="text-8xl text-left font-extrabold">See the tweets</h1>
        </div>
        <div class="max-w-screen-xl flex flex-row gap-8">
          <Accordion />
        </div>
      </div>
    </div>
    <div class="section anchor">
      <div
        class="bg-img bg-[#191c1e] bg-cover"
        v-lazy:background-image="'/wave.png'"
      />
      <div class="wrapper">
        <div class="">
          <h1 class="text-8xl text-left font-extrabold">Meet our team</h1>
          <p>
            In Verum Ventus, we are a three-man team of Filipino college
            students pursuing the power of truth through data-driven research.
          </p>
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
          >
            cast down the mighty, lift up the lowly ✊|
            <a href="https://twitter.com/UPIMPULSE">@UPIMPULSE</a> ✍️|
            <a href="https://twitter.com/AghamYouth_Engg">@AghamYouth_Engg</a>
            ⚙️
          </Contact>
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
