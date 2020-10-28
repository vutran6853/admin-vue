import { createRouter, createWebHistory } from 'vue-router'
import CustomButtons from '../components/custom/CustomButtons.vue'
import Home from '../components/home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/custom/buttons',
    name: 'CustomButtons',
    component: CustomButtons
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
