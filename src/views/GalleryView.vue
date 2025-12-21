<template>
  <section id="galeria_id">
    <h2>Naša Galéria</h2>
    <p>Na nasledujúcich fotografiách môžete vidieť autá, na ktorých sme pracovali, aby sme ich pripravili na drifty. Pre každé auto sme vykonali rôzne prestavby, úpravy a prispôsobenia, aby boli pripravené na extrémne zážitky na trati.</p>
    <div class="gallery">
      <GalleryItem
        v-for="car in cars"
        :key="car.title"
        :image="car.image"
        :title="car.title"
        :link="car.link"
      />
    </div>
  </section>
</template>

<script>
import GalleryItem from '../components/GalleryItem.vue'

import car1 from '/img/car1.jpg'
import car2 from '/img/car2.jpg'
import car3 from '/img/car3.jpg'
import car4 from '/img/car4.jpg'
import car5 from '/img/car5.png'
import car6 from '/img/car6.png'
import car7 from '/img/car7.jpg'
import car8 from '/img/car8.jpg'
import car9 from '/img/car9.jpg'
import car10 from '/img/car10.png'
import car11 from '/img/car11.jpg'
import car12 from '/img/car12.jpg'

export default {
  components: { GalleryItem },
  data() {
    return {
      cars: [
        { title: 'BMW E36 (pred a po úprave)', image: car1, link: 'https://www.youtube.com/watch?v=SEcwv4IFvoc' },
        { title: 'Toyota GT86', image: car2, link: 'http://www.andyblackmoredesign.com/refreshed-toyota-86-x-fredric-aasbo/' },
        { title: 'Nissan S13 240sx', image: car3, link: 'https://www.drifted.com/6-bad-ass-240sx-s13-drift-builds-on-drifted/' },
        { title: 'Nissan 350Z', image: car4, link: 'https://stanceauto.co.uk/Nissan-350z' },
        { title: 'Lexus IS 300', image: car5, link: 'https://www.clublexus.com/articles/pro-drifter-ken-gushi-builds-a-lexus-is300-thats-the-ultimate-street-car/' },
        { title: 'Honda S2000', image: car6, link: 'https://www.reddit.com/r/NFSRides/comments/nu6kz3/honda_s2000_drift_build/' },
        { title: 'Toyota Corolla (AE86)', image: car7, link: 'https://www.pexels.com/es-es/foto/coches-gente-vehiculo-vintage-16284885/' },
        { title: 'Mazda RX-7', image: car8, link: 'https://www.pexels.com/es-es/foto/carretera-estacionado-aparcado-coche-negro-7862143/' },
        { title: 'BMW E46', image: car9, link: 'https://www.pexels.com/es-es/foto/coche-vehiculo-capucha-capo-12330344/' },
        { title: 'Mazda MX-5 Miata', image: car10, link: 'https://www.fastcar.co.uk/cars/mk1-mx-5-drift-car-minor-threat/' },
        { title: 'Ford Mustang', image: car11, link: 'https://www.motoroso.com/FordSEMA/Project/5637d28df2ed7/Vaughn-Gitten-Jr.-Drift-Car/5637d4c776a2c/Vaughn-Gitten-Jrs-15-Mustang-Drift-Car' },
        { title: 'Nissan Skyline R32', image: car12, link: 'https://www.peakpx.com/en/hd-wallpaper-desktop-fppzy' }
      ]
    }
  }
}
</script>
