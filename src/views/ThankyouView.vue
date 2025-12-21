<template>
  <section class="thank-you">
    <div class="thank-you-message">
      <h2>Ďakujeme za vašu správu, {{ name }}!</h2>
      <p>Vaša správa bola úspešne odoslaná. Čoskoro sa vám ozveme!</p>
      <router-link to="/">Späť na domov</router-link>
    </div>
  </section>
</template>

<script>
import useDriftStore from '../stores/driftStore'

export default {
  computed: {
    name() {
      return useDriftStore().customerName
    }
  }
}
</script>