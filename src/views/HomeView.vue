<script setup>
import HeroSection from '../components/HeroSection.vue'
import MissionSection from '../components/MissionSection.vue'
import ProcessSection from '../components/ProcessSection.vue'
import CategoriesSection from '../components/CategoriesSection.vue'
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<template>
  <div>
    <TheHeader/>
    <HeroSection />
    <MissionSection />
    <ProcessSection />
    <CategoriesSection />
    <TheFooter/>
  </div>
</template>
