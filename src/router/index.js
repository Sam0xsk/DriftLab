import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue'
import Gallery from '../views/GalleryView.vue'
import Contact from '../views/ContactView.vue'
import Build from '../views/BuildView.vue'
import ThankYou from '../views/ThankyouView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/galeria', component: Gallery },
  { path: '/kontakt', component: Contact },
  { path: '/prestavba', component: Build },
  { path: '/thankyou', component: ThankYou }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
