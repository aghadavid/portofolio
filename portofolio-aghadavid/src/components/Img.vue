<template>
    <div :class="`w-[${w}] h-[${h}] overflow-hiddenx `">
        <img :src="src" :alt="alt" class="object-cover w-full h-full">
    </div>
</template>

<script setup>
defineProps({
  src: String,
  w: String,
  h: String,
  alt: String

})
</script>