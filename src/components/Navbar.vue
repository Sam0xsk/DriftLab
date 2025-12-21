<template>
  <nav class="menu">
    <img src="/DriftLab/img/logo.jpg" class="logo"/>

    <button class="burger-menu" @click="isOpen = !isOpen">☰</button>

    <ul class="menu-items" :class="{ active: isOpen }">
      <li><router-link to="/">Domov</router-link></li>
      <li><router-link to="/prestavba">Prestavba auta</router-link></li>
      <li><router-link to="/galeria">Galéria</router-link></li>
      <li><router-link to="/kontakt">Kontakt</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return { isOpen: false }
  }
}
</script>
