import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InsuranceView from '@/views/InsuranceView.vue'
import UberCars from '@/views/UberCars.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/TLCInsurance',
      name: 'InsuranceView',
      component: InsuranceView
    },
    {
      path: '/UberCars',
      name: 'UberCars',
      component: UberCars
    },
   
  ]
})

export default router
