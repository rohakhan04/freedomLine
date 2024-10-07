<!-- 

<template>
   <section class="max-w-screen-xl m-auto w-full ">
  <div class="flex flex-col md:flex-row items-center gap-4 justify-between p-4 md:p-8 space-y-4 md:space-y-0">
    <div class="w-full md:w-1/3">
      <div class="flex items-center">
        <span class="bg-background w-6 h-4"></span>
        <h2 class="text-text text-lg ml-2">Our Services</h2>
      </div>
      <h1 class="text-secondary font-merriweather ml-2 text-custome-56 font-bold mt-2 md:mt-0 mb-2 md:mb-4">
        What We Offer
      </h1>
      <p class="text-text font-merriweather text-base mr-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>
    </div>

    <div class="relative w-full md:w-2/3">
      <div class="">
       
        
      </div>
      <swiper
        ref="swiperRef"
        :slidesPerView="2.5"
        :spaceBetween="30"
        :freeMode="true"
        :pagination="{ clickable: true }"
        :modules="modules"
        @swiper="onSwiper"
        class="mySwiper"
      >
        <swiper-slide
          v-for="(img, index) in images"
          :key="index"
          class="relative group swiper-custom-slide"
        >
          <img
            :src="img"
            :alt="'Service ' + (index + 1)"
            class="object-cover w-full h-full"
          />
          <div
            class="absolute inset-0 bg-blue-900 bg-opacity-0 flex items-center justify-center group-hover:bg-opacity-60 transition duration-300"
          >
            <span
              class="text-orange-500 text-xl font-semibold opacity-0 group-hover:opacity-100 transition duration-300"
            >
              TLC Insurance
            </span>
          </div>
        </swiper-slide>
      </swiper>

    
      <div
        class="flex w-full px-4"
      >
        <button
          class="text-dark  swiper-prev "
        >
          <svg
            class="w-8 h-8 text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
        </button>

        <button
          class="text-dark swiper-next"
        >
          <svg
            class="w-8 h-8 text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import image1 from '@/assets/service1.png';
import image2 from '@/assets/service2.png';
import image3 from '@/assets/service3.png';
import { FreeMode, Pagination } from 'swiper/modules';

import { ref, onMounted } from 'vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const images = [image1, image2, image3];
    const swiperRef = ref(null);
    const modules = [FreeMode, Pagination];

    const onSwiper = (swiperInstance) => {
      document.querySelector('.swiper-prev').addEventListener('click', () => {
        swiperInstance.slidePrev();
      });

      document.querySelector('.swiper-next').addEventListener('click', () => {
        swiperInstance.slideNext();
      });
    };

    return { images, swiperRef, modules, onSwiper };
  },
};
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: 450px; 
  position: relative;
}


.swiper-custom-slide {
  display: flex; 
  justify-content: center;
  align-items: center; 
  height: 100%;
  width: auto;
}

img {
  width: 100%;
  height: 100%; 
  object-fit: cover;
  border-radius: 10px;
}


.swiper-scrollbar {
  display: none !important;
}


.navigation-buttons {
  position: absolute;
  top: 0; 
  left: 0;
  right: 0;
  display: flex;
  padding: 0 15px; 
  z-index: 10;
}
.swiper-prev,
.swiper-next {
  background: transparent;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}





</style> -->
<template>
  <section class="max-w-screen-xl m-auto w-full">
    <div class="flex flex-col md:flex-row items-center gap-4 justify-between p-4 md:p-8 space-y-4 md:space-y-0">
      <div class="w-full md:w-1/3">
        <div class="flex items-center">
          <span class="bg-background w-6 h-4"></span>
          <h2 class="text-text text-lg ml-2">Our Services</h2>
        </div>
        <h1 class="text-secondary font-merriweather ml-2 text-custome-56 font-bold mt-2 md:mt-0 mb-2 md:mb-4">
          What We Offer
        </h1>
        <p class="text-text font-merriweather text-base mr-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>

      <div class="relative w-full md:w-2/3">
        <div class=" top-0 left-0 right-0 z-10 flex justify-end px-4">
          <button class="text-dark swiper-prev w-7 h-12">
            <svg class="w-4 h-8 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
            </svg>
          </button>

          <button class="text-dark swiper-next">
            <svg class="w-4 h-8 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        </div>

        <swiper
          ref="swiperRef"
          :slidesPerView="2.5"
          :spaceBetween="30"
          :freeMode="true"
          :pagination="{ clickable: true }"
          :modules="modules"
          @swiper="onSwiper"
          class="mySwiper"
        >
          <swiper-slide v-for="(img, index) in images" :key="index" class="relative group swiper-custom-slide">
            <img :src="img" :alt="'Service ' + (index + 1)" class="object-cover w-full h-full" />
            <div class="absolute inset-0 bg-blue-900 bg-opacity-0 flex items-center justify-center group-hover:bg-opacity-60 transition duration-300">
              <span class="text-orange-500 text-xl font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                TLC Insurance
              </span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import image1 from '@/assets/service1.png';
import image2 from '@/assets/service2.png';
import image3 from '@/assets/service3.png';
import { FreeMode, Pagination } from 'swiper/modules';

import { ref, onMounted } from 'vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const images = [image1, image2, image3];
    const swiperRef = ref(null);
    const modules = [FreeMode, Pagination];

    const onSwiper = (swiperInstance) => {
      document.querySelector('.swiper-prev').addEventListener('click', () => {
        swiperInstance.slidePrev();
      });

      document.querySelector('.swiper-next').addEventListener('click', () => {
        swiperInstance.slideNext();
      });
    };

    return { images, swiperRef, modules, onSwiper };
  },
};
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: 450px; 
  position: relative;
}

.swiper-custom-slide {
  display: flex; 
  justify-content: center;
  align-items: center; 
  height: 100%;
  width: auto;
}

img {
  width: 100%;
  height: 100%; 
  object-fit: cover;
 
}

/* Hide the scrollbar */
.swiper-scrollbar {
  display: none !important;
}

.navigation-buttons {
  width: 20px;
  position: absolute;
  top: 10px; /* Adjust this value as needed */
  left: 0;
  right: 30;
  display: flex;
  z-index: 10; /* Keep it above the swiper */
}

/* Styles for navigation buttons */
.swiper-prev,
.swiper-next {
  background: transparent;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>

