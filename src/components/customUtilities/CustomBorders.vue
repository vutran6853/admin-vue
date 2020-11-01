<template>
  <section class="container-fluid">

    <!-- Page Heading -->
    <h3 class="h3 mb-1 text-gray-800">Border Utilities</h3>
    <p class="mb-4">Bootstrap's default utility classes can be found on the official <a href="https://v5.getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank">Bootstrap Documentation</a> page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>

    <!-- Content Row -->
    <div class="row">

      <!-- Border Left Utilities -->
      <div class="col-lg-6">
        <div v-for='(value) in state.borderUtilitiesInfo' v-bind:key='value.id' v-bind:class=' `card mb-4 py-3 border-left-${value.color}` '>
          <div class="card-body">.border-left-{{ value.color }}</div>
        </div>
      </div>

      <!-- Border Bottom Utilities -->
      <div class="col-lg-6">
        <div v-for='(value) in state.borderUtilitiesInfo' v-bind:key='value.id' v-bind:class=' `card mb-4 py-3 border-bottom-${value.color}` '>
          <div class="card-body">.border-bottom-{{ value.color }}</div>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue'

const CustomBorders = defineComponent({
  name: 'CustomBorders',
  setup() {
    const state = reactive({
      borderUtilitiesInfo: [
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

export default CustomBorders

</script>