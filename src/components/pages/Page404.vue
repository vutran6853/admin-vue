<template>
  <section class="container-fluid">
    <!-- 404 Error Text -->
    <div class="text-center">
      <p class="error mx-auto" data-text="404">404</p>
      <p class="lead text-gray-800 mb-5">Page Not Found</p>
      <p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
      <RouterLink to="/">&larr; Back to Dashboard</RouterLink>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Page404'
})
</script>