<template>
  <section id="contact">
    <h2>Kontaktujte nás</h2>
    <p>
      Ak máte akékoľvek otázky, neváhajte nás kontaktovať cez tento formulár alebo nám zavolajte na číslo 
      <strong>0949 781 376</strong>.
    </p>
    
    <form @submit.prevent="submit">
      <CustomInput
        label="Meno"
        id="first-name"
        v-model="firstName"
        placeholder="Zadajte vaše meno"
        required
      />

      <CustomInput
        label="Priezvisko"
        id="last-name"
        v-model="lastName"
        placeholder="Zadajte vaše priezvisko"
        required
      />

      <CustomInput
        label="Email"
        id="email"
        type="email"
        v-model="email"
        placeholder="Zadajte váš email"
        required
      />

      <div class="form-group">
        <label for="message">Správa</label>
        <textarea v-model="message" id="message" required placeholder="Napíšte nám správu"></textarea>
      </div>

      <button type="submit">Odoslať</button>
    </form>

    <div id="map-container">
      <h3>Naša adresa:</h3>
      <p>Pionierska 1585/9, 831 01 Bratislava, Slovensko</p>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.412196526177!2d17.113227776831714!3d48.16013644958983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8952ca070977%3A0x77850cc22140f480!2sPionierska%201585%2F9%2C%20831%2001%20Bratislava!5e0!3m2!1ssk!2ssk!4v1733336639960!5m2!1ssk!2ssk" 
        width="100%" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </section>
</template>

<script>
import useDriftStore from '../stores/driftStore'
import CustomInput from '@/components/CustomInput.vue'

export default {
  name: 'ContactView',
  components: { CustomInput },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submit() {
      const store = useDriftStore()
      store.setName(this.firstName + ' ' + this.lastName)
      this.$router.push('/thankyou')
    }
  }
}
</script>