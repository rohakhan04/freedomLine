<template>
    <section class="max-w-screen-xl m-auto w-full ">
      <div class="flex flex-col md:flex-row items-center justify-between gap-5 p-4 md:p-8 space-y-4 md:space-y-0">
        <div class="md:w-1/2">
          <div class="flex items-center mb-2 md:mb-4">
            <span class="bg-background w-6 h-4"></span>
            <h2 class="text-text text-base ml-2">Online Services</h2>
          </div>
  
          <h1 class="text-secondary font-merriweather ml-2 text-custome-56 font-bold mt-2 md:mt-0 mb-2 md:mb-4">
            Long Experience of All Your Needs!
          </h1>
          <h1 class="text-text font-merriweather text-base mr-8 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </h1>
          
          <!-- <button class="bg-background text-2xl text-white py-4 px-4 rounded-[8px] gap-[10px] mt-11">
            Learn More About TLC Services
          </button> -->
          
<CustomButton label=" Learn More About TLC Services" size="md" />
        </div>
  
        <div class="mt-4 md:mt-6 space-y-4 md:space-y-6">
          <div class="flex items-center mb-2 md:mb-4">
            <img
              :src="businessImage2"
              alt="Business Meeting"
              class="w-1/2 h-[auto] md:h-[801px] object-cover rounded-lg"
            />
  
            <div class="flex flex-col ml-4 space-y-2 md:space-y-6">
              <img
                :src="businessImage3"
                alt="Business Meeting"
                class="w-full h-[auto] md:h-[400px] object-cover rounded-lg"
              />
              <img
                :src="businessImage4"
                alt="Business Meeting"
                class="w-full h-[auto] md:h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
import businessImage2 from '@/assets/bussinessImage2.png';
import businessImage3 from '@/assets/bussinessImage3.png'; 
import businessImage4 from '@/assets/businessImage4.png'; 
import CustomButton from '@/atoms/CustomButton.vue'; // Import CustomButton

export default {
  name: 'TlcServices',
  components: {
    CustomButton // Register CustomButton here
  },
  data() {
    return {
      businessImage2,
      businessImage3,
      businessImage4,
    };
  },
};
</script>
