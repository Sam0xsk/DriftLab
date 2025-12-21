<template>
  <div class="pricing">
    <h2>{{ title }}</h2>
    <table class="tabulka">
      <thead>
        <tr>
          <th>Služba</th>
          <th>Cena (EUR)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in services" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PricingTable',
  props: {
    title: {
      type: String,
      default: 'Cenník služieb'
    },
    services: {
      type: Array,
      required: true
    }
  }
}
</script>