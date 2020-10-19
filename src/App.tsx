import { defineComponent, reactive } from 'vue'

const App = defineComponent({
  name: 'App',
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
        }
      }
    })

    function handleToggleSideBar() {
      state.isSidebarToggle = !state.isSidebarToggle
    }

    function handleToggleComponentsTab() {
      state.navItemsStatus.componentsTab.isToggle = !state.navItemsStatus.componentsTab.isToggle
    }

    function handleToggleUtilitiesTab() {
      state.navItemsStatus.utilitiesTab.isToggle = !state.navItemsStatus.utilitiesTab.isToggle
    }

    return {
      state,
      handleToggleSideBar,
      handleToggleComponentsTab,
      handleToggleUtilitiesTab
    }
  },
})

export default App