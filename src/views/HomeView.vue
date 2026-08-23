<script setup>
</script>

<template>

  <FiltroExplorar
    @filtro="filtroEscolhido = $event"
  />

  <div class="cards">

   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Adição')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Análise combinatória')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Ângulos')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Área')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Divisão')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Equações do 1º grau')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Estatística')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Fatoração')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Fatoração')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Função afim')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Função exponencial')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Função quadrática')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Geometria analítica')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Geometria espacial')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Inequações')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Matemática financeira')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Multiplicação')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Números')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Polinômios')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Perímetro')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Potenciação')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Problemas matemáticos')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Produtos notáveis')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Progressão aritmética')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Progressão geométrica')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Radiciação')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Razões e proporções')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Regra de três')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Sistema monetário')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Sistemas de equações')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Sólidos geométricos')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Teorema de Pitágoras')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Tabelass e gráficos')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Triângulos')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Tempo e calendário')
  "
  materia="Matemática"
/>






   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Língua Portuguesa') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Acentuação')
  "
  materia="Língua Portuguesa"
/> 
  <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Língua Portuguesa') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Alfabetização')
  "
  materia="Língua Portuguesa"
/> 
  <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Língua Portuguesa') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Coesão e coerência')
  "
  materia="Língua Portuguesa"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Língua Portuguesa') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Concordância')
  "
  materia="Língua Portuguesa"
/>   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Língua Portuguesa') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contos e fábulas')
  "
  materia="Língua Portuguesa"
/>   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Língua Portuguesa') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Crônica')
  "
  materia="Língua Portuguesa"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Língua Portuguesa') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Frase, oração e período')
  "
  materia="Língua Portuguesa"
/>   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Língua Portuguesa') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Funções da linguagem')
  "
  materia="Língua Portuguesa"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Língua Portuguesa') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Gêneros')
  "
  materia="Língua Portuguesa"
/> 
  <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Língua Portuguesa') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Leitura e interpretação')
  "
  materia="Língua Portuguesa"
/> 
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Língua Portuguesa') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Orações subordinadas')
  "
  materia="Língua Portuguesa"
/> 
  <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Língua Portuguesa') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Orações coordenadas')
  "
  materia="Língua Portuguesa"
/> 
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Língua Portuguesa') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Pontuação')
  "
  materia="Língua Portuguesa"
/> 
  <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Língua Portuguesa') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Regência básica')
  "
  materia="Língua Portuguesa"
/> 
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Língua Portuguesa') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Semântica')
  "
  materia="Língua Portuguesa"
/> 
  <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Língua Portuguesa') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Sinônimos e antônimos')
  "
  materia="Língua Portuguesa"
/> 
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Língua Portuguesa') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Substantivo e adjetivo')
  "
  materia="Língua Portuguesa"
/> 
  <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Língua Portuguesa') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Variação linguística')
  "
  materia="Língua Portuguesa"
/>   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Língua Portuguesa') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Silabas')
  "
  materia="Língua Portuguesa"
/> 
  
  </div>

</template>


<script setup>

import { ref } from 'vue'

import FiltroExplorar from '@/components/FiltroExplorar.vue'
import BotaoExplorar from '@/components/BotaoExplorar.vue'

const filtroEscolhido = ref({
  materia: 'Tudo',
  conteudo: 'Tudo'
})

</script>


<style scoped>

.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 30px;
}

</style>