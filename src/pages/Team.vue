<template>
  <div class="section anchor">
    <div
      class="bg-img bg-[#191c1e] bg-cover"
      v-lazy:background-image="'/wave.png'"
    />
    <div class="wrapper">
      <Navbar class="relative block invisible" />
      <div class="">
        <h1 class="text-8xl text-left font-extrabold">Meet our team</h1>
        <p>
          In Verum Ventus, we are a three-man team of Filipino college students
          pursuing the power of truth through data-driven research.
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
</template>

<script setup>
import Contact from '@/components/Contact.vue';
import Navbar from '@/components/Navbar.vue';
</script>
