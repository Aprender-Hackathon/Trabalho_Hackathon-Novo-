<template>
  <div class="pagina">
    <h1>Professores</h1>

    <div class="caixa">
      <p v-if="carregando">Carregando professores...</p>
      <p v-if="erro" role="alert">{{ erro }}</p>
      <p v-if="!carregando && !erro && professores.length === 0">
        Nenhum professor cadastrado.
      </p>

      <div v-for="professor in professores" :key="professor.id" class="professor">
        <span class="nome">{{ professor.nome || 'Nome não informado' }}</span>
        <button type="button" :disabled="excluindo" @click="excluir(professor)">
          Excluir
        </button>
      </div>
    </div>

    <RouterLink to="/admin" class="voltar">Voltar ao painel</RouterLink>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const URL_API = 'http://localhost:3000/professores'
const professores = ref([])
const carregando = ref(true)
const excluindo = ref(false)
const erro = ref('')

async function carregar() {
  try {
    const resposta = await fetch(URL_API)
    if (!resposta.ok) throw new Error()

    const lista = await resposta.json()
    professores.value = lista.map(({ id, nome }) => ({ id, nome }))
  } catch {
    erro.value = 'Não foi possível carregar os professores. Confira se a API está rodando.'
  } finally {
    carregando.value = false
  }
}

async function excluir(professor) {
  if (excluindo.value) return
  if (!window.confirm(`Excluir o cadastro de "${professor.nome}"?`)) return

  erro.value = ''
  excluindo.value = true

  try {
    const resposta = await fetch(`${URL_API}/${encodeURIComponent(professor.id)}`, {
      method: 'DELETE'
    })

    if (!resposta.ok) throw new Error()

    professores.value = professores.value.filter((item) => item.id !== professor.id)
  } catch {
    erro.value = 'Não foi possível excluir o professor.'
  } finally {
    excluindo.value = false
  }
}

onMounted(carregar)
</script>

<style scoped>
.pagina {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 3rem 1rem 5rem;
  color: #1e6d77;
}

.caixa {
  box-sizing: border-box;
  display: grid;
  gap: 10px;
  width: 100%;
  max-width: 600px;
  padding: 1.5rem;
  border-radius: 30px;
  background-color: #fde896;
}

.professor {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 16px;
  border-radius: 20px;
  background-color: #fff9eb;
}

.nome {
  font-weight: bold;
  overflow-wrap: anywhere;
}

.professor button {
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 20px;
  background-color: #e65261;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.professor button:disabled {
  opacity: 0.65;
  cursor: wait;
}

.voltar {
  color: #238b97;
  font-weight: bold;
  text-decoration: underline;
}
</style>
