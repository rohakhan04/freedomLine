<template>
    <button
      :class="[
        'bg-background hover:text-dark text-white mt-5  rounded-lg py-2 px-4',
        sizeClass
      ]"
    >
      {{ label }}
    </button>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      },
      size: {
        type: String,
        default: 'base', 
      }
    },
    computed: {
      sizeClass() {
        switch (this.size) {
          case 'sm':
            return 'text-base';
          case 'md':
            return 'text-xl';
          case 'lg':
            return 'text-2xl';
          default:
            return 'text-base';
        }
      }
    }
  }
  </script>
  
