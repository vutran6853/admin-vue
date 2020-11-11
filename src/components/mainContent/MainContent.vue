<template>
  <section class="container-fluid">

      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
      </div>

      <!-- Content Row -->
      <div class="row">
        <div class="col-xl-3 col-md-6 mb-4" v-for='(value) in state.hotTopicOverveiw' v-bind:key='value.id'>
          <div v-bind:class=' `card border-left-${value.colorText} shadow h-100 py-2` '>
            <div class="card-body">
              <div class="row no-gutters align-items-center">

                <div class="col mr-2" v-if=' value.text === "Tasks" '>
                  <p v-bind:class=' `text-xs font-weight-bold text-${value.colorText} text-uppercase mb-1` '>{{ value.text }}</p>
                  <div class="row no-gutters align-items-center">
                    <div class="col-auto">
                      <p class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{{ value.amount }}</p>
                    </div>
                    <div class="col">
                      <div class="progress progress-sm mr-2">
                        <div class="progress-bar bg-info" role="progressbar" v-bind:style=' `width: ${value.amount};` ' v-bind:aria-valuenow='value.amount' aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col mr-2" v-else>
                  <p v-bind:class=' `text-xs font-weight-bold text-${value.colorText} text-uppercase mb-1` '>{{ value.text }}</p>
                  <p class="h5 mb-0 font-weight-bold text-gray-800">{{ value.amount }}</p>
                </div>

                <div class="col-auto">
                  <i v-bind:class=' `fas ${value.fasFaIcon} fa-2x text-gray-300` '></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- Content Row -->

      <div class="row">

        <!-- Area Chart -->
        <div class="col-xl-8 col-lg-7">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
              <div class="dropdown no-arrow">
                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                  <div class="dropdown-header">Dropdown Header:</div>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <!-- Card Body -->
            <div class="card-body">
              <ChartArea />
            </div>
          </div>
        </div>

        <!-- Pie Chart -->
        <div class="col-xl-4 col-lg-5">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
              <div class="dropdown no-arrow">
                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                  <div class="dropdown-header">Dropdown Header:</div>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <!-- Card Body -->
            <div class="card-body">
              <ChartPie />
              <div class="mt-4 text-center small">
                <span class="mr-2" v-for='(value) in state.chartKeys' v-bind:key='value.id'>
                  <i v-bind:class=' `fas fa-circle ${value.textColor}` '></i> {{ value.text }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Row -->
      <div class="row">

        <!-- Content Column -->
        <div class="col-lg-6 mb-4">

          <!-- Project Card Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
            </div>

            <div style="padding: 0.5rem" v-for='(value, index) in state.projects' v-bind:key='value.id'>
              <h4 class="small font-weight-bold">{{ value.text }}<span class="float-right">{{ value.percent }}</span></h4>
              <div class="progress mb-4">
                <div v-bind:class=' `progress-bar ${ state.bgColors[index].text }` ' role="progressbar" v-bind:style=' `width: ${value.number}%` ' v-bind:aria-valuenow='value.number' aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>

          <!-- Color System -->
          <div class="row">
            <div class="col-lg-6 mb-4" v-for='(value, index) in state.colorWall' v-bind:key='value.id'>
              <div v-bind:class=' ["card", `bg-${value.text}`.toLowerCase(),  `${ index === 6 ? "text-black" : "text-white" }`, "shadow" ] '>
                <div class="card-body">
                  {{ `${value.text}` }}
                  <div v-bind:class=' ["small", `${ index === 6 ? "text-black-50 " : "text-white-50" }` ] '>{{ value.hexCode }}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="col-lg-6 mb-4">

          <!-- Illustrations -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
            </div>
            <div class="card-body">
              <div class="text-center">
                <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;" src="img/undraw_posting_photo.svg" alt="">
              </div>
              <p>Add some quality, svg illustrations to your project courtesy of <a target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a letantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
              <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on unDraw &rarr;</a>
            </div>
          </div>

          <!-- Approach -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
            </div>
            <div class="card-body">
              <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
              <p class="mb-0">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
            </div>
          </div>

        </div>
      </div>

    </section>
</template>

<script>
import { defineComponent, reactive, onMounted, onUnmounted } from 'vue'
import ChartArea from '../ChartArea.vue'
import ChartPie from '../ChartPie.vue'

export default defineComponent({
  name: 'MainContent',
  components: {
    ChartArea,
    ChartPie
  },
  setup() {
    let state = reactive({
      isSidebarToggle: true,
      sidebarToggleClass: [
        {
          style: 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
        
        },
        {
          style: 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled'
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
  },
})
</script>