<script setup>
import BannerSobreNos from '../components/BannerSobreNos.vue'
import TextoImagemSobreNos from '../components/TextoImagemSobNos.vue'
import NossaEquipe from '../components/NossaEquipe.vue'
</script>

<template>
  <main class="sobre-nos-container">
    <BannerSobreNos />
    <TextoImagemSobreNos />
    <NossaEquipe />
  </main>
</template>

<style scoped>
.sobre-nos-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
