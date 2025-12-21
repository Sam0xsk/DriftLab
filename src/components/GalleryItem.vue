<template>
  <div class="gallery-item">
    <a :href="link" target="_blank">
      <img :src="image" />
    </a>
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: ['image', 'title', 'link']
}
</script>
