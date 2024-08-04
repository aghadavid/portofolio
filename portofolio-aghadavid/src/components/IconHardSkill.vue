<template>
    <div
          class="w-[7rem] h-[7rem] rounded-lg bg-bgSecondary border border-solid border-bgT p-2 hover:bg-bgT hover:scale-105    " 
            :title="title"
          >
        <img :src="src" :alt="title" class="object-contain w-full h-full">
        </div>
</template>

<script setup>

defineProps({
    src: String,
    title : String
})

</script>