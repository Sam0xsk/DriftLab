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

export default {
  components: { GalleryItem },
  data() {
  return {
    cars: [
      { title: 'BMW E36 (pred a po úprave)', image: '/img/car1.jpg', link: 'https://www.youtube.com/watch?v=SEcwv4IFvoc' },
      { title: 'Toyota GT86', image: '/img/car2.jpg', link: 'http://www.andyblackmoredesign.com/refreshed-toyota-86-x-fredric-aasbo/' },
      { title: 'Nissan S13 240sx', image: '/img/car3.jpg', link: 'https://www.drifted.com/6-bad-ass-240sx-s13-drift-builds-on-drifted/' },
      { title: 'Nissan 350Z', image: '/img/car4.jpg', link: 'https://stanceauto.co.uk/Nissan-350z' },
      { title: 'Lexus IS 300', image: '/img/car5.png', link: 'https://www.clublexus.com/articles/pro-drifter-ken-gushi-builds-a-lexus-is300-thats-the-ultimate-street-car/' },
      { title: 'Honda S2000', image: '/img/car6.png', link: 'https://www.reddit.com/r/NFSRides/comments/nu6kz3/honda_s2000_drift_build/' },
      { title: 'Toyota Corolla (AE86)', image: '/img/car7.jpg', link: 'https://www.pexels.com/es-es/foto/coches-gente-vehiculo-vintage-16284885/' },
      { title: 'Mazda RX-7', image: '/img/car8.jpg', link: 'https://www.pexels.com/es-es/foto/carretera-estacionado-aparcado-coche-negro-7862143/' },
      { title: 'BMW E46', image: '/img/car9.jpg', link: 'https://www.pexels.com/es-es/foto/coche-vehiculo-capucha-capo-12330344/' },
      { title: 'Mazda MX-5 Miata', image: '/img/car10.png', link: 'https://www.fastcar.co.uk/cars/mk1-mx-5-drift-car-minor-threat/' },
      { title: 'Ford Mustang', image: '/img/car11.jpg', link: 'https://www.motoroso.com/FordSEMA/Project/5637d28df2ed7/Vaughn-Gitten-Jr.-Drift-Car/5637d4c776a2c/Vaughn-Gitten-Jrs-15-Mustang-Drift-Car' },
      { title: 'Nissan Skyline R32', image: '/img/car12.jpg', link: 'https://www.peakpx.com/en/hd-wallpaper-desktop-fppzy' }
    ]
  }
}
}
</script>
