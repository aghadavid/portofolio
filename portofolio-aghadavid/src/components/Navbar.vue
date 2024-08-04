<template>
  <div
    class="h-[5.25rem] w-full bg-base px-[7rem] py-3 text-white flex items-center justify-between"
  >
    <ul class="flex gap-4 font-semibold text-[1.25rem]">
      <a href="#hero">
        <li class="hover:scale-105 cursor-pointer">Home</li>
      </a>
      <li class="hover:scale-105 cursor-pointer">About</li>
      <a href="#contact">
        <li class="hover:scale-105 cursor-pointer">Contact</li>
      </a>
    </ul>
    <div
      class="w-[9.5rem] h-[3rem] flex items-center justify-center text-white bg-secondary rounded-sm px-2 py-[0.1rem] cursor-pointer text-[1.2rem] hover:scale-105 hover:bg-red-500 shadow-sm"
    >
      <div class="w-[1.6rem] h-[1.6rem] overflow-hidden">
        <img :src="cv" alt="" class="object-contain w-full h-full" />
      </div>
      <p class="">Download cv</p>
    </div>
  </div>
</template>

<script setup>
import cv from "@/assets/icons/cv.svg";
</script>
