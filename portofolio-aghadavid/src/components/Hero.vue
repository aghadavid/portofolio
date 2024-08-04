<template>
  <div class="w-full h-[40rem] bg-red-200 overflow-hidden relative " id="hero">
    <video src="@/assets/x.mp4" autoplay loop class="object-cover"></video>
    <div
      class="w-full h-full bg-gradient-to-t from-base to-transparent absolute top-0 z-[2]"
    ></div>
    <div class="flex items-center absolute top-0 w-full h-full z-[3] px-[8rem]">
      <div class="flex flex-1 flex-col gap-[2.4rem] w-[40rem]">
        <div>
          <p
            class="text-[3.5rem] leading-[3.5rem] tracking-tighter text-white font-medium"
          >
            Hi, I'm agha David
          </p>
          <p class="text-[2.4rem] leading-[3.2rem] text-white font-extrabold">
            Web Developer & Frontend Developer
          </p>
        </div>
        <p class="text-white text-[1.25rem] font-medium">
          "Welcome to my portfolio! I create modern, user-friendly web
          applications with modern design . Let's build something amazing
          together."
        </p>
        <div>
          <a
            id="emailLink"
            href="mailto:aghadvid@gmail.com"
            class="w-[10rem] h-[3.55rem] text-secondary bg-tansparent backdrop-blur-md border border-secondary rounded-lg p-3 cursor-pointer mt-5 hover:scale-105 hover:text-white hover:bg-gradient-to-l from-secondary to-transparent shadow-lg flex items-center justify-center gap-4"
          >
            <div class="w-[2rem] h-[2rem] overflow-hidden">
              <mail input="#ed3921" />
            </div>
            <p class="text-[1.2rem]">Hire Me</p>
          </a>
        </div>
      </div>
      <div class="flex-1 h-full flex items-center justify-end">
        <div class="flex flex-col gap-4 pr-[0rem]">
          <side-icon
            :imgUrl="ig"
            title="instagram"
            url="https://instagram.com/aghadavid_"
          />
          <side-icon
            :imgUrl="wa"
            title="whatsapp"
            url="https://wa.me/6282245867898"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import mail from "@/assets/icons/mail.vue";
import ig from "@/assets/icons/ig.svg";
import wa from "@/assets/icons/wa.svg";
import Img from "@/components/Img.vue";
import sideIcon from "@/components/sideIcon.vue";
</script>
