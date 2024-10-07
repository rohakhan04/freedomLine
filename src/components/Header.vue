<template>
    <div>
      <div class="border-b-2 border-light">
        <div class="container mx-auto py-2 px-6 flex flex-col md:flex-row md:items-end md:justify-end space-y-2 md:space-y-0 md:space-x-4">
          <div class="flex flex-col md:flex-row md:items-center md:space-x-4">
            <div class="flex items-center space-x-2">
              <svg
                class="h-6 w-6 text-light"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span class="text-light text-sm">contact@company.com</span>
            </div>
  
            <div class="flex items-center space-x-2">
              <svg
                class="h-6 w-6 text-light"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5l1.5-2.5 5 2v4a2 2 0 0 1-2 2 16 16 0 0 1-15-15 2 2 0 0 1 2-2" />
              </svg>
              <span class="text-light">(414) 687 - 5892</span>
            </div>
  
            <div class="flex items-center space-x-2">
              <svg
                class="h-6 w-6 text-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-light">794 Mcallister St, San Francisco, 94102</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
