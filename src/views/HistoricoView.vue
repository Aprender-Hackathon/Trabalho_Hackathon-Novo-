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
  font-size: 48px; /* <-- tamanho do título (era 58px) */
  font-weight: 800;
  line-height: 1.1;
  color: #111820;
  text-align: center;
}

/* Botão alinhado com a borda esquerda da miniatura do histórico */
.botao-add {
  order: 2;
  position: static;
  width: 170px;
  height: 170px;
  margin: 0 0 0 110px; /* <-- ajuste este número para alinhar com a miniatura */
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

/* Linha mais fina e rosada, com espaço em cima e embaixo */
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

/* ===== Card do histórico (nomes de classe prováveis) ===== */
.secao-historico :deep(.atividade img),
.secao-historico :deep(.atividade .imagem),
.secao-historico :deep(.atividade .miniatura) {
  width: 120px !important;
  height: 160px !important;
  object-fit: cover;
  align-self: flex-start;
}
.secao-historico :deep(.atividade h3),
.secao-historico :deep(.atividade .titulo) {
  font-family: 'Roboto', sans-serif !important;
  font-size: 22px !important;
  font-weight: 700 !important;
  color: #b8283e !important;
}
.secao-historico :deep(.atividade .tag),
.secao-historico :deep(.atividade .tags span),
.secao-historico :deep(.atividade .etiqueta) {
  background: none !important;
  color: #000 !important;
  padding: 0 !important;
  border-radius: 0 !important;
  font-family: 'Roboto', sans-serif !important;
  font-size: 13px !important;
}
.secao-historico :deep(.atividade p),
.secao-historico :deep(.atividade .descricao),
.secao-historico :deep(.atividade .arquivo) {
  font-family: 'Roboto', sans-serif !important;
  font-size: 13px !important;
  color: #000 !important;
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
  .botao-add :deep(button),
  .botao-add :deep(a) {
    font-size: 64px;
    border-radius: 20px !important;
    border-width: 4px !important;
  }
  .topo-historico h1 {
    font-size: 32px;
    line-height: 1.05;
  }
  .linha-historico {
    margin-top: 40px;
    margin-bottom: 32px;
  }
  .secao-historico h2 {
    font-size: 30px;
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
