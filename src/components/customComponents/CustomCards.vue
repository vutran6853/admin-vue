<template>
  <section class="container-fluid">
    <!-- Page Heading -->
    <header class="d-sm-flex align-items-center justify-content-between mb-4">
      <h3 class="h3 mb-0 text-gray-800">Cards</h3>
    </header>

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


    <div class="row">

      <div class="col-lg-6">

        <!-- Default Card Example -->
        <div class="card mb-4">
          <p class="card-header">Default Card Example</p>
          <p class="card-body">
            This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.
          </p>
        </div>

        <!-- Basic Card Example -->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Basic Card Example</h6>
          </div>
          <p class="card-body">
            The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!
          </p>
        </div>
      </div>

      <div class="col-lg-6">

        <!-- Dropdown Card Example -->
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Dropdown Card Example</h6>
            <div v-bind:class=' `dropdown no-arrow ${state.cardDropDownStatus.isToggle ? "show": "" }` ' @click='handleToggleDropDownCard'>
              <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" v-bind:aria-expanded=' `${state.cardDropDownStatus.isToggle ? "true": "false" }` '>
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div v-bind:class=' `dropdown-menu dropdown-menu-right shadow animated--fade-in ${state.cardDropDownStatus.isToggle ? "show": "" }` ' aria-labelledby="dropdownMenuLink">
                <div class="dropdown-header">Dropdown Header:</div>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>

          </div>
          <!-- Card Body -->
          <p class="card-body">
            Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.
          </p>
        </div>

        <!-- Collapsable Card Example -->
        <div class="card shadow mb-4">
          <!-- Card Header - Accordion -->
          <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
            <h6 class="m-0 font-weight-bold text-primary">Collapsable Card Example</h6>
          </a>
          <!-- Card Content - Collapse -->
          <div class="collapse show" id="collapseCardExample">
            <p class="card-body">
              This is a collapsable card example using Bootstrap's built in collapse functionality. <strong>Click on the card header</strong> to see the card body collapse and expand!
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
import { defineComponent, reactive } from 'vue'

let CustomCards = defineComponent({
  name: 'CustomCards',
  setup() {
    let state = reactive({
      cardDropDownStatus: {
        isToggle: false
      },
      hotTopicOverveiw: [
        { id: (Math.random() * 64).toPrecision(10), colorText: 'primary', text: 'Earnings (Monthly)', amount: '$40,000', fasFaIcon: 'fa-calendar' },
        { id: (Math.random() * 64).toPrecision(10), colorText: 'success', text: 'Earnings (Annual)', amount: '$215,000', fasFaIcon: 'fa-dollar-sign' },
        { id: (Math.random() * 64).toPrecision(10), colorText: 'info', text: 'Tasks', amount: '50%', fasFaIcon: 'fa-clipboard-list' },
        { id: (Math.random() * 64).toPrecision(10), colorText: 'warning', text: 'Pending Requests', amount: '18', fasFaIcon: 'fa-comments' }
      ]
    })

    function handleToggleDropDownCard() {
      state.cardDropDownStatus.isToggle = !state.cardDropDownStatus.isToggle
    }

    return {
      state,
      handleToggleDropDownCard
    }
  }
})

export default CustomCards

</script>