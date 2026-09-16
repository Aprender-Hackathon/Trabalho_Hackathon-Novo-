<script setup>
import { computed } from 'vue'
import { estadoAtividades } from '@/AtividadesCards.js'
import PreviewDocx from '@/components/PreviewDocx.vue'
const atividadesAdicionadas = computed(() => {
  return estadoAtividades.lista.filter(
    atividade => atividade.criadoPor
  )
})
</script>
<template>
  <section class="historico-lista">
    <article
      v-for="atividade in atividadesAdicionadas"
      :key="atividade.id"
      class="atividade">
      <div class="data">
        {{ atividade.data || 'Atividade adicionada' }}
      </div>
      <div class="atividade-conteudo">
        <div class="preview">
          <PreviewDocx
            v-if="atividade.previewTipo === 'docx' && atividade.arquivo" :arquivo="atividade.arquivo"/>
        </div>
        <div class="informacoes">
          <h2>
            {{ atividade.titulo }}
          </h2>
          <div class="materia-conteudo">
            <span>{{ atividade.materia }}</span>
            <span>{{ atividade.conteudo }}</span>
          </div>
          <p class="descricao">
            {{ atividade.descricao }}
          </p>
          <p class="arquivo">
            {{ atividade.arquivo }}
          </p>
        </div>
      </div>
    </article>
    <p
      v-if="atividadesAdicionadas.length === 0"
      class="nenhuma-atividade">
      Você ainda não adicionou nenhuma atividade.
    </p>
  </section>
</template>
<style scoped>
.historico-lista {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}
.atividade {
  width: 100%;
  margin-bottom: 25px;
}
.data {
  margin-left: 25px;
  margin-bottom: 5px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: #333;
}
.atividade-conteudo {
  display: flex;
  align-items: flex-start;
  gap: 25px;
  width: 100%;
}
.preview {
  width: 220px;
  height: 280px;
  flex-shrink: 0;
  overflow: hidden;
  background-color: #f1f1f1;
  border-radius: 3px;
}
.informacoes {
  flex: 1;
  padding-top: 5px;
}
.informacoes h2 {
  margin: 0 0 12px 0;
  font-family: 'Baloo 2', sans-serif;
  font-size: 25px;
  font-weight: 700;
  color: #d1495b;
}
.materia-conteudo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
}
.materia-conteudo span {
  padding: 5px 15px;
  background-color: #73bd58;
  color: white;
  border-radius: 100px;
  font-family: 'Baloo 2', sans-serif;
  font-size: 14px;
}
.descricao {
  max-width: 550px;
  margin: 0 0 20px 0;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 1.5;
  color: #333;
  text-align: justify;
}
.arquivo {
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #555;
}
.nenhuma-atividade {
  margin-top: 50px;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #777;
}
@media (max-width: 600px) {
  .atividade-conteudo {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .preview {
    width: 250px;
    height: 330px;
  }
  .informacoes {
    width: 100%;
    text-align: center;
  }
  .informacoes h2 {
    font-size: 23px;
  }
  .materia-conteudo {
    justify-content: center;
    flex-wrap: wrap;
  }
  .descricao {
    max-width: 100%;
    padding: 0 10px;
    text-align: justify;
  }
  .arquivo {
    padding: 0 10px;
  }
}
</style>
