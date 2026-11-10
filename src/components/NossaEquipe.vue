<template>
  <div class="wrapper-equipe">
    <div class="secao-equipe">
      <div class="titulo">
        <h1>Conheça<br>nossa<br>Equipe!</h1>
      </div>

      <div
        class="card"
        v-for="pessoa in equipe"
        :key="pessoa.nome"
        :style="{ gridColumn: pessoa.coluna, gridRow: pessoa.linha }"
      >
        <div
          class="foto"
          :style="{ backgroundImage: 'url(' + pessoa.foto + ')' }"
        >
        </div>

        <p class="nome">{{ pessoa.nome }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import alana from '@/assets/alana.png'
import anna from '@/assets/anna.png'
import beatriz from '@/assets/beatriz.png'
import eduarda from '@/assets/eduarda.png'
import larissa from '@/assets/larissa.png'
import paola from '@/assets/paola.png'

const equipe = [
  { nome: "Alana", foto: alana, coluna: 3, linha: 1 },
  { nome: "Anna", foto: anna, coluna: 4, linha: 1 },
  { nome: "Beatriz", foto: beatriz, coluna: 1, linha: 2 },
  { nome: "Eduarda", foto: eduarda, coluna: 2, linha: 2 },
  { nome: "Larissa", foto: larissa, coluna: 3, linha: 2 },
  { nome: "Paola", foto: paola, coluna: 4, linha: 2 }
]
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper-equipe {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background-color: #d8f3dc;
  padding: 60px 0;
}
.secao-equipe {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;

  column-gap: 20px;
  row-gap: 28px;

  align-items: start;

  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.titulo {
  grid-column: 1 / 3;
  grid-row: 1;
  align-self: center;
}

.titulo h1 {
  font-size: 2.8rem;
  line-height: 1.1;
  color: #1e4a4a;
  font-weight: 800;
}

.card {
  background: #ffffff;
  padding: 10px 10px 18px 10px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  text-align: center;
  border-radius: 8px;
}

.card .foto {
  width: 100%;
  aspect-ratio: 3 / 4;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  border-radius: 4px;
}

.card .nome {
  margin-top: 10px;
  font-family: 'Segoe Print', 'Comic Sans MS', cursive;
  font-size: 1.15rem;
  color: #333;
}
</style>
