<script setup>
import VerAtvPrat from '@/components/VerAtvPrat.vue';
import BotaoMaisResultados from '@/components/BotaoMaisResultados.vue';
import BotaoPratica from '@/components/BotaoPratica.vue';
import estadoPratica from '@/PraticaCards';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const mostrarAtvs = ref(false)

const atividade = computed(() => estadoPratica.lista.find(item => item.id === Number(route.params.id)))

const atvsRelacionadas = computed (() => {
    if (!atividade.value) return []
    return estadoPratica.lista.filter(
        item => item.data === atividade.value.data && item.id !== atividade.value.id
    )
})

function alternarSalvar(id) {
  const item = estadoPratica.lista.find(a => a.id === id)
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
        <VerAtvPrat
            :id="atividade.id"
            :titulo="atividade.titulo"
            :data="atividade.data"
            :descricao="atividade.descricao"
            :imagem="atividade.imagem"
            :arquivo="atividade.arquivo"
            :isSalvo="atividade.salvo"
        />
        <BotaoMaisResultados 
        v-if="!mostrarAtvs" 
        @carregar="mostrarMais" 
        class="mais"/>

        <div v-if="mostrarAtvs" class="cards">
          <BotaoPratica
            v-for="item in atvsRelacionadas"
            :key="item.id"
            :id="item.id"
            :titulo="item.titulo"
            :imagem="item.imagem"
            :data="item.data"
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