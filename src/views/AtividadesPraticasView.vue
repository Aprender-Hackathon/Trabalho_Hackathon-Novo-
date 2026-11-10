<script setup>
import { ref, computed, onMounted } from 'vue'
import FiltroPratica from '@/components/FiltroPratica.vue'
import BotaoPratica from '@/components/BotaoPratica.vue'
import BotaoMaisResultados from '@/components/BotaoMaisResultados.vue'

const limite = ref(20)
const listaPratica = ref([]) // Guarda os dados vindos do JSON Server
const carregando = ref(false)

const filtroEscolhido = ref({
  data: 'Tudo',
})

// Busca os dados atualizados do JSON Server ao abrir a tela
async function buscarAtividadesPraticas() {
  carregando.value = true
  try {
    const resposta = await fetch('http://localhost:3000/atividades_praticas')
    if (resposta.ok) {
      listaPratica.value = await resposta.json()
    }
  } catch (erro) {
    console.error('Erro ao buscar atividades práticas:', erro)
  } finally {
    carregando.value = false
  }
}

onMounted(() => {
  buscarAtividadesPraticas()
})

async function alternarSalvar(id) {
  const item = listaPratica.value.find(a => String(a.id) === String(id))
  if (item) {
    const novoStatus = !item.salvo
    item.salvo = novoStatus
    
    // Atualiza também no JSON Server (PUT)
    try {
      await fetch(`http://localhost:3000/atividades_praticas/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ salvo: novoStatus })
      })
    } catch (e) {
      console.error('Erro ao alternar status de salvo:', e)
    }
  }
}

const atividadesFiltradas = computed(() => {
  return listaPratica.value.filter((item) => {
    return (
      filtroEscolhido.value.data === 'Tudo' ||
      item.data === filtroEscolhido.value.data
    )
  })
})
</script>

<template>
  <div class="explorar-container">
    <FiltroPratica @filtro="filtroEscolhido = $event" />

    <p v-if="carregando" style="text-align: center;">Carregando atividades...</p>

    <div class="cards" v-else>
      <BotaoPratica
        v-for="item in atividadesFiltradas.slice(0, limite)"
        :key="item.id"
        :id="item.id"
        :titulo="item.titulo"
        :imagem="item.imagem"
        :data="item.data"
        :isSalvo="item.salvo"
        @salvar="alternarSalvar(item.id)"
      />
    </div>

    <BotaoMaisResultados v-if="atividadesFiltradas.length > limite" @carregar="limite += 20" />
  </div>
</template>

<style scoped>
.explorar-container {
  min-height: 100vh;
  padding-bottom: 4rem;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 70px;
}
</style>