<script setup>
import BotaoAddAtvd from '@/components/BotaoAddAtvd.vue'
import HistoricoLista from '@/components/HistoricoLista.vue'
</script>
<template>
  <div class="pagina-historico">
    <main class="conteudo-historico">
      <section class="topo-historico">
        <div class="botao-add">
          <BotaoAddAtvd />
        </div>
        <h1>Adicionar Atividades</h1>
      </section>
      <div class="linha-historico"></div>
      <section class="secao-historico">
        <h2>Histórico</h2>
        <HistoricoLista />
      </section>
    </main>
  </div>
</template>
<style scoped>
.pagina-historico {
  width: 100%;
  min-height: 100vh;
  background-color: var(--cream);
  display: flex;
  flex-direction: column;
}
.conteudo-historico {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 55px 70px 80px;
}
.topo-historico {
  width: 100%;
  min-height: 110px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.botao-add {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.botao-add :deep(.botao) {
  width: 60px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
}
.topo-historico h1 {
  margin: 0;
  font-family: 'Baloo 2', sans-serif;
  font-size: 40px;
  font-weight: 800;
  line-height: 1.1;
  color: var(--ink);
  text-align: center;
}
.linha-historico {
  width: 100%;
  height: 2px;
  background-color: var(--coral);
  margin-bottom: 25px;
}
.secao-historico {
  width: 100%;
}
.secao-historico h2 {
  margin: 0 0 25px;
  font-family: 'Baloo 2', sans-serif;
  font-size: 25px;
  font-weight: 800;
  color: var(--ink);
}
@media (max-width: 600px) {
  .conteudo-historico {
    padding: 35px 22px 55px;
  }
  .topo-historico {
    min-height: auto;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .botao-add {
    position: static;
  }
  .topo-historico h1 {
    font-size: 30px;
  }
  .linha-historico {
    margin-top: 25px;
    margin-bottom: 22px;
  }
  .secao-historico h2 {
    font-size: 22px;
    margin-bottom: 20px;
  }
}
</style>
