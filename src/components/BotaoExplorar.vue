<script setup>
import BotaoSalvar from './BotaoSalvar.vue'
import PreviewDocx from './PreviewDocx.vue'

defineProps({
  id: [Number, String],
  materia: String,
  conteudo: String,
  titulo: String,
  imagem: String,
  arquivo: String,
  previewTipo: String,
  isSalvo: Boolean,
})

defineEmits(['salvar'])
</script>

<template>  
    <div class="card">
      <router-link :to="`/atividade/${id}`" class="link">
        <PreviewDocx v-if="previewTipo === 'docx' && arquivo" :arquivo="arquivo" class="imagem" />
      </router-link>
    <div class="laranja">
      <div class="linhaDeCima">
        <router-link :to="`/atividade/${id}`" class="link">
          <h2>{{ titulo || 'Sem título' }}</h2>
        </router-link>
        <div class="botoes" @click.stop>
          <BotaoSalvar
            :isSalvo="isSalvo"
            @salvar="
              $emit('salvar', {
                id,
                titulo,
                imagem,
                arquivo,
                previewTipo,
                materia,
                conteudo,
              })
            "
          />
        </div>
      </div>
      <span v-if="materia" class="materia">
        {{ materia }}
      </span>
    </div>

    </div>
  
</template>
<style scoped>
.link {
  text-decoration: none;
}
.card {
  width: 240px;
  height: 300px;
  border: 3.5px solid #f5893c;
  border-radius: 18px;
  overflow: hidden;
  position: relative;
  background: white;
  margin: 8px;
}

.imagem {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.laranja {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: #f5893c;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 15px;
  box-sizing: border-box;
}
.linhaDeCima {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
h2 {
  color: #1a1a1a;
  font-size: 20px;
  margin: 0;
}
.materia {
  font-size: 17px;
  color: #333;
  text-decoration: underline;
  cursor: default;
}

@media (max-width: 480px) {
  .card {
    width: 46%;
    margin: 4px;
    height: 250px;
  }

  .imagem {
    height: 140px;
  }

  .titulo {
    font-size: 0.95rem;
  }
}
</style>
