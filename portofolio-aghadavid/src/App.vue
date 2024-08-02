<template>
  <div
    class="h-[5.25rem] w-full bg-base px-[7rem] py-3 text-white flex items-center justify-between"
  >
    <h1
      class="font-bold text-[1.75rem] leading-[2.25rem] cursor-pointer hover:scale-105"
    >
      AGHA DAVID
    </h1>

    <ul class="flex gap-4 font-semibold text-[1.25rem]">
      <li class="hover:scale-105 cursor-pointer">Home</li>
      <li class="hover:scale-105 cursor-pointer">About</li>
      <li class="hover:scale-105 cursor-pointer">Contact</li>
    </ul>
    <div
      class="w-[8.5rem] text-white bg-secondary rounded-sm p-1 text-center cursor-pointer text-[1.2rem] hover:scale-105 hover:bg-red-500 shadow-sm"
    >
      Download cv
    </div>
  </div>
  <div class="w-full h-[40rem] bg-red-200 overflow-hidden relative">
    <video src="@/assets/x.mp4" autoplay loop class="object-cover"></video>
    <div
      class="w-full h-full opacity-[0.85] bg-gradient-to-t from-base via-base to-transparent absolute top-0 z-[2]"
    ></div>
    <div class="flex items-center absolute top-0 w-full h-full z-[3] px-[7rem]">
      <div class="flex flex-col gap-[2.4rem] w-[40rem]">
        <div>
          <p class="text-[3.5rem] leading-[4rem] text-white font-extrabold">
            Hi there! I'm David,
          </p>
          <p class="text-[2.4rem] leading-[3.2rem] text-white font-bold">
            a passionate Web Developer.
          </p>
        </div>
        <p class="text-white text-[1.25rem] font-semibold">
          "Welcome to my portfolio! I create modern, user-friendly web
          applications with clean design and efficient code. Let's build
          something amazing together."
        </p>
        <div>
          <div
            class="w-[8.5rem] text-baseText bg-bgT rounded-sm p-3 cursor-pointer text-[1.2rem] mt-2 hover:scale-105 hover:bg-slate-400 hover:text-white shadow-sm"
          >
            Download cv
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full h-[180rem] flex flex-col gap-[2rem] px-[8rem] pt-[5rem]">
    <div class="flex flex-col gap-[4rem]">

      <div
        class="h-[40rem] w-full shadow-sm bg-gradient-to-t from-teal-950 to-transparent border border-solid border-bgT rounded-md sticky top-[2rem] text-center text-white p-[4rem]" 
      >
        <h1 class="text-[5rem]">HELLO WORLD</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloremque, quod ea asperiores deleniti consequatur placeat temporibus fugiat modi molestias nesciunt nihil vero facilis, porro laborum aperiam odit autem corporis delectus nemo magni. Totam natus excepturi, aut harum dicta veritatis sunt quae nostrum placeat, doloribus distinctio et, laborum consectetur doloremque.</p>
      </div>
      <div
        class="h-[40rem] w-full shadow-sm bg-gradient-to-t from-teal-950 to-transparent border border-solid border-bgT rounded-md sticky top-[2rem] text-center text-white p-[4rem] flex" 
      >
        <div class="flex-1"></div>
        <div class="flex-1"></div>
       </div>





    </div>

    <div
      class="w-full h-[3rem] bg-bgSecondary border border-solid border-bgT rounded-md"
    ></div>

    <div class="flex gap-[2rem]">
      <div
        class="flex-1 h-[20rem] bg-bgSecondary border border-solid border-bgT rounded-md"
      ></div>
      <div
        class="flex-1 h-[20rem] bg-bgSecondary border border-solid border-bgT rounded-md"
      ></div>
    </div>
  </div>
</template>
