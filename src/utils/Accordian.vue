<template>
    <div class="rounded-xl">
      <h2>
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 rounded-t-xl gap-3"
          @click="toggleAccordion"
          aria-expanded="isOpen"
        >
          <span class="text-2xl text-dark">{{ title }}</span>
          <svg
            class="w-3 h-3 transform transition-transform duration-300"
            :class="{ 'rotate-0': isOpen, 'rotate-180': !isOpen }"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
  
      <div class="p-5 border-t-0 transition-all duration-300" :class="{ 'block': isOpen, 'hidden': !isOpen }">
        <div v-html="content"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Accordion',
    props: {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleAccordion() {
        console.log('working');
        this.isOpen = !this.isOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles here if needed */
  </style>
  