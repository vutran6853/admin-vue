<template>
  <div id="page-top" v-bind:class='state.isSidebarToggle ? "sidebar-toggled" : "" ' class="modal-open">
    
    <!-- Page Wrapper -->
    <div id="wrapper">

      <!-- Sidebar -->
      <ul v-bind:class='[state.isSidebarToggle ? state.sidebarToggleClass[0].style : state.sidebarToggleClass[1].style, state.outerWidth < 768 ? "toggled": ""] ' id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <RouterLink to="/main" class="sidebar-brand">
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </RouterLink>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
          <RouterLink to="/main" class="nav-link">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </RouterLink>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Heading -->
        <header class="sidebar-heading">Interface</header>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
          <a v-bind:class='state.navItemsStatus.componentsTab.isToggle ?  state.navItemsStatus.componentsTab.class[0].name : state.navItemsStatus.componentsTab.class[1].name ' href="#" data-toggle="collapse" @click='handleToggleComponentsTab' data-target="#collapseTwo" v-bind:aria-expanded=' state.navItemsStatus.componentsTab.isToggle ? "true": "false" ' aria-controls="collapseTwo">
            <i class="fas fa-fw fa-cog"></i>
            <span>Components</span>
          </a>
          <div id="collapseTwo" v-bind:class=' `collapse ${state.navItemsStatus.componentsTab.isToggle ? "show": "" }` ' aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded d-flex flex-column m-2">
              <h6 class="collapse-header text-black-50 text-center">Custom Components:</h6>
              <RouterLink to="/main/custom/components/buttons" class="collapse-item ml-4">Buttons</RouterLink>
              <RouterLink to="/main/custom/components/cards" class="collapse-item ml-4">Cards</RouterLink>
            </div>
          </div>
        </li>

        <!-- Nav Item - Utilities Collapse Menu -->
        <li class="nav-item">
          <a v-bind:class='state.navItemsStatus.utilitiesTab.isToggle ?  state.navItemsStatus.utilitiesTab.class[0].name : state.navItemsStatus.utilitiesTab.class[1].name ' href="#" data-toggle="collapse" @click='handleToggleUtilitiesTab' data-target="#collapseTwo" v-bind:aria-expanded=' state.navItemsStatus.utilitiesTab.isToggle ? "true": "false" ' aria-controls="collapseTwo">
            <i class="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
          </a>
          <div id="collapseTwo" v-bind:class=' `collapse ${state.navItemsStatus.utilitiesTab.isToggle ? "show": "" }` ' aria-labelledby="headingTwo" data-parent="#accordionSidebar">

            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Custom Utilities:</h6>
              <RouterLink to="/main/custom/utilities/colors" class="collapse-item">Colors</RouterLink>
              <RouterLink to="/main/custom/utilities/borders" class="collapse-item">Borders</RouterLink>
              <RouterLink to="/main/custom/utilities/animations" class="collapse-item">Animations</RouterLink>
              <RouterLink to="/main/custom/utilities/other" class="collapse-item">Other</RouterLink>
            </div>
          </div>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Heading -->
        <header class="sidebar-heading">Addons</header>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
          <a v-bind:class='state.navItemsStatus.pagesTab.isToggle ?  state.navItemsStatus.pagesTab.class[0].name : state.navItemsStatus.pagesTab.class[1].name ' href="#" data-toggle="collapse" @click='handleTogglePagesTab' data-target="#collapseTwo" v-bind:aria-expanded=' state.navItemsStatus.pagesTab.isToggle ? "true": "false" ' aria-controls="collapseTwo">
            <i class="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div id="collapseTwo" v-bind:class=' `collapse ${state.navItemsStatus.pagesTab.isToggle ? "show": "" }` ' aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Login Screens:</h6>
              <RouterLink to="/login" class="collapse-item">Login</RouterLink>
              <RouterLink to="/register" class="collapse-item">Register</RouterLink>
              <RouterLink to="/forgotPassword" class="collapse-item">Forgot Password</RouterLink>
              <div class="collapse-divider"></div>
              <h6 class="collapse-header">Other Pages:</h6>
              <RouterLink to="/main/404" class="collapse-item">404 Page</RouterLink>
              <RouterLink to="/main/blank" class="collapse-item">Blank Page</RouterLink>
            </div>
          </div>
        </li>

        <!-- Nav Item - Charts -->
        <li class="nav-item">
          <RouterLink to="/main" class="nav-link">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </RouterLink>
        </li>

        <!-- Nav Item - Tables -->
        <li class="nav-item">
          <RouterLink to="/main" class="nav-link">
            <i class="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </RouterLink>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block">

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle" @click='handleToggleSideBar'></button>
        </div>

      </ul>
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">

        <!-- Main Content -->
        <div id="content">
          <Navbar />
          <RouterView />
        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; Your Website {{ new Date().getFullYear() }}</span>
            </div>
          </div>
        </footer>
        <!-- End of Footer -->

      </div>
      <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" v-bind:style='state.scrollToTopStyle.isShow ? state.scrollToTopStyle.show: state.scrollToTopStyle.hidden ' v-on:click='handleGoToTopOfPage'>
      <i class="fas fa-angle-up"></i>
    </a>


  </div>
</template>

<script>
import { defineComponent, reactive, onMounted, onUnmounted } from 'vue'
// import ChartArea from '../ChartArea.vue'
// import ChartPie from '../ChartPie.vue'
import Navbar from '../navbar/Navbar.vue'

let Main = defineComponent({
  name: 'MainHome',
  components: {
    // ChartArea,
    // ChartPie,
    Navbar
  },
  methods: {
    handleGoToTopOfPage() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  computed: {
    newHeight() {
    //   let newHeight = null
    //   if (window.outerHeight !== this.state.outerWidth) {
    //     newHeighth = window.outerHeight
    //   }
    //   return newHeight
    }
  },
  setup() {
    let state = reactive({
      isSidebarToggle: true,
      sidebarToggleClass: [
        {
          style: 'navbar-nav bg-primary bg-gradient sidebar sidebar-dark accordion'
        
        },
        {
          style: 'navbar-nav bg-primary bg-gradient sidebar sidebar-dark accordion toggled'
        }
        // {
        //   style: 'navbar-nav bg-primary text-white sidebar sidebar-dark accordion'
        
        // },
        // {
        //   style: 'navbar-nav bg-primary text-white sidebar sidebar-dark accordion toggled'
        // }
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
      navItemsUserStatus: {
        isToggle: false
      },
      navItemsMessagesStatus: {
        isToggle: false
      },
      navItemsAlertsStatus: {
        isToggle: false
      },
      messages: [
        { id: (Math.random() * 64).toPrecision(10), message: 'Hi there! I am wondering if you can help me with a problem I"ve been having.', fromWho: 'Emily Fowler · 58m', imgUrl: 'https://source.unsplash.com/fn_BT9fwg_E/60x60', bgColors: 'bg-success' },
        { id: (Math.random() * 64).toPrecision(10), message: 'I have the photos that you ordered last month, how would you like them sent to you?', fromWho: 'Jae Chun · 1d', imgUrl: 'https://source.unsplash.com/AU4VPcFN4LE/60x60', bgColors: '' },
        { id: (Math.random() * 64).toPrecision(10), message: 'Last month"s report looks great, I am very happy with the progress so far, keep up the good work!', fromWho: 'Morgan Alvarez · 2d', imgUrl: 'https://source.unsplash.com/CS2uCrpNzJY/60x60', bgColors: 'bg-warning' },
        { id: (Math.random() * 64).toPrecision(10), message: 'Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren"t good...', fromWho: 'Chicken the Dog · 2w', imgUrl: 'https://source.unsplash.com/Mv9hjnEUHR4/60x60', bgColors: 'bg-success' }
      ],
      alertCenter: [
        { id: (Math.random() * 64).toPrecision(10), date: 'December 12, 2019', title: 'A new monthly report is ready to download!', bgColors: 'bg-primary', fasFaIcon: 'fa-file-alt' },
        { id: (Math.random() * 64).toPrecision(10), date: 'December 7, 2019', title: '$290.29 has been deposited into your account!', bgColors: 'bg-success', fasFaIcon: 'fa-donate' },
        { id: (Math.random() * 64).toPrecision(10), date: 'December 2, 2019', title: 'Spending Alert: We"ve noticed unusually high spending for your account.', bgColors: 'bg-warning', fasFaIcon: 'fa-exclamation-triangle' }
      ],
      projects: [
        { id: (Math.random() * 64).toPrecision(10), text: 'Server Migration', percent: '20%', number: 20, isActive: false },
        { id: (Math.random() * 64).toPrecision(10), text: 'Sales Tracking', percent: '40%', number: 40, isActive: false },
        { id: (Math.random() * 64).toPrecision(10), text: 'Customer Database', percent: '60%', number: 60, isActive: false },
        { id: (Math.random() * 64).toPrecision(10), text: 'Payout Details', percent: '80%', number: 80, isActive: false },
        { id: (Math.random() * 64).toPrecision(10), text: 'Account Setup', percent: '100%', number: 100, isActive: false }
      ],
      bgColors: [
        { id: (Math.random() * 64).toPrecision(10), text: 'bg-danger' },
        { id: (Math.random() * 64).toPrecision(10), text: 'bg-warning' },
        { id: (Math.random() * 64).toPrecision(10), text: '' },
        { id: (Math.random() * 64).toPrecision(10), text: 'bg-info' },
        { id: (Math.random() * 64).toPrecision(10), text: 'bg-success' }
      ],
      colorWall: [
        { id: (Math.random() * 64).toPrecision(10), text: 'Primary', hexCode: '#4e73df' },
        { id: (Math.random() * 64).toPrecision(10), text: 'Success', hexCode: '#1cc88a' },
        { id: (Math.random() * 64).toPrecision(10), text: 'Info', hexCode: '#36b9cc' },
        { id: (Math.random() * 64).toPrecision(10), text: 'Warning', hexCode: '#f6c23e' },
        { id: (Math.random() * 64).toPrecision(10), text: 'Danger', hexCode: '#e74a3b' },
        { id: (Math.random() * 64).toPrecision(10), text: 'Secondary', hexCode: '#858796' },
        { id: (Math.random() * 64).toPrecision(10), text: 'Light', hexCode: '#f8f9fc' },
        { id: (Math.random() * 64).toPrecision(10), text: 'Dark', hexCode: '#5a5c69' }
      ],
      chartKeys: [
        { id: (Math.random() * 64).toPrecision(10), text: 'Direct', textColor: 'text-primary' },
        { id: (Math.random() * 64).toPrecision(10), text: 'Social', textColor: 'text-success' },
        { id: (Math.random() * 64).toPrecision(10), text: 'Referral', textColor: 'text-primary' }
      ],
      userInformation: [
        { id: (Math.random() * 64).toPrecision(10), text: 'Profile', fasFaIcon: 'fa-user' },
        { id: (Math.random() * 64).toPrecision(10), text: 'Settings', fasFaIcon: 'fa-cogs' },
        { id: (Math.random() * 64).toPrecision(10), text: 'Activity Log', fasFaIcon: 'fa-list' }
      ],
      hotTopicOverveiw: [
        { id: (Math.random() * 64).toPrecision(10), colorText: 'primary', text: 'Earnings (Monthly)', amount: '$40,000', fasFaIcon: 'fa-calendar' },
        { id: (Math.random() * 64).toPrecision(10), colorText: 'success', text: 'Earnings (Annual)', amount: '$215,000', fasFaIcon: 'fa-dollar-sign' },
        { id: (Math.random() * 64).toPrecision(10), colorText: 'info', text: 'Tasks', amount: '50%', fasFaIcon: 'fa-clipboard-list' },
        { id: (Math.random() * 64).toPrecision(10), colorText: 'warning', text: 'Pending Requests', amount: '18', fasFaIcon: 'fa-comments' }
      ],
      scrollToTopStyle: {
        isShow: false,
        show: 'display: inline;',
        hidden: 'display: none;'
      },
      logoutModal: {
        isShow: false,
        // class: {
        //   show: ''
        // }
      },
      outerWidth: window.outerWidth
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


    function handleResize() {
      window.addEventListener('resize', function () {
        if (window.outerWidth!== state.outerWidth) {
          state.outerWidth= window.outerWidth
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

    function handleToggleUserProfile() {
      state.navItemsUserStatus.isToggle = !state.navItemsUserStatus.isToggle
      state.navItemsAlertsStatus.isToggle = false
      state.navItemsMessagesStatus.isToggle = false
    }

    function handleToggleUserMessage() {
      state.navItemsMessagesStatus.isToggle = !state.navItemsMessagesStatus.isToggle
      state.navItemsAlertsStatus.isToggle = false
      state.navItemsUserStatus.isToggle = false
    }

    function handleShowLogoutModal() {
      state.logoutModal.isShow = !state.logoutModal.isShow
    }

    function handleToggleUserAlerts() {
      state.navItemsAlertsStatus.isToggle = !state.navItemsAlertsStatus.isToggle
      state.navItemsMessagesStatus.isToggle = false
      state.navItemsUserStatus.isToggle = false
    }

    onMounted(function () {
      handleScrollTo()
      handleResize()
    })

    onUnmounted(function () {
      window.removeEventListener('scroll', handleScrollTo)
    })

    return {
      state,
      handleToggleSideBar,
      handleToggleComponentsTab,
      handleToggleUtilitiesTab,
      handleTogglePagesTab,
      handleToggleUserProfile,
      handleToggleUserMessage,
      handleToggleUserAlerts,
      handleShowLogoutModal
    }
  }
})

export default Main

// <style src="../../vendors/css/sb-admin-2.css"></style>

</script>

<style src="../../vendors/css/bootstrap.css"></style>

<style src="../../vendors/fontawesome-free/css/all.min.css"></style>

<style>
.h-25rem {
  height: 25rem;
}

#wrapper {
  display: flex;
}

#wrapper > #content-wrapper {
  background-color: #f8f9fc;
  width: 100%;
  overflow-x: hidden;
}

#wrapper > #content-wrapper > #content {
  flex: 1 0 auto;
}
/* .modal {
  opacity: 70%;
  background-color: rgb(0, 0, 0);
} */


.sidebar {
  width: 6.5rem;
  min-height: 100vh;
}

#accordionSidebar, #accordionSidebar > li > a:nth-child(1) {
  color: #fff;
}

#accordionSidebar >* a {
  text-decoration: none;
}

#accordionSidebar >* a:hover {
  background-color: rgba(255, 255, 255, 0.25);
}

.sidebar-dark > .sidebar-brand {
  color: #fff;
  text-decoration: none;
  justify-content: center;
  display: flex;
  flex-direction: row;
  height: 4.375rem;
  font-weight: 700;
  padding: 1.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: .05rem;
}

.sidebar.toggled {
  width: 0rem;
  overflow: hidden;
}

.rotate-n-15 {
  transform: rotate(-15deg);
}

@media (min-width: 768px) {
  .sidebar {
    width: 16rem;
  }

  .sidebar > .nav-item > .nav-link > i {
    font-size: .85rem;
    margin-right: 1rem;
  }

  .sidebar > .nav-item > .nav-link {
    padding: 1rem;
  }


}
</style>
