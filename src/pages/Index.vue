<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Box from '@/components/Box.vue';
import Card from '@/components/Card.vue';
import Accordion from '@/components/Accordion.vue';
import Marquee from '@/components/Marquee.vue';

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
  const body = document.querySelector('html');
  if (entries[0].contentRect.width > 1280) {
    body.addEventListener('wheel', scroll, { passive: false });
    body.addEventListener('keydown', arrow, { passive: false });
    body.style.overflowY = 'hidden';
  } else {
    body.removeEventListener('wheel', scroll), { passive: false };
    body.removeEventListener('keydown', arrow, { passive: false });
    body.style.overflowY = 'auto';
  }
});

onUnmounted(() => {
  const body = document.querySelector('html');
  body.removeEventListener('wheel', scroll, { passive: false });
  body.removeEventListener('keydown', arrow, { passive: false });
  body.style.overflowY = 'auto';
  resizeObserver.unobserve(body);
});

onMounted(() => {
  const body = document.querySelector('html');
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
    class="fixed lg:hidden left-16 top-0 bottom-0 m-auto h-fit flex flex-col gap-4 z-50"
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
            <h1 class="text-left mb-4 capitalize xl:w-1/2 lg:w-3/4">
              Following the Red-bricked Road to see where it goes.
            </h1>
            <p class="text-3xl text-left">
              A Data-Driven Investigation into the rampant
              <br />
              Red-tagging of Activists in the Philippines
            </p>
          </div>
        </div>
      </div>
      <div class="indicator xl:visible invisible flex justify-center">
        <div class="absolute w-max top-full transform translate-y-1/2 text-xs">
          SCROLL DOWN
        </div>
      </div>
    </div>

    <div class="section anchor">
      <div
        class="w-full h-full absolute z-[-2] top-0 bg-cover grayscale-[80%] opacity-80 brightness-[30%] contrast-[110%]"
        v-lazy:background-image="
          `https://foreignpolicy.com/wp-content/uploads/2019/06/GettyImages-936706736.jpg?w=1537`
        "
      ></div>
      <div
        class="h-1/2 w-full absolute -z-[1] top-0 bg-gradient-to-b from-[#171a1c]"
      />
      <div class="flex transform flex-col -space-y-20">
        <Marquee :key="1" class="-rotate-3 -translate-y-16" />
        <Marquee
          :key="2"
          class="rotate-[4deg] translate-y-4"
          :direction="'reverse'"
        />
      </div>
      <div
        class="h-1/2 w-full absolute -z-[1] bottom-0 bg-gradient-to-t from-[#171a1c]"
      />
    </div>
    <div class="anchor">
      <div class="wrapper flex flex-col items-center p-10">
        <div class="text-center text-5xl">❝</div>
        <blockquote class="max-w-4xl border-y-2 px-8 py-4 text-center">
          <h1 class="italic leading-normal tracking-normal text-4xl">
            Sabihin mo, ‘Pulis, barilin mo na ‘yang kasali diyan para makita
            talaga kung anong klaseng human right’
          </h1>
          <h2 class="text-2xl mb-0">
            — Duterte addressing the nation on protests against war on drugs —
          </h2>
          <p class="mt-0">August 16, 2017</p>
        </blockquote>
      </div>
    </div>

    <div class="section anchor">
      <div class="bg-img bg-cover bg-[#171a1c]" id="grid" />
      <div class="wrapper flex flex-col">
        <h1 class="text-8xl text-left font-extrabold">Introduction</h1>
        <p>
          In the Information Age,
          <b> people no longer rely solely on traditional media for news. </b>
          Instead,they seek awareness from highly popular posts on social media
          by virtually anyone. This, combined with polarized politics and the
          structure of social media, makes it
          <b> challenging to distinguish truth from falsehood. </b>
        </p>

        <p>
          <b>Verum Ventus</b> seeks to make the truth louder through data
          science. By employing a data-driven approach to collect misinformation
          surrounding activists during the Duterte Administration in the
          Philippines, we aim to
          <b>
            identify patterns that can contribute to finding solutions for the
            issue of red-tagging
          </b>
          activists in the country.
        </p>
      </div>
      <div
        class="h-1/4 w-full absolute -z-[1] bottom-0 bg-gradient-to-t from-[#171a1c]"
      />
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
            class="text-left flex-1 text-base bg-dark"
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
            class="text-base"
            header="Research Question"
            msg="Did the Duterte Administration exacerbate the problem of red-tagging in the Philippines?"
            icon="hi-search"
          />
          <Card
            class="text-base"
            header="Hypothesis"
            msg="Red-tagging of activists increased with time in the course of the Duterte administration"
            icon="hi-star"
          />
          <Card
            class="text-base"
            header="Null Hypothesis"
            msg="The red-tagging of activists did not change during the course of the Duterte Administration"
            icon="hi-ban"
          />
          <Card
            class="text-base"
            header="Action Plan"
            msg="Analyze the yearly frequency of the mis/disinformation tweets that red-tag activists"
            icon="hi-terminal"
          />
        </div>
      </div>
      <div
        class="h-1/4 w-full absolute -z-[1] bottom-0 bg-gradient-to-t from-[#171a1c]"
      />
    </div>
    <div class="section anchor">
      <div class="bg-img bg-cover bg-[#171a1c]" id="grid" />
      <div class="wrapper flex flex-col gap-8">
        <h1 class="text-8xl text-left font-extrabold">Materials and Methods</h1>
        <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          <Card
            class="text-base"
            header="Collection"
            msg="SNScrape was used as a tweet scraper to collect at least 150 tweets from years 2016 to 2022 containing specific keywords relevant to the topic. "
            icon="bi-twitter"
          />
          <Card
            class="text-base"
            header="Pre-Processing"
            msg="Data was checked for proper formatting and integrity, ensuring that all necessary fields were present and correctly structured."
            icon="hi-solid-filter"
          />
          <Card
            class="text-base"
            header="Exploration"
            msg="Data was checked for proper formatting and integrity, ensuring that all necessary fields were present and correctly structured."
            icon="hi-solid-light-bulb"
          />
          <Card
            class="text-base"
            header="Modeling"
            msg="Linear regression was used to analyze fake news frequency trends and Peak Detection was used to determine correlations with real-life events during the Duterte regime."
            icon="hi-solid-chart-square-bar"
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
        <div class="max-w-screen-xl my-16 flex flex-row gap-8">
          <Accordion />
        </div>

        <router-link
          to="/collection"
          class="flex items-center gap-4 mt-8 group"
        >
          <p>
            <span class="highlighted group-hover:text-primary"
              >See how we acquired the data</span
            >
          </p>

          <v-icon
            name="hi-arrow-right"
            class="transform transition-all group-hover:translate-x-3"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>
