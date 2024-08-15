<template>
  <navbar />
  <hero />

  <div class="w-full h-[120rem] flex flex-col gap-[2rem] px-[8rem] pt-[5rem]">
    <div class="flex flex-col gap-[4rem]">
      <hard-skill />
      <div
        class="h-[40rem] w-full shadow-sm bg-gradient-to-t from-bgSecondary to-base border border-solid border-bgT rounded-md sticky top-[5rem] text-white p-[4rem] flex gap-4"
      >
        <div class="flex-1 bg-slate-500"></div>
        <div class="flex-1 bg-slate-700"></div>
      </div>
    </div>

   

    <div class="flex gap-[2rem]">
      <div
        class="flex-1 h-[20rem] bg-bgSecondary border border-solid border-bgT rounded-md"
      ></div>
      <div
        class="flex-1 h-[20rem] bg-bgSecondary border border-solid border-bgT rounded-md"
      ></div>
    </div>
  </div>

  <!-- FOOTER -->
  <Footer/>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import HardSkill from "./components/HardSkill.vue";
import Hero from "./components/Hero.vue";
</script>
