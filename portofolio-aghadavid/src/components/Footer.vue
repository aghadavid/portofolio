<template>
  <div
    class="w-full h-[22rem] bg-[#090516e6] flex flex-col items-center pt-[4rem] pb-[4rem] text-white px-[8rem]"
  >
    <div class="w-full h-full flex justify-between gap-2">
      <div class="bg-transparent h-full flex-1 flex flex-col gap-4">
        <h1 id="contact" class="text-[1.65rem] font-medium">Contact Me</h1>
        <a
          id="emailLink"
          href="mailto:aghadvid@gmail.com"
          class="bg-bgSecondary border border-solid border-bgT rounded-md w-[13rem] px-2 py-1 flex gap-2 items-center cursor-pointer hover:bg-slate-500 hover:scale-105"
        >
          <div class="w-[2rem] h-[2rem] overflow-hidden">
            <mail input="#ffffff" />
          </div>
          <h1 class="font-medium">aghadvid@gmail.com</h1>
        </a>
        <a
          href="https://wa.me/6282245867898"
          class="bg-bgSecondary border border-solid border-bgT rounded-md w-[13rem] px-2 py-1 flex gap-2 items-center cursor-pointer hover:bg-slate-500 hover:scale-105"
        >
          <div class="w-[2rem] h-[2rem] overflow-hidden">
            <img :src="wa" alt="" class="object-contain w-full h-full">
          </div>
          <h1 class="font-medium">+62-822-4586-7898</h1>
        </a>
      </div>

      <div class="h-full flex-1 flex flex-col items-center justify-center gap-4 pl-[20rem]">
        <h1 class="text-[1.65rem] font-medium" >Connect me</h1>
        <div class="flex items-center justify-center gap-4">
          <a :href="i.url" :title="i.title" class="w-[3.5rem] h-[3.5rem] bg-bgSecondary border border-solid border-bgT rounded-md hover:bg-slate-500 hover:scale-105 p-2 cursor-pointer" v-for="i in connect">
            <img :src="i.src" :alt="i.title" class="object-contain w-full h-full">
          </a>
        </div>
      </div>
    </div>
    <div
      class="w-full h-[3rem] bg-bgSecondary border border-solid border-bgT rounded-md mt-[4rem] mb-[2rem] p-1 flex items-center justify-center "
    >
      made by aghadavid_ ⓒ 2024
    </div>
  </div>
</template>

<script setup>
import mail from "@/assets/icons/mail.vue";
import wa from "@/assets/icons/wa.svg"
import connect from "@/assets/icons"
</script>
