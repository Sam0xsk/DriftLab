import { defineStore } from 'pinia'

export default defineStore('drift', {
  state: () => ({
    customerName: ''
  }),
  actions: {
    setName(name) {
      this.customerName = name
    }
  }
})
