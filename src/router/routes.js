import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home/Home.vue'
import CustomButtons from '../components/customComponents/CustomButtons.vue'
import CustomCards from '../components/customComponents/CustomCards.vue'
import CustomColors from '../components/customUtilities/CustomColors.vue'
import CustomBorders from '../components/customUtilities/CustomBorders.vue'
import CustomAnimations from '../components/customUtilities/CustomAnimations.vue'
import CustomOther from '../components/customUtilities/CustomOther.vue'
import Tables from '../components/tables/Tables.vue'
import Charts from '../components/charts/Charts.vue'
import Page404 from '../components/pages/Page404.vue'
import Blank from '../components/pages/Blank.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/custom/components/buttons',
    name: 'CustomButtons',
    component: CustomButtons
  },
  {
    path: '/custom/components/cards',
    name: 'CustomCards',
    component: CustomCards
  },
  {
    path: '/custom/utilities/colors',
    name: 'CustomColors',
    component: CustomColors
  },
  {
    path: '/custom/utilities/borders',
    name: 'CustomBorders',
    component: CustomBorders
  },
  {
    path: '/custom/utilities/animations',
    name: 'CustomAnimations',
    component: CustomAnimations
  },
  {
    path: '/custom/utilities/other',
    name: 'CustomOther',
    component: CustomOther
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables
  },
  {
    path: '/charts',
    name: 'Charts',
    component: Charts
  },
  {
    path: '/blank',
    name: 'Blank',
    component: Blank
  },
  {
    path: '/404',
    name: 'Page404',
    component: Page404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
