<template>
  <footer class="w-full rounded-lg shadow bg-dark mt-4 anchor relative">
    <div
      class="h-1/2 -translate-y-full w-full absolute -z-[1] -top-0 bg-gradient-to-t from-dark"
    />
    <div class="wrapper py-10">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a class="flex items-center mb-4 sm:mb-0">
          <logo class="h-8 w-8 mr-2" />
          <h1
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white my-4"
          >
            Verum Ventus
          </h1>
        </a>

        <div class="flex items-center gap-4">
          <div class="flex flex-col text-right">
            <b>University of the Philippines - Diliman</b>
            <span>Department of Computer Science</span>
          </div>
          <div class="flex gap-4 my-8">
            <Image class="h-20 w-20" :src="`/up.png`" />
            <Image class="h-20 w-20" :src="`/dcs.png`" />
          </div>
        </div>
      </div>
      <hr
        class="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <span
        class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2023
        <router-link to="/" class="hover:underline">VerumVentus</router-link>.
        All Rights Reserved.</span
      >
    </div>
  </footer>
</template>

<script setup>
import Image from './Image.vue';
import Logo from './Logo.vue';
</script>
