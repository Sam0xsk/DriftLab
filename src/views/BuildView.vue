<template>
  <div class="main-content prestavba">
    <section class="about">
      <h2>O prestavbe</h2>
      <p>
        Poskytujeme profesionálne služby v oblasti prestavby áut. 
        Našim cieľom je zabezpečiť, aby vaše vozidlo spĺňalo všetky technické a estetické požiadavky. 
        Prestavujeme rôzne typy áut a špecializujeme sa na individuálne potreby zákazníkov.
      </p>
    </section>

    <PricingTable
      :services="[
        { name: 'Úprava motora', price: 2000 },
        { name: 'Výmena a nastavenie podvozku', price: 1200 },
        { name: 'Špeciálne úpravy karosérie', price: 700 },
        { name: 'Montáž nového výfukového systému', price: 1000 }
      ]"
    />

    <section class="form-section">
      <h2>Formulár na prestavbu auta</h2>
      <form @submit.prevent="send">
        <div class="form-row">
          <CustomInput
            label="Meno"
            id="meno"
            v-model="meno"
            placeholder="Vaše meno"
            required
          />
          <CustomInput
            label="Priezvisko"
            id="priezvisko"
            v-model="priezvisko"
            placeholder="Vaše priezvisko"
            required
          />
        </div>

        <div class="form-row">
          <CustomInput
            label="E-mail"
            id="email"
            type="email"
            v-model="email"
            placeholder="Váš e-mail"
            required
          />
          <CustomInput
            label="Telefón"
            id="telefon"
            type="tel"
            v-model="telefon"
            placeholder="Váš telefón"
            required
          />
        </div>

        <h3>Špecifikácie auta</h3>

        <div class="form-row">
          <CustomInput
            label="Značka auta"
            id="znacka"
            v-model="znacka"
            placeholder="Značka auta"
            required
          />
          <CustomInput
            label="Model"
            id="model"
            v-model="model"
            placeholder="Model auta"
            required
          />
        </div>

        <div class="form-row">
          <CustomInput
            label="Rok výroby"
            id="rokVyroby"
            type="number"
            v-model="rokVyroby"
            placeholder="Rok výroby"
            required
          />
          <CustomInput
            label="Kód motora"
            id="kodMotora"
            v-model="kodMotora"
            placeholder="Kód motora"
            required
          />
        </div>

        <div class="form-row">
          <CustomInput
            label="Výkon v kW"
            id="vykon"
            type="number"
            v-model="vykon"
            placeholder="Výkon v kW"
            required
          />
          <div class="form-group"></div>
        </div>

        <div class="form-group">
          <label>
            <input type="checkbox" v-model="gdpr" required>
            Súhlasím so spracovaním osobných údajov
          </label>
        </div>

        <button type="submit">Odoslať</button>
      </form>
    </section>
  </div>
</template>

<script>
import useDriftStore from '../stores/driftStore'
import CustomInput from '@/components/CustomInput.vue'
import PricingTable from '@/components/PricingTable.vue'

export default {
  name: 'BuildView',
  components: { CustomInput, PricingTable },
  data() {
    return {
      meno: '',
      priezvisko: '',
      email: '',
      telefon: '',
      znacka: '',
      model: '',
      rokVyroby: '',
      kodMotora: '',
      vykon: '',
      gdpr: false
    }
  },
  methods: {
    send() {
      const store = useDriftStore()
      store.setName(this.meno + ' ' + this.priezvisko)
      this.$router.push('/thankyou')
    }
  },
  mounted() {
    document.body.classList.add('prestavba-bg')
  },
  beforeUnmount() {
    document.body.classList.remove('prestavba-bg')
  }
}
</script>
