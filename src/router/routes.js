import { createRouter, createWebHistory } from 'vue-router'
import CustomButtons from '../components/customComponents/CustomButtons.vue'
import CustomCards from '../components/customComponents/CustomCards.vue'
import CustomColors from '../components/customUtilities/CustomColors.vue'
import CustomBorders from '../components/customUtilities/CustomBorders.vue'
import CustomAnimations from '../components/customUtilities/CustomAnimations.vue'
import CustomOther from '../components/customUtilities/CustomOther.vue'
import Tables from '../components/tables/Tables.vue'
// import Charts from '../components/charts/Charts.vue'
import Page404 from '../components/pages/Page404.vue'
import Blank from '../components/pages/Blank.vue'
import Login from '../components/pages/Login.vue'
import Register from '../components/pages/Register.vue'
import ForgotPassword from '../components/pages/ForgotPassword.vue'
import MainHome from '../components/mainContent/MainHome.vue'
import MainContent from '../components/mainContent/MainContent.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'App',
  //   component: App
  // },
  {
    path: '/main',
    name: 'Main',
    component: MainHome,
    children: [
      {
        path: '/main',
        name: 'Main',
        component: MainContent,
      },
      {
        path: '/main/custom/components/buttons',
        name: 'CustomButtons',
        component: CustomButtons
      },
      {
        path: '/main/custom/components/cards',
        name: 'CustomCards',
        component: CustomCards
      },
      {
        path: '/main/custom/utilities/colors',
        name: 'CustomColors',
        component: CustomColors
      },
      {
        path: '/main/custom/utilities/borders',
        name: 'CustomBorders',
        component: CustomBorders
      },
      {
        path: '/main/custom/utilities/animations',
        name: 'CustomAnimations',
        component: CustomAnimations
      },
      {
        path: '/main/custom/utilities/other',
        name: 'CustomOther',
        component: CustomOther
      },
      {
        path: '/main/blank',
        name: 'Blank',
        component: Blank
      },
      {
        path: '/main/404',
        name: 'Page404',
        component: Page404
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  // {
  //   path: '/charts',
  //   name: 'Charts',
  //   component: Charts
  // },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// init app load route to this route as base
router.beforeEach((to, from, next) => {
  console.log({to, from})
  if (to.path === '/') {
    next({ path: '/main' })
  }
  next()
})

export default router
