<template>
  <div class="w-full" :style="{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat' 
    }">>
    <div class="max-w-screen-xl m-auto w-full ">
      <Header />
      <Navbar />
      <main class="bg-cover bg-center h-screen flex items-center justify-center">
        <div class="text-center text-light space-y-5 p-4 sm:p-8 md:p-12 lg:p-16">
          <div class="text-center">
            <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 font-merriweather font-semibold leading-tight tracking-tighter">
              TLC Insurance
            </h2>
            <div class="w-full sm:w-[400px] md:w-[500px] lg:w-[614px] h-auto mx-auto mt-8">
              <h1 class="text-sm sm:text-base md:text-lg lg:text-xl leading-tight tracking-tighter text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </h1>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  </div>
    <Policy/>
    <Footer />
    

  </template>
  
  <script>
import Navbar from '../components/Navbar.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
  import backgroundImage from '../assets/uberBG.png'
import Policy from '@/components/Policy.vue';

  export default {
    components: {
      Header,
      Navbar,
      Footer,
      Policy,
    },
    setup() {
    return { backgroundImage };
    },
  };
  </script>
  

  