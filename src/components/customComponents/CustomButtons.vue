<template>
  <section class="container-fluid">

    <!-- Page Heading -->
    <h3 class="h3 mb-4 text-gray-800">Buttons</h3>

    <div class="row">

      <div class="col-lg-6">

        <!-- Circle Buttons -->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Circle Buttons</h6>
          </div>
          <div class="card-body">
            <p>Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!</p>
            <!-- Circle Buttons (Default) -->
            <div class="mb-2">
              <code>.btn-circle</code>
            </div>

            <a v-for='(value) in state.circleButtonInfo' v-bind:key='value.id' v-bind:class=' `btn btn-${value.color} btn-circle m-1` ' href="#">
              <i v-bind:class=' `fab ${value.fasFaIcon}` '></i>
            </a>

            <!-- Circle Buttons (Small) -->
            <div class="mt-4 mb-2">
              <code>.btn-circle .btn-sm</code>
            </div>
            <a v-for='(value) in state.circleButtonInfo' v-bind:key='value.id' v-bind:class=' `btn btn-${value.color} btn-circle btn-sm m-1` ' href="#">
              <i v-bind:class=' `fab ${value.fasFaIcon}` '></i>
            </a>

            <!-- Circle Buttons (Large) -->
            <div class="mt-4 mb-2">
              <code>.btn-circle .btn-lg</code>
            </div>
            <a v-for='(value) in state.circleButtonInfo' v-bind:key='value.id' v-bind:class=' `btn btn-${value.color} btn-circle btn-lg m-1` ' href="#">
              <i v-bind:class=' `fab ${value.fasFaIcon}` '></i>
            </a>
          </div>
        </div>

        <!-- Brand Buttons -->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Brand Buttons</h6>
          </div>
          <div class="card-body">
            <p>Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.</p>
            <p>You can create more custom buttons by adding a new color variable in the <code>_variables.scss</code> file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the <code>_buttons.scss</code> file.</p>
            <a href="#" class="btn btn-google btn-block"><i class="fab fa-google fa-fw"></i> .btn-google</a>
            <a href="#" class="btn btn-facebook btn-block"><i class="fab fa-facebook-f fa-fw"></i> .btn-facebook</a>
          </div>
        </div>

      </div>

      <div class="col-lg-6">

        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
          </div>
          <div class="card-body">
            <p>Works with any button colors, just use the <code>.btn-icon-split</code> class and the markup in the examples below. The examples below also use the <code>.text-white-50</code> helper class on the icons for additional styling, but it is not required.</p>
            
            <div class="d-flex flex-column align-items-start">
              <a href="#" v-for='(value) in state.splitButtonsWithIcon' v-bind:key='value.id' v-bind:class=' `btn btn-${value.color}  btn-icon-split my-1` '>
                <span class="icon text-white-50">
                  <i v-bind:class='value.fasFaIcon'></i>
                </span>
                <span class="text">Split Button {{ value.text }}</span>
              </a>
            </div>

            <div class="mb-4"></div>
            <p>Also works with small and large button classes!</p>
            <div class="d-flex flex-column align-items-start">
              <a href="#" class="btn btn-primary btn-icon-split btn-sm my-1">
                <span class="icon text-white-50">
                  <i class="fas fa-flag"></i>
                </span>
                <span class="text">Split Button Small</span>
              </a>
              <a href="#" class="btn btn-primary btn-icon-split btn-lg my-1">
                <span class="icon text-white-50">
                  <i class="fas fa-flag"></i>
                </span>
                <span class="text">Split Button Large</span>
              </a>
            </div>


          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue'

export default defineComponent({
  name: 'CustomButtons',
  setup() {
    let state = reactive({
      circleButtonInfo: [
        { id: (Math.random() * 64).toPrecision(10), color: 'primary', fasFaIcon: 'fab fa-facebook-f' },
        { id: (Math.random() * 64).toPrecision(10), color: 'success', fasFaIcon: 'fas fa-check' },
        { id: (Math.random() * 64).toPrecision(10), color: 'info', fasFaIcon: 'fas fa-info-circle' },
        { id: (Math.random() * 64).toPrecision(10), color: 'warning', fasFaIcon: 'fas fa-exclamation-triangle' },
        { id: (Math.random() * 64).toPrecision(10), color: 'danger', fasFaIcon: 'fas fa-trash' }
      ],
      splitButtonsWithIcon: [
        { id: (Math.random() * 64).toPrecision(10), color: 'primary', fasFaIcon: 'fas fa-flag', text: 'Primary' },
        { id: (Math.random() * 64).toPrecision(10), color: 'success', fasFaIcon: 'fas fa-check', text: 'Success' },
        { id: (Math.random() * 64).toPrecision(10), color: 'info', fasFaIcon: 'fas fa-info-circle', text: 'Info' },
        { id: (Math.random() * 64).toPrecision(10), color: 'warning', fasFaIcon: 'fas fa-exclamation-triangle', text: 'Warning' },
        { id: (Math.random() * 64).toPrecision(10), color: 'danger', fasFaIcon: 'fas fa-trash', text: 'Danger' },
        { id: (Math.random() * 64).toPrecision(10), color: 'secondary', fasFaIcon: 'fas fa-arrow-right', text: 'Secondary' },
        { id: (Math.random() * 64).toPrecision(10), color: 'light', fasFaIcon: 'fas fa-flag', text: 'Light' } 
      ]
    })

    return {
      state
    }
  }
})
</script>