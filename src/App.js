import { defineComponent, reactive, onMounted, onUnmounted } from 'vue'
import Navbar from './components/navbar/Navbar.vue'

const App = defineComponent({
  name: 'App',
  components: {
    Navbar
  },
  setup() {
    const state = reactive({
      isSidebarToggle: true,
      sidebarToggleClass: [
        {
          style: 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
        
        },
        {
          style: 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled'
        }
      ],
      navItemsStatus: {
        componentsTab: {
          isToggle: false,
          class: [
            { name: 'nav-link ' },
            { name: 'nav-link collapsed' }
          ]
        },
        utilitiesTab: {
          isToggle: false,
          class: [
            { name: 'nav-link ' },
            { name: 'nav-link collapsed' }
          ]
        },
        pagesTab: {
          isToggle: false,
          class: [
            { name: 'nav-link ' },
            { name: 'nav-link collapsed' }
          ]
        }
      },
      scrollToTopStyle: {
        isShow: false,
        show: 'display: inline;',
        hidden: 'display: none;'
      }
    })

    function handleScrollTo() {
      window.addEventListener('scroll', function () {
        if (window.scrollY >= 200) {
          state.scrollToTopStyle.isShow = true
        }
        if (window.scrollY <= 200) {
          state.scrollToTopStyle.isShow = false
        }
      })
    }


    
    function handleToggleSideBar() {
      state.isSidebarToggle = !state.isSidebarToggle
    }

    function handleToggleComponentsTab() {
      state.navItemsStatus.componentsTab.isToggle = !state.navItemsStatus.componentsTab.isToggle
      state.navItemsStatus.utilitiesTab.isToggle = false
      state.navItemsStatus.pagesTab.isToggle = false
    }

    function handleToggleUtilitiesTab() {
      state.navItemsStatus.utilitiesTab.isToggle = !state.navItemsStatus.utilitiesTab.isToggle
      state.navItemsStatus.componentsTab.isToggle = false
      state.navItemsStatus.pagesTab.isToggle = false
    }

    function handleTogglePagesTab() {
      state.navItemsStatus.pagesTab.isToggle = !state.navItemsStatus.pagesTab.isToggle
      state.navItemsStatus.componentsTab.isToggle = false
      state.navItemsStatus.utilitiesTab.isToggle = false
    }

    onMounted(function () {
      handleScrollTo()
    })

    onUnmounted(function () {
      window.removeEventListener('scroll', handleScrollTo)
    })

    return {
      state,
      handleToggleSideBar,
      handleToggleComponentsTab,
      handleToggleUtilitiesTab,
      handleTogglePagesTab
    }
  },
  methods: {
    handleGoToTopOfPage() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
})

export default App