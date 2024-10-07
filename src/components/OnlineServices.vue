<template>
 <section class="max-w-screen-xl m-auto w-full ">
    <div class="flex flex-col md:flex-row items-center gap-4 justify-between p-4 md:p-8 space-y-4 md:space-y-0 md:mt-0 mb-2 md:mb-4">

      <div class="md:w-1/2">
        <img
          :src="businessImage"
          alt="Business Meeting"
          class="w-full h-[auto] md:h-[801px] object-cover rounded-lg"
        />
      </div>
      <div class="md:w-1/2 mt-4 md:mt-0 md:ml-8">
        <div class="flex items-center mb-2 md:mb-4">
          <span class="bg-background w-6 h-4"></span>
          <h2 class="text-text text-lg ml-2">Online Services</h2>
        </div>

        <h1 class="text-secondary font-merriweather ml-2 text-custome-56 font-bold mt-2 md:mt-0 mb-2 md:mb-4">
          Multiple Options at a Click
        </h1>
        <div class="mt-4 md:mt-6 space-y-4 md:space-y-6">
          <div id="accordion-collapse" class="mt-4 md:mt-6 space-y-4 md:space-y-6">
            <Accordion
              title="Report a Claim"
              :content="`<p class='mb-2 text-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p><p class='text-text text-sm'><a href='/docs/getting-started/introduction/' class='text-link underline'>Click to fill the form</a></p>`"
            />
            <Accordion
              title="Ask a Question"
              :content="`<p class='mb-2 text-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p><p class='text-text'><a href='/docs/getting-started/introduction/' class='text-link underline'>Click to fill the form</a></p>`"
            />
            <Accordion
              title="Make Payment"
              :content="`<p class='mb-2 text-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p><p class='text-text'><a href='/docs/getting-started/introduction/' class='text-link underline'>Click to fill the form</a></p>`"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
 
<script>
import businessImage from '@/assets/OnlineService.png'; 
import Accordion  from '@/utils/Accordian.vue';


export default {
  name: 'OnlineServices',
  components: {
    Accordion,
  },
  data() {
    return {
      businessImage,
    };
  },
};
</script>