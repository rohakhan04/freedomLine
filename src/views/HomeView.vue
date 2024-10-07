<template>
  <div  class="w-full" 
    :style="{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat' 
    }">
    <div class="max-w-screen-xl m-auto w-full ">
    <Header/>
    <Navbar />
    <main className="bg-cover bg-center  flex items-center justify-center">
      <div class="text-center text-light space-y-5 p-4 sm:p-8 md:p-12 lg:p-16">
        <p class="font-billgates-script text-lg sm:text-xl md:text-2xl font-normal leading-tight tracking-tighter">
          Bringing you the best
        </p>
        <div class="text-center">
          <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 font-merriweather font-semibold leading-tight tracking-tighter">
            Discover True Assurance
          </h2>
          <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 font-merriweather font-semibold leading-tight tracking-tighter">
            with TLC Insurance
          </h2>
        </div>
        <!-- <button class="bg-background hover:text-dark text-light text-base sm:text-xl md:text-2xl py-2 px-4   rounded-lg">
          Get a Quote
        </button> -->
        <CustomButton label="Get a Quote" size="sm" />
        
      </div>
    </main>
  </div>
  </div>
  <Services/>
  <OnlineServices/>
  <TlcServices/>
  <Banner/>
  <Footer/>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Header from '@/components/Header.vue';
import Services from '@/components/Services.vue';
import OnlineServices from '@/components/OnlineServices.vue';
import backgroundImage from "../assets/Rectangle.png"
import TlcServices from '@/components/TlcServices.vue';
import Banner from '@/components/Banner.vue';
import Footer from '@/components/Footer.vue';
import CustomButton from '@/atoms/CustomButton.vue';



export default {
  components: {
    Header,
    Navbar,
    Services,
    OnlineServices,
    TlcServices,
    Banner,
    Footer,
    CustomButton,
  },
  setup() {
    return { backgroundImage };
  },
};
</script>

