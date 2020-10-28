<template>
  <div class="container-fluid">

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
          <div class="card-body h-25rem">
            <ChartArea />
            <!-- <div class="chart-area">
              <canvas id="myAreaChart"></canvas>
            </div> -->
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
            <!-- <div class="chart-pie pt-4 pb-2">
              <canvas id="myPieChart"></canvas>
            </div> -->
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
                <!-- {{ `${value.text}`.toLowerCase() }} -->
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
            <p>Add some quality, svg illustrations to your project courtesy of <a target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
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

  </div>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue'
import ChartArea from '../ChartArea.vue'
import ChartPie from '../ChartPie.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ChartArea,
    ChartPie
  },
  setup() {
    const state = reactive({
      projects: [
        { id: (Math.random() * 64).toPrecision(10), text: 'Server Migration', percent: '20%', number: 20, isActive: false },
        { id: (Math.random() * 64).toPrecision(10), text: 'Sales Tracking', percent: '40%', number: 40, isActive: false },
        { id: (Math.random() * 64).toPrecision(10), text: 'Customer Database', percent: '60%', number: 60, isActive: false },
        { id: (Math.random() * 64).toPrecision(10), text: 'Payout Details', percent: '80%', number: 80, isActive: false },
        { id: (Math.random() * 64).toPrecision(10), text: 'Account Setup', percent: '100%', number: 100, isActive: false }
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
      hotTopicOverveiw: [
        { id: (Math.random() * 64).toPrecision(10), colorText: 'primary', text: 'Earnings (Monthly)', amount: '$40,000', fasFaIcon: 'fa-calendar' },
        { id: (Math.random() * 64).toPrecision(10), colorText: 'success', text: 'Earnings (Annual)', amount: '$215,000', fasFaIcon: 'fa-dollar-sign' },
        { id: (Math.random() * 64).toPrecision(10), colorText: 'info', text: 'Tasks', amount: '50%', fasFaIcon: 'fa-clipboard-list' },
        { id: (Math.random() * 64).toPrecision(10), colorText: 'warning', text: 'Pending Requests', amount: '18', fasFaIcon: 'fa-comments' }
      ],
      bgColors: [
        { id: (Math.random() * 64).toPrecision(10), text: 'bg-danger' },
        { id: (Math.random() * 64).toPrecision(10), text: 'bg-warning' },
        { id: (Math.random() * 64).toPrecision(10), text: '' },
        { id: (Math.random() * 64).toPrecision(10), text: 'bg-info' },
        { id: (Math.random() * 64).toPrecision(10), text: 'bg-success' }
      ],
    })
   

    return {
      state
    }
  }
})

</script>