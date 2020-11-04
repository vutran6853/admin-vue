<template>
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

    <!-- Sidebar Toggle (Topbar) -->
    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
      <i class="fa fa-bars"></i>
    </button>

    <!-- Topbar Search -->
    <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div class="input-group">
        <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">
            <i class="fas fa-search fa-sm"></i>
          </button>
        </div>
      </div>
    </form>

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">

      <!-- Nav Item - Search Dropdown (Visible Only XS) -->
      <li class="nav-item dropdown no-arrow d-sm-none">
        <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-search fa-fw"></i>
        </a>
        <!-- Dropdown - Messages -->
        <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
          <form class="form-inline mr-auto w-100 navbar-search">
            <div class="input-group">
              <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>

      <!-- Nav Item - Alerts -->
      <li v-bind:class=' `nav-item dropdown no-arrow mx-1 ${state.navItemsAlertsStatus.isToggle ? "show": "" }` '  @click='handleToggleUserAlerts'>
        <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" v-bind:aria-expanded=' `${state.navItemsAlertsStatus.isToggle ? "true": "false" }` '>
          <i class="fas fa-bell fa-fw"></i>
          <!-- Counter - Alerts -->
          <span class="badge badge-danger badge-counter">3+</span>
        </a>
        <!-- Dropdown - Alerts -->
        <div v-bind:class=' `dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in ${state.navItemsAlertsStatus.isToggle ? "show": "" }` '  aria-labelledby="messagesDropdown">
          <h6 class="dropdown-header">
            Alerts Center
          </h6>
          <a class="dropdown-item d-flex align-items-center" href="#" v-for='(value, index) in state.alertCenter' v-bind:key='value.id'>
            <div class="mr-3">
              <div v-bind:class=' `icon-circle ${value.bgColors}` '>
                <i v-bind:class=' `fas ${value.fasFaIcon} text-white` '></i>
              </div>                  
            </div>
            <div>
              <p class="small text-gray-500" style="margin: 0;">{{ value.date }}</p>
              <span v-if='index === 0' class="font-weight-bold">{{ value.title }}</span>
              <span v-else>{{ value.title }}</span>
            </div>
          </a>
          <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
        </div>
      </li>

      <!-- Nav Item - Messages -->
      <li v-bind:class=' `nav-item dropdown no-arrow mx-1 ${state.navItemsMessagesStatus.isToggle ? "show": "" }` '  @click='handleToggleUserMessage'>
        <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" v-bind:aria-expanded=' `${state.navItemsMessagesStatus.isToggle ? "true": "false" }` '>
          <i class="fas fa-envelope fa-fw"></i>
          <!-- Counter - Messages -->
          <span class="badge badge-danger badge-counter">7</span>
        </a>
        <!-- Dropdown - Messages -->
        <div v-bind:class=' `dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in ${state.navItemsMessagesStatus.isToggle ? "show": "" }` '  aria-labelledby="messagesDropdown">
          <h6 class="dropdown-header">Message Center</h6>
          <a class="dropdown-item d-flex align-items-center" href="#" v-for='(value, index) in state.messages' v-bind:key='value.id'>
            <div class="dropdown-list-image mr-3">
                <img class="rounded-circle" v-bind:src='value.imgUrl' v-bind:alt='value.imgUrl'>
                <p v-bind:class=' `status-indicator ${value.bgColors}` '></p>
            </div>

            <div class="font-weight-bold" v-if='index === 0'>
              <div class="text-truncate">{{ value.message }}</div>
              <div class="small text-gray-500">{{ value.fromWho }}</div>
            </div>

            <div v-else>
              <div class="text-truncate">{{ value.message }}</div>
              <div class="small text-gray-500">{{ value.fromWho }}</div>
            </div>
          </a>
          <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
        </div>
      </li>

      <div class="topbar-divider d-none d-sm-block"></div>

      <!-- Nav Item - User Information -->
      <li v-bind:class=' `nav-item dropdown no-arrow ${state.navItemsUserStatus.isToggle ? "show": "" }` ' v-on:click='handleToggleUserProfile'>
        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" v-bind:aria-expanded=' state.navItemsUserStatus.isToggle ? "true": "false" '>
          <span class="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
          <img class="img-profile rounded-circle" style="height: 2rem; width: 2rem" src="https://source.unsplash.com/QAB-WJcbgJk/60x60">
        </a>

        <!-- Dropdown - User Information -->
        <div v-bind:class=' `dropdown-menu dropdown-menu-right shadow animated--grow-in ${state.navItemsUserStatus.isToggle ? "show": "" }` ' aria-labelledby="userDropdown">
          <a class="dropdown-item" href="#" v-for='(value) in state.userInformation' v-bind:key='value.id'>
            <i v-bind:class=' `fas ${ value.fasFaIcon } fa-sm fa-fw mr-2 text-gray-400` '></i>
            {{ value.text }}
          </a>

          <div class="dropdown-divider"></div>
          <a class="dropdown-item" data-toggle="modal" data-target="#logoutModal" v-on:click='handleShowLogoutModal'>
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </a>
        </div>
      </li>
    </ul>

      <!-- Logout Modal-->
  <div v-bind:class=' `modal fade ${state.logoutModal.isShow ? "show" : "" }` ' v-bind:style=' `${state.logoutModal.isShow ? "display: block; padding-right: 17px;" : "display: none;" }` ' id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal" v-on:click='handleShowLogoutModal'>Cancel</button>
          <a class="btn btn-primary" href="login.html">Logout</a>
        </div>
      </div>
    </div>
  </div>
  </nav>
</template>

<script>
import { defineComponent, reactive } from 'vue'

let Navbar = defineComponent({
  name: 'Navbar',
  setup() {
    let state = reactive({
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
      userInformation: [
        { id: (Math.random() * 64).toPrecision(10), text: 'Profile', fasFaIcon: 'fa-user' },
        { id: (Math.random() * 64).toPrecision(10), text: 'Settings', fasFaIcon: 'fa-cogs' },
        { id: (Math.random() * 64).toPrecision(10), text: 'Activity Log', fasFaIcon: 'fa-list' }
      ],
      logoutModal: {
        isShow: false
      }
    })

   
    function handleShowLogoutModal() {
      state.logoutModal.isShow = !state.logoutModal.isShow
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

    function handleToggleUserAlerts() {
      state.navItemsAlertsStatus.isToggle = !state.navItemsAlertsStatus.isToggle
      state.navItemsMessagesStatus.isToggle = false
      state.navItemsUserStatus.isToggle = false
    }

    function handleShowLogoutModal() {
      state.logoutModal.isShow = !state.logoutModal.isShow
    }

    return {
      state,
      handleShowLogoutModal,
      handleToggleUserProfile,
      handleToggleUserMessage,
      handleToggleUserAlerts,
      handleShowLogoutModal
    }
  }
})

export default Navbar

</script>