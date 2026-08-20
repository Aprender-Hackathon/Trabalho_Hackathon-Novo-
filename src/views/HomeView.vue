<script setup>
</script>

<template>

  <FiltroExplorar
    @filtro="materiaEscolhida = $event"
  />

  <div class="cards">

    <BotaoExplorar
      v-if="materiaEscolhida === 'Tudo' || materiaEscolhida === 'Matemática'"
      materia="Matemática"
    />
    <BotaoExplorar
      v-if="materiaEscolhida === 'Tudo' || materiaEscolhida === 'Artes'"
      materia="Artes"
    />
    <BotaoExplorar
      v-if="materiaEscolhida === 'Tudo' || materiaEscolhida === 'Ciências'"
      materia="Ciências"
    />
    <BotaoExplorar
      v-if="materiaEscolhida === 'Tudo' || materiaEscolhida === 'Geografia'"
      materia="Geografia"
    />
        <BotaoExplorar
      v-if="materiaEscolhida === 'Tudo' || materiaEscolhida === 'História'"
      materia="História"
    />
    <BotaoExplorar
      v-if="materiaEscolhida === 'Tudo' || materiaEscolhida === 'Língua Inglesa'"
      materia="Língua Inglesa"
    />
    <BotaoExplorar
      v-if="materiaEscolhida === 'Tudo' || materiaEscolhida === 'Língua Portuguesa'"
      materia="Língua Portuguesa"
    />

  </div>

</template>


<script setup>

import { ref } from 'vue'

import FiltroExplorar from '@/components/FiltroExplorar.vue'
import BotaoExplorar from '@/components/BotaoExplorar.vue'

const materiaEscolhida = ref('Tudo')

</script>


<style scoped>

.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 30px;
}

</style>