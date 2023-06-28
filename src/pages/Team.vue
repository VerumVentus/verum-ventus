<template>
  <div class="section anchor">
    <div
      class="bg-img bg-[#121619] bg-cover"
      v-lazy:background-image="'/wave.png'"
    />
    <div class="wrapper">
      <Navbar class="relative block invisible" />
      <div class="">
        <h1>Meet our team</h1>
        <p>
          In Verum Ventus, we are a three-person team of Filipino college
          students pursuing the power of truth through data-driven research.
        </p>
      </div>
      <div class="w-full flex justify-center gap-8 xl:my-16 my-8">
        <Contact name="Mutya Gulapa" email="mcgulapa@up.edu.ph" src="mutya.jpg">
          23-year-old grandma 👵 So many hobbies ☘📚🎨🎶🧶📷 So little time ⏳😿
        </Contact>
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
        >
          ako lang ang may frontend masters vibes sa klase namin dito 🤓
        </Contact>
      </div>

      <h2>Acknowledgements</h2>

      <p>
        The team would like to thank the following groups whose datasets were
        included in the Data Modelling process of our project: Group 3, Group 4,
        Group 5, Group 15, Group 16, Group 17, Group 24, Group 26, Group 32,
        Group 42 , Group 53, and Group 56.
      </p>
      <p>
        Our team would also like to thank Dr. Paul Regonia for his unwavering
        support and assistance in the development of this project.
      </p>
    </div>
  </div>
</template>

<style scoped>
html {
  overflow-y: auto;
}
</style>

<script setup>
import Contact from '@/components/Contact.vue';
import Navbar from '@/components/Navbar.vue';
</script>
