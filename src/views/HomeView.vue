<script setup>
import BannerSection from '@/components/BannerSection.vue';
import EducacaoSection from '@/components/EducacaoSection.vue';
import ProcesoSection from '@/components/ProcesoSection.vue';
import CategoriasSection from '@/components/CategoriasSection.vue';
import FaixaSobreNos from '@/components/FaixaSobreNos.vue';

</script>

<template>
  <div>
  <div>
    
    <BannerSection />
    <EducacaoSection />
    <ProcesoSection />
    <CategoriasSection />
    <FaixaSobreNos/>
  </div>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 70px;
}
</style>
