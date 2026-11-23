<script setup>
import { computed } from 'vue'
import BotaoAddAtvd from '@/components/BotaoAddAtvd.vue'
import HistoricoLista from '@/components/HistoricoLista.vue'

// Lê os dados do usuário logado no localStorage
const usuarioLogado = JSON.parse(localStorage.getItem('userData') || '{}')

// Verifica se o usuário logado é professor
const isProfessor = computed(() => usuarioLogado.role === 'professor')
</script>

<template>
  <div class="pagina-historico">
    <main class="conteudo-historico">
      
      <!-- O bloco de "Adicionar Atividades" só aparece se for professor -->
      <section v-if="isProfessor" class="topo-historico">
        <div class="botao-add">
          <BotaoAddAtvd />
        </div>
        <h1>Adicionar Atividades</h1>
      </section>

      <!-- A linha divisória também só aparece para o professor -->
      <div v-if="isProfessor" class="linha-historico"></div>

      <section class="secao-historico">
        <h2>Histórico</h2>
        <HistoricoLista />
      </section>
    </main>
  </div>
</template>

<style scoped>
.conteudo-historico {
  width: 100%;
  max-width: 1380px;
  margin: 0 auto;
  padding: 35px 55px 40px;
  box-sizing: border-box;
}

/* Título em cima, botão embaixo */
.topo-historico {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;
}
.topo-historico h1 {
  order: 1;
  margin: 0;
  font-family: 'Baloo 2', sans-serif;
  font-size: 48px;
  font-weight: 800;
  line-height: 1.1;
  color: #111820;
  text-align: center;
}

.botao-add {
  order: 2;
  position: static;
  width: 170px;
  height: 170px;
  margin: 0 0 0 110px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.botao-add :deep(button),
.botao-add :deep(a) {
  cursor: pointer;
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  transform: none !important;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 28px !important;
  border-width: 5px !important;
  font-size: 95px;
  font-weight: 900;
  line-height: 1;
}
.botao-add :deep(svg),
.botao-add :deep(img) {
  width: 70px !important;
  height: 70px !important;
  stroke-width: 4;
}

.linha-historico {
  width: 100%;
  height: 1.5px;
  background-color: #e34d61;
  opacity: 0.7;
  margin-top: 60px;
  margin-bottom: 50px;
}

.secao-historico {
  width: 100%;
}
.secao-historico h2 {
  margin: 0 0 12px;
  font-family: 'Baloo 2', sans-serif;
  font-size: 38px;
  font-weight: 800;
  line-height: 1.1;
  color: #111820;
}

@media (max-width: 650px) {
  .conteudo-historico {
    padding: 25px 22px 25px;
  }
  .topo-historico {
    gap: 18px;
  }
  .botao-add {
    width: 110px;
    height: 110px;
    margin-left: 0;
  }
  .topo-historico h1 {
    font-size: 32px;
  }
  .linha-historico {
    margin-top: 40px;
    margin-bottom: 32px;
  }
  .secao-historico h2 {
    font-size: 30px;
  }
}
</style>