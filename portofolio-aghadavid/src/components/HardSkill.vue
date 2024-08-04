<template>
  <div
    class="h-[40rem] w-full shadow-sm bg-gradient-to-t from-[#151238ce] to-transparent border border-solid border-bgT rounded-md sticky top-[5rem] text-white p-[6rem] flex gap-4"
  >
    <div class="flex-1 flex flex-col px-4 pt-8">
      <h1 class="text-secondary text-[1.5rem] mb-[1.25rem]">Skills</h1>
      <div>
        <h1 class="text-[3.45rem] leading-[3.55rem] font-semibold">
          What can i do for
        </h1>
        <h1 class="text-[3.45rem] leading-[3.55rem] font-semibold">
          Your Need
        </h1>
      </div>
      <p class="w-[80%] text-[1.15rem] mt-4">
        My skills are all about delivering what works. Whether you need help
        with a specific challenge or ongoing support, I’m here to provide clear,
        effective solutions tailored to your needs."
      </p>
    </div>

    <div class="flex-1 w-full h-full flex justify-center">
      <div
        class="flex flex-wrap items-center justify-center gap-3 w-[37rem] h-[15rem] absolute top-[20%] pt-10"
      >
        <iconHardSkill v-for="data in dataSkills" :key="index" :src="data.src" :title="data.title"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import iconHardSkill from "@/components/IconHardSkill.vue"
import dataSkills from "@/assets/icons/hard-skills/index.js"
</script>