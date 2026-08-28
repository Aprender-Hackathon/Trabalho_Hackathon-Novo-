<script setup>
import VerAtv from '@/components/VerAtv.vue';
import BotaoMaisResultados from '@/components/BotaoMaisResultados.vue';
import BotaoExplorar from '@/components/BotaoExplorar.vue';
import { estadoAtividades } from '@/AtividadesCards';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const mostrarAtvs = ref(false)

const atividade = computed(() => estadoAtividades.lista.find(item => item.id === Number(route.params.id)))

const atvsRelacionadas = computed (() => {
    if (!atividade.value) return []
    return estadoAtividades.lista.filter(
        item => item.materia === atividade.value.materia && item.id !== atividade.value.id
    )
})

function alternarSalvar(id) {
  const item = estadoAtividades.lista.find(a => a.id === id)
  if (item) {
    item.salvo = !item.salvo
  }
}

function mostrarMais() {
    mostrarAtvs.value = true
}

function mostrarMenos() {
  mostrarAtvs.value = false
}
</script>

<template>
    <div v-if="atividade">
        <VerAtv
            :id="atividade.id"
            :titulo="atividade.titulo"
            :materia="atividade.materia"
            :conteudo="atividade.conteudo"
            :descricao="atividade.descricao"
            :imagem="atividade.imagem"
            :docx="atividade.arquivo"
            :isSalvo="atividade.salvo"
        />
        <BotaoMaisResultados 
        v-if="!mostrarAtvs" 
        @carregar="mostrarMais" 
        class="mais"/>

        <div v-if="mostrarAtvs" class="cards">

    <BotaoExplorar
      v-for="item in atvsRelacionadas"
      :key="item.id"
      :id="item.id"
      :titulo="item.titulo"
      :imagem="item.imagem"
      :arquivo="item.arquivo"
      :previewTipo="item.previewTipo"
      :materia="item.materia"
      :conteudo="item.conteudo"
      :isSalvo="item.salvo"
      @salvar="alternarSalvar(item.id)"
      @click="mostrarAtvs = false"
    />


        </div>
    </div>
</template>

<style scoped>

.mais {
  margin-bottom: 2vw;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 70px;
}

</style>