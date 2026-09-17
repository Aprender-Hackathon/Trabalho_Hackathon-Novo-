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
.conteudo-historico {
  width: 100%;
  max-width: 1380px;
  margin: 0 auto;
  padding: 35px 55px 40px;
  box-sizing: border-box;
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
  left: 45px;
  top: 0;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.botao-add :deep(button),
.botao-add :deep(a) {
  cursor: pointer;
}
.topo-historico h1 {
  margin: 0;
  font-family: 'Baloo 2', sans-serif;
  font-size: 54px;
  font-weight: 800;
  line-height: 1.1;
  color: #111820;
  text-align: center;
}
.linha-historico {
  width: 100%;
  height: 2px;
  background-color: #e34d61;
  margin-top: 5px;
  margin-bottom: 18px;
}
.secao-historico {
  width: 100%;
}
.secao-historico h2 {
  margin: 0 0 12px;
  font-family: 'Baloo 2', sans-serif;
  font-size: 42px;
  font-weight: 800;
  line-height: 1.1;
  color: #111820;
}
.secao-historico :deep(.historico-lista) {
  width: 100%;
}
.secao-historico :deep(.nenhuma-atividade),
.secao-historico :deep(.mensagem-vazia),
.secao-historico :deep(.empty-message) {
  width: 100%;
  margin: 5px 0 0;
  padding: 0;
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 20px;
  color: #777;
}
.secao-historico :deep(.atividade) {
  width: 100%;
  margin-bottom: 20px;
}
@media (max-width: 650px) {
  .conteudo-historico {
    padding: 25px 22px 25px;
  }
  .topo-historico {
    min-height: auto;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .botao-add {
    position: static;
    width: 80px;
    height: 80px;
  }
  .topo-historico h1 {
    font-size: 36px;
    line-height: 1.05;
  }
  .linha-historico {
    margin-top: 25px;
    margin-bottom: 18px;
  }
  .secao-historico h2 {
    font-size: 32px;
    margin-bottom: 12px;
  }
  .secao-historico :deep(.nenhuma-atividade),
  .secao-historico :deep(.mensagem-vazia),
  .secao-historico :deep(.empty-message) {
    font-size: 18px;
    margin-top: 5px;
  }
}
</style>