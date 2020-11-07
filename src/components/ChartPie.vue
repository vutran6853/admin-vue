<template>
  <div class="chart-pie pt-4 pb-2">
    <canvas id="myPieChart"></canvas>
    <br/>
  </div>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue'

let ChartPie = defineComponent({
  name: 'ChartPie',
  setup() {
    let state = reactive({
      labels: ["Direct", "Referral", "Social"],
      datasets: [{
        data: [55, 30, 15],
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
        hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
        hoverBorderColor: 'rgba(234, 236, 244, 1)'
      }],
      options: {
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10
        },
        legend: {
          display: false
        },
        cutoutPercentage: 80
      }
    })

    onMounted(function () {
      let ctx = document.getElementById('myPieChart')
      let myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: state.labels,
          datasets: state.datasets
        },
        options: state.options
      })
    })

    return {
      state
    }
  }
})

export default ChartPie

</script>