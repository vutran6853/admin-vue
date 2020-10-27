import { defineComponent, reactive, onMounted, onUnmounted } from 'vue'
import ChartArea from './components/ChartArea.vue'
import ChartPie from './components/ChartPie.vue'

const App = defineComponent({
  name: 'App',
  components: {
    ChartArea,
    ChartPie
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
  methods: {
    handleGoToTopOfPage() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
})

export default App