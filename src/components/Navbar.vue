<template>
    <div>
      <nav class="border-gray-200">
        <div class="mx-auto p-4 flex items-center justify-between">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img :src="logo" class="h-8 px-5" alt="Flowbite Logo" />
          </a>
  
          <button
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-navbar-text rounded-lg lg:hidden"
            aria-controls="navbar-cta"
            aria-expanded="isMenuOpen.toString()"
            @click="toggleMenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
  
          <div class="hidden lg:flex md:items-center md:space-x-8">
            <ul class="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
              <li v-for="(item, index) in menuItems" :key="index">
                <router-link
                  :to="item.link"
                  class="block text-base text-navbar-text rounded md:bg-transparent"
                >
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
            <button
              type="button"
              class="text-light bg-background focus:ring-4 focus:outline-none rounded-lg text-base px-4 py-2 ml-4"
            >
              Get started
            </button>
          </div>
        </div>
  
        <!-- Small Screen Toggle menu -->
        <div :class="['lg:hidden', isMenuOpen ? 'block' : 'hidden']" id="navbar-cta">
          <ul class="flex flex-col space-y-2 p-4">
            <li v-for="(item, index) in menuItems" :key="index">
              <router-link
                :to="item.link"
                class="block text-base text-navbar-text rounded md:bg-transparent"
              >
                {{ item.label }}
              </router-link>
            </li>
            <li>
              <button
                type="button"
                class="text-light bg-background focus:ring-4 focus:outline-none rounded-lg text-base px-4 py-2"
              >
                Get started
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import Logo from "../assets/logo.png";
 
  
  export default {
    setup() {
      const isMenuOpen = ref(false);
      const logo = Logo;
      
      const menuItems = [
        { label: 'Request a Quote', link: '/' },
        { label: 'TLC Insurance', link: '/TLCInsurance' },
        { label: 'Uber and Block Cars', link: '/UberCars' },
        { label: 'Finance your Policy', link: '#' },
        { label: 'Personal and commercial', link: '#' },
        { label: 'Payment', link: '#' },
        { label: 'Blog', link: '#' },
        { label: 'Content', link: '#' },
      ];
  
      const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
      };
  
      return { isMenuOpen, logo, menuItems, toggleMenu };
    },
  };
  </script>
 