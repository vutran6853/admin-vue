<template>
  <section class="container-fluid">

    <!-- Page Heading -->
    <h1 class="h3 mb-1 text-gray-800">Color Utilities</h1>
    <p class="mb-4">Bootstrap's default utility classes can be found on the official <a href="https://v5.getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank">Bootstrap Documentation</a> page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>

    <!-- Content Row -->
    <div class="row">

      <!-- First Column -->
      <div class="col-lg-4">

        <!-- Custom Text Color Utilities -->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Custom Text Color Utilities</h6>
          </div>
          <div class="card-body">
            <p v-for='(value, index) in 4' v-bind:key='value' v-bind:class=' `text-gray-${index + 1}00 p-3 bg-dark m-0` '>
              .text-gray-{{ index + 1 }}00
            </p>
            <p v-for='(value) in [5, 6, 7, 8, 9]' v-bind:key='value' v-bind:class=' `text-gray-${value}00 p-3 m-0` '>
              .text-gray-{{ value }}00
            </p>
          </div>
        </div>

        <!-- Custom Font Size Utilities -->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Custom Font Size Utilities</h6>
          </div>
          <div class="card-body">
            <p class="text-xs">.text-xs</p>
            <p class="text-lg mb-0">.text-lg</p>
          </div>
        </div>

      </div>

      <!-- Second Column -->
      <div class="col-lg-4">

        <!-- Background Gradient Utilities -->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Custom Background Gradient Utilities</h6>
          </div>
          <div class="card-body">
            <p v-for='(value) in state.colorInfo' v-bind:key='value.id' style="margin: 0;" v-bind:class=' `px-3 py-5 bg-gradient-${value.color} text-white` '>
              .bg-gradient-{{ value.color }}
            </p>
          </div>
        </div>
      </div>

      <!-- Third Column -->
      <div class="col-lg-4">

        <!-- Grayscale Utilities -->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Custom Grayscale Background Utilities</h6>
          </div>
          <div class="card-body">
            <p v-for='(value, index) in 4' v-bind:key='value' v-bind:class=' `p-3 bg-gray-${index + 1}00` ' style="margin: 0;">
              .bg-gray-{{ index + 1 }}00
            </p>
            <p v-for='(value) in [5, 6, 7, 8, 9]' v-bind:key='value' v-bind:class=' `p-3 bg-gray-${value}00 text-white` ' style="margin: 0;">
              .bg-gray-{{ value }}00
            </p>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue'

export default defineComponent({
  name: 'CustomColors',
  setup() {
    const state = reactive({
      colorInfo: [
        { id: (Math.random() * 64).toPrecision(10), color: 'primary' },
        { id: (Math.random() * 64).toPrecision(10), color: 'secondary' },
        { id: (Math.random() * 64).toPrecision(10), color: 'success' },
        { id: (Math.random() * 64).toPrecision(10), color: 'info' },
        { id: (Math.random() * 64).toPrecision(10), color: 'warning' },
        { id: (Math.random() * 64).toPrecision(10), color: 'danger' },
        { id: (Math.random() * 64).toPrecision(10), color: 'dark' }
      ]
    })

    return {
      state
    }
  }
})
</script>