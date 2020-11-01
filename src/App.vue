<template>
  <div id="page-top" v-bind:class='state.isSidebarToggle ? "sidebar-toggled" : "" ' class="modal-open">
    
  <!-- Page Wrapper -->
  <div id="wrapper" style="display: flex;">

    <!-- Sidebar -->
    <ul v-bind:class='state.isSidebarToggle ? state.sidebarToggleClass[0].style : state.sidebarToggleClass[1].style ' id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <RouterLink to="/" class="sidebar-brand d-flex align-items-center justify-content-center">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </RouterLink>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <RouterLink to="/" class="nav-link">
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
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Components:</h6>
            <RouterLink to="/custom/components/buttons" class="collapse-item">Buttons</RouterLink>
            <RouterLink to="/custom/components/cards" class="collapse-item">Cards</RouterLink>
          </div>
        </div>
      </li>

      <!-- Nav Item - Utilities Collapse Menu -->
      <li class="nav-item">
        <a v-bind:class='state.navItemsStatus.utilitiesTab.isToggle ?  state.navItemsStatus.utilitiesTab.class[0].name : state.navItemsStatus.utilitiesTab.class[1].name ' href="#" data-toggle="collapse" @click='handleToggleUtilitiesTab' data-target="#collapseTwo" v-bind:aria-expanded=' state.navItemsStatus.utilitiesTab.isToggle ? "true": "false" ' aria-controls="collapseTwo">
        <!-- <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities"> -->
          <i class="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
        </a>
        <!-- <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar"> -->
        <div id="collapseTwo" v-bind:class=' `collapse ${state.navItemsStatus.utilitiesTab.isToggle ? "show": "" }` ' aria-labelledby="headingTwo" data-parent="#accordionSidebar">

          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Utilities:</h6>
            <RouterLink to="/custom/utilities/colors" class="collapse-item">Colors</RouterLink>
            <RouterLink to="/custom/utilities/borders" class="collapse-item">Borders</RouterLink>
            <RouterLink to="/custom/utilities/animations" class="collapse-item">Animations</RouterLink>
            <RouterLink to="/custom/utilities/other" class="collapse-item">Other</RouterLink>
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
        <!-- <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages"> -->
          <i class="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </a>
        <!-- <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar"> -->
        <div id="collapseTwo" v-bind:class=' `collapse ${state.navItemsStatus.pagesTab.isToggle ? "show": "" }` ' aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Login Screens:</h6>
            <a class="collapse-item" href="login.html">Login</a>
            <a class="collapse-item" href="register.html">Register</a>
            <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
            <div class="collapse-divider"></div>
            <h6 class="collapse-header">Other Pages:</h6>
            <!-- <a class="collapse-item" href="404.html">404 Page</a> -->
            <!-- <a class="collapse-item" href="blank.html">Blank Page</a> -->
            <RouterLink to="/404" class="collapse-item">404 Page</RouterLink>
            <RouterLink to="/blank" class="collapse-item">Blank Page</RouterLink>
          </div>
        </div>
      </li>

      <!-- Nav Item - Charts -->
      <li class="nav-item">
        <RouterLink to="/" class="nav-link">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </RouterLink>
      </li>

      <!-- Nav Item - Tables -->
      <li class="nav-item">
        <RouterLink to="/" class="nav-link">
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

<script src="./App"></script>

<style src="./vendors/css/sb-admin-2.css"></style>

<style src="./vendors/fontawesome-free/css/all.min.css"></style>

<style>
.h-25rem {
  height: 25rem;
}

/* .modal {
  opacity: 70%;
  background-color: rgb(0, 0, 0);
} */
</style>
