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
function obterCorMateria(mat) {
  const cores = {
'Artes': '#FF7A00',            // Laranja super vivo
    'Biologia': '#00B4D8',         // Azul celeste vibrante
    'Ciências': '#2DC653',         // Verde bem vivo
    'Educação Física': '#FF5400',  // Laranja abóbora forte
    'Ensino Religioso': '#9D4EDD', // Roxo vibrante
    'Espanhol': '#FFB703',         // Amarelo/Laranja solar
    'Filosofia': '#3A86FF',        // Azul elétrico
    'Física': '#4361EE',           // Azul royal vivo
    'Geografia': '#FB8500',        // Laranja dourado vibrante
    'História': '#E01A4F',         // Vermelho/Rosa choque forte
    'Inglês': '#D90429',           // Vermelho tomate vivo
    'Matemática': '#9B5DE5',       // Lilás claro, vivo e alegre
    'Português': '#0077B6',        // Azul marinho vivo
    'Química': '#FF007F',          // Pink super vivo
    'Sociologia': '#FFD166',     // Roxo escuro vivo
  }
  return cores[mat] || '#f5893c' // Laranja padrão caso apareça alguma nova
}

</script>

<template>  
    <div class="card" :style="{ borderColor: obterCorMateria(materia) }">
      <router-link :to="`/atividade/${id}`" class="link">
        <PreviewDocx v-if="previewTipo === 'docx' && arquivo" :arquivo="arquivo" class="imagem" />
      </router-link>
    <div class="laranja" :style="{ backgroundColor: obterCorMateria(materia) }">
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
