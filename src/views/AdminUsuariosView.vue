<script setup>
import { ref, onMounted, computed } from 'vue'

const URL_API = 'http://localhost:3000/usuarios'

const visitantes = ref([])
const editando = ref(null)
const pesquisa = ref('')

const form = ref({ nome: '', email: '' })

function simplificar(texto){
  return (texto || '').toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const visitantesFiltrados = computed(() => {
  const palavra = simplificar(pesquisa.value.trim())
  if (!palavra) return visitantes.value
  return visitantes.value.filter(
    (v) => simplificar(v.nome).includes(palavra) || simplificar(v.email).includes(palavra)
  )
})

// LER, get
async function carregar() {
  try {
    const resposta = await fetch(URL_API)

    if (!resposta.ok) throw new Error()

    const dados = await resposta.json()

    console.log('Usuários encontrados:', dados)

    visitantes.value = dados
  } catch {
    alert('Não foi possível carregar os visitantes. A API (npm run api) está rodando?')
  }
}


function abrirEdicao(visitante) {
  editando.value = visitante.id

  form.value = { 
    nome: visitante.nome,
     email: visitante.email 
  }
  window.scrollTo(0, 0)
}

function cancelar() {
  editando.value = null
}

async function atualizar() {
  try {
    await fetch(`${URL_API}/${editando.value}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })
    editando.value = null
    carregar()
  } catch {
    alert('Erro ao atualizar visitante.')
  }
}

async function deletar(visitante) {
  if (!confirm(`Deseja deletar "${visitante.nome}"?`)) return

  try {
    await fetch(`${URL_API}/${visitante.id}`, { method: 'DELETE' })
    carregar()
  } catch {
    alert('Erro ao deletar visitante.')
  }
}

onMounted(carregar)
</script>

<template>
  <div class="pagina">
    <h1>Visitantes</h1>

    <form v-if="editando" class="caixa" @submit.prevent="atualizar">
      <h2>Atualizar perfil de visitante</h2>

      <input v-model="form.nome" placeholder="Nome" required />
      <input v-model="form.email" type="email" placeholder="E-mail" required />

      <div class="botoes">
        <button type="submit" class="btn btn-azul">Salvar</button>
        <button type="button" class="btn btn-cinza" @click="cancelar">Cancelar</button>
      </div>
    </form>

    <div class="caixa">
      <input v-model="pesquisa" class="pesquisa" placeholder="Pesquisar visitante pelo nome..." />
      <p v-if="visitantes.length === 0">Nenhum visitante cadastrado.</p>
      <p v-else-if="visitantesFiltrados.length === 0">Nenhum visitante encontrado.</p>

      <div v-for="visitante in visitantesFiltrados" :key="visitante.id" class="item">
        <div class="dados">
          <span class="nome">{{ visitante.nome }}</span>
        </div>
        <div class="botoes">
          <button class="btn btn-azul" @click="abrirEdicao(visitante)">Atualizar</button>
          <button class="btn btn-vermelho" @click="deletar(visitante)">Deletar</button>
        </div>
      </div>
    </div>

    <RouterLink to="/admin" class="voltar">Voltar ao painel</RouterLink>
  </div>
</template>

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
  background-color: #fde896;
  border-radius: 30px;
  padding: 1.5rem;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input,
select {
  padding: 10px 14px;
  border: 1px solid #dfb969;
  border-radius: 14px;
  background-color: #fff9eb;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff9eb;
  border-radius: 20px;
  padding: 10px 16px;
}

.nome {
  font-weight: bold;
}

.botoes {
  display: flex;
  gap: 8px;
}

.btn {
  border: none;
  border-radius: 20px;
  padding: 0.4rem 1rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.btn-azul { background-color: #238b97; }
.btn-vermelho { background-color: #e65261; }
.btn-cinza { background-color: #8a8a8a; }

.erro {
  color: #c62d3c;
  font-weight: bold;
  margin: 0;
}

.voltar {
  color: #238b97;
  font-weight: bold;
  text-decoration: underline;
}
</style>