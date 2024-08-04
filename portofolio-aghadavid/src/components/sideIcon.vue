<template>
  <a :href="url" >
  <div
      class="w-[2.75rem] h-[2.75rem] bg-transparent border backdrop-blur-md rounded-md p-1 hover:scale-105 cursor-pointer hover:bg-gradient-to-tl from-baseText to-transparent"
      :title="tittle"
    >
      <img :src="imgUrl" alt="" class="object-contain w-full h-full"/>
    </div>
</a>
</template>

<script setup>
defineProps({
  url: String,
  imgUrl: String,
  title: String,
});
</script>

<style scoped>
</style>