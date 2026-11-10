<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import FiltroPratica from '@/components/FiltroPratica.vue'
import BotaoPratica from '@/components/BotaoPratica.vue'
import BotaoMaisResultados from '@/components/BotaoMaisResultados.vue'
import BannerAtvPraticas from '@/components/BannerAtvPraticas.vue'

const route = useRoute()
const limite = ref(20)
const listaPratica = ref([])
const carregando = ref(false)

const filtroEscolhido = ref({
  materia: 'Tudo',
  conteudo: 'Tudo',
  data: 'Tudo'
})

async function buscarAtividadesPraticas() {
  carregando.value = true
  try {
    const resposta = await fetch('http://localhost:3000/atividades_praticas')
    if (resposta.ok) {
      listaPratica.value = await resposta.json()
    }
  } catch (erro) {
    console.error('Erro ao buscar dados:', erro)
  } finally {
    carregando.value = false
  }
}

function lerParametroUrl() {
  if (route.query.data) {
    filtroEscolhido.value.data = route.query.data
  }
}

onMounted(() => {
  lerParametroUrl()
  buscarAtividadesPraticas()
})

watch(() => route.query.data, () => {
  lerParametroUrl()
})

function atualizarFiltro(novoFiltro) {
  filtroEscolhido.value = {
    ...filtroEscolhido.value,
    ...novoFiltro
  }
}

async function alternarSalvar(id) {
  const item = listaPratica.value.find(a => String(a.id) === String(id))
  if (item) {
    const novoStatus = !item.salvo
    item.salvo = novoStatus
    
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
    const matchData =
      filtroEscolhido.value.data === 'Tudo' ||
      (item.data && item.data.trim().toLowerCase() === filtroEscolhido.value.data.trim().toLowerCase())

    const matchMateria =
      filtroEscolhido.value.materia === 'Tudo' || item.materia === filtroEscolhido.value.materia

    const matchConteudo =
      filtroEscolhido.value.conteudo === 'Tudo' || item.conteudo === filtroEscolhido.value.conteudo

    return matchData && matchMateria && matchConteudo
  })
})
</script>

<template>
  <div class="explorar-container">
    <BannerAtvPraticas />
    <FiltroPratica
      :filtroInicial="filtroEscolhido"
      @filtro="atualizarFiltro"
    />

    <p v-if="carregando" style="text-align: center; margin-top: 20px;">Carregando atividades...</p>

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
  width: 100%;
}

.cards {
  display: grid !important;
  grid-template-columns: repeat(2, 1fr) !important;
  gap: 12px;
  padding: 16px 12px;
  width: 100%;
  box-sizing: border-box;
}

.cards :deep(> *) {
  width: 100% !important;
  max-width: 100% !important;
  min-width: 0 !important;
  box-sizing: border-box !important;
}

@media (min-width: 600px) {
  .cards {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) !important;
    gap: 24px;
    padding: 20px 70px;
  }
}
</style>