<template>
   <section class="max-w-screen-xl m-auto w-full ">
    <div class="bg-cover text-secondary font-merriweather  p-4 md:p-8 space-y-4">
      <div class="container mx-auto">
        <div class="flex justify-center">
          <p class="text-center text-5xl max-w-5xl font-merriweather">
            We Closely Cooperate with Selected Top Insurance Brands to Ensure Your Best Pricing and Services
          </p>
        </div>
  
        <div class="flex justify-center flex-wrap gap-4 mt-16">
          <img :src="Atic" alt="ATIC" class="h-20 w-auto" />
          <img :src="Countrywide" alt="Country-Wide" class="h-20 w-auto" />
          <img :src="KingStone" alt="Kingstone" class="h-20 w-auto" />
          <img :src="Mac" alt="Mac" class="h-20 w-auto" />
          <img :src="Progressive" alt="Progressive" class="h-20 w-auto" />
          <img :src="H" alt="Hartford" class="h-20 w-auto" />
        </div>
      </div>
    </div>
  </section>
  </template>
  
  <script>
  import Atic from '@/assets/Atic.png'; 
  import Countrywide from '@/assets/Countrywide.png';
  import KingStone from '@/assets/KingStone.png';
  import Mac from '@/assets/Mac.png';
  import Progressive from '@/assets/Progressive.png';
  import H from '@/assets/H.png';
  
  export default {
    name: 'Banner',
    data() {
      return {
        Atic,
        Countrywide,
        KingStone,
        Mac,
        Progressive,
        H,
      };
    },
  };
  </script>
  

  