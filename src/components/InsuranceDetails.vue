<template>
  <section class="max-w-screen-xl m-auto w-full ">
    <div class="flex justify-center">
      <div class="min-h-screen flex flex-col items-center py-10">
        <div class="w-full max-w-6xl flex flex-col p-4 md:p-8 space-y-4">
  
        
          <div class="flex flex-col md:flex-row justify-between items-start rounded-lg p-8 space-y-4 md:space-y-0">
            <div class="w-full md:w-1/2 pr-3">
              <h1 class="text-secondary font-merriweather ml-2 text-custome-56 font-bold md:mt-0 md:mb-4 mb-2 leading-tight">RENEW MY POLICY</h1>
              <p class="text-bullet-text text-base leading-6 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
              <ul class="space-y-4">
                <li v-for="(item, index) in renewItems" :key="index" class="flex items-start space-x-3">
                  <div class="text-blue-500 font-bold text-xl">{{ index + 1 }}</div>
                  <div>
                    <h2 class="text-dark text-base">{{ item.title }}</h2>
                    <p class="text-bullet-text">{{ item.description }}</p>
                  </div>
                </li>
              </ul>
              <button class="mt-6 text-2xl bg-orange-500 h-[65px] w-[213px] text-white py-2 px-4 rounded-md shadow-md hover:bg-orange-600">Renew Now</button>
            </div>
  
          
            <div class="w-full md:w-1/2">
              <h1 class="text-secondary font-merriweather ml-2 text-custome-56 font-bold md:mt-0 md:mb-4 mb-2 leading-tight">I AM NEW SEND ME A QUOTE</h1>
              <p class="text-bullet-text text-base leading-6 mb-6">
                If you are new in this business here is the place you should start.
              </p>
              <ul class="space-y-4">
                <li v-for="(item, index) in newQuoteItems" :key="index" class="flex items-start space-x-3">
                  <div class="text-blue-500 font-bold text-xl">{{ index + 1 }}</div>
                  <div>
                    <h2 class="text-dark text-base">{{ item.title }}</h2>
                    <p class="text-gray-500">{{ item.description }}</p>
                  </div>
                </li>
              </ul>
              <button class="mt-6 text-2xl bg-orange-500 h-[65px] w-[213px] text-white py-2 px-4 rounded-md shadow-md hover:bg-orange-600">Get Quote</button>
            </div>
          </div>
  
        
          <div class="flex flex-col md:flex-row justify-between items-start rounded-lg p-8 space-y-4 md:space-y-0">
            <div class="w-full md:w-1/2 pr-3">
              <h1 class="text-secondary font-merriweather ml-2 text-custome-56 font-bold md:mt-0 md:mb-4 mb-2 leading-tight">TLC POLICY FINANCING</h1>
              <p class="text-bullet-text text-base leading-6 mb-6">
                Make a lower down payment and have more time to pay
              </p>
              <ul class="space-y-4">
                <li v-for="(item, index) in financingItems" :key="index" class="flex items-start space-x-3">
                  <div class="text-blue-500 font-bold text-xl">{{ index + 1 }}</div>
                  <div>
                    <h2 class="text-dark text-base">{{ item.title }}</h2>  
                    <p class="text-bullet-text">{{ item.description }}</p>
                  </div>
                </li>
              </ul>
              <button class="mt-6 text-2xl bg-orange-500 h-[65px] w-[213px] text-white py-2 px-4 rounded-md shadow-md hover:bg-orange-600">Get Quote</button>
            </div>
  
            <div class="w-full md:w-1/2">
              <h1 class="text-secondary font-merriweather ml-2 text-custome-56 font-bold md:mt-0 md:mb-4 mb-2 leading-tight">REPLACE MY COVERAGE</h1>
              <p class="text-bullet-text text-base leading-6 mb-6">
                You already have Insurance but you are not happy with it or you wonder if you could get something better, we can help!
              </p>
              <button class="mt-6 text-2xl bg-orange-500 h-[65px] w-[213px] text-white py-2 px-4 rounded-md shadow-md hover:bg-orange-600">Get Quote</button>
            </div>
          </div>
  
        </div>
      </div>
    </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        renewItems: [
          { title: "No Lines", description: "Consectetur adipiscing elit. Suspendisse varius enim in eros elementum." },
          { title: "No Visit to The Office", description: "Consectetur adipiscing elit. Suspendisse varius enim in eros elementum." },
          { title: "No confusing Paper Work", description: "Consectetur adipiscing elit. Suspendisse varius enim in eros elementum." },
        ],
        newQuoteItems: [
          { title: "Policies issued within seconds!!", description: "Consectetur adipiscing elit. Suspendisse varius enim in eros elementum." },
          { title: "Paper Work Assistance", description: "Consectetur adipiscing elit. Suspendisse varius enim in eros elementum." },
          { title: "TLC and DMV guidance and support", description: "Consectetur adipiscing elit. Suspendisse varius enim in eros elementum." },
        ],
        financingItems: [
          { title: "New TLC Insurance Financing plan", description: "Consectetur adipiscing elit. Suspendisse varius enim in eros elementum." },
          { title: "Only 15% down", description: "Consectetur adipiscing elit. Suspendisse varius enim in eros elementum." },
          { title: "Cheaper than a traditional payment plan", description: "Consectetur adipiscing elit. Suspendisse varius enim in eros elementum." },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any specific styles here */
  </style>
  