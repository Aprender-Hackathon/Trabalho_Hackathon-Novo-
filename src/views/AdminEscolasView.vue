<template>
  <div class="pagina">
    <h1>Escolas</h1>
    <form v-if="editando" class="caixa" @submit.prevent="atualizar">
      <h2>Atualizar escola</h2>

      <input v-model="form.nome" placeholder="Nome da escola" required />
      <input
        v-model="form.codigoInep"
        placeholder="Código do INEP (8 números)"
        maxlength="8"
        pattern="\d{8}"
        title="O código do INEP deve ter 8 números"
        required
      />
      <select v-model="form.redeEnsino" required>
        <option value="" disabled>Rede de ensino</option>
        <option>Municipal</option>
        <option>Estadual</option>
        <option>Federal</option>
        <option>Privada</option>
      </select>
      <input v-model="form.cep" placeholder="CEP (ex.: 89245-000)" maxlength="9" required @input="buscarCep" />
      <p v-if="erroCep" class="erro">{{ erroCep }}</p>
      <input v-model="form.logradouro" placeholder="Rua" readonly />
      <input v-model="form.bairro" placeholder="Bairro" readonly />
      <input v-model="form.cidade" placeholder="Cidade" readonly />
      <input v-model="form.estado" placeholder="Estado" readonly />
      <input v-model="form.numero" placeholder="Número" required />

      <div class="botoes">
        <button type="submit" class="btn btn-azul">Salvar</button>
        <button type="button" class="btn btn-cinza" @click="cancelar">Cancelar</button>
      </div>
    </form>
    <div class="caixa">
      <p v-if="escolas.length === 0">Nenhuma escola cadastrada.</p>

      <div v-for="escola in escolas" :key="escola.id" class="escola">
        <span class="nome">{{ escola.nome }}</span>
        <div class="botoes">
          <button class="btn btn-azul" @click="abrirEdicao(escola)">Atualizar</button>
          <button class="btn btn-vermelho" @click="deletar(escola)">Deletar</button>
        </div>
      </div>
    </div>

    <RouterLink to="/admin" class="voltar">Voltar ao painel</RouterLink>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const URL_API = 'http://localhost:3000/escolas'

const escolas = ref([])
const editando = ref(null)
const erroCep = ref('')

const form = ref({
  nome: '',
  codigoInep: '',
  redeEnsino: '',
  cep: '',
  logradouro: '',
  bairro: '',
  cidade: '',
  estado: '',
  numero: '',
})

// LER
async function carregar() {
  try {
    const resposta = await fetch(URL_API)
    escolas.value = await resposta.json()
  } catch {
    alert('Não foi possível carregar as escolas. A API (npm run api) está rodando?')
  }
}
function abrirEdicao(escola) {
  editando.value = escola.id
  erroCep.value = ''
  form.value = {
    nome: escola.nome,
    codigoInep: escola.codigoInep,
    redeEnsino: escola.redeEnsino,
    cep: escola.cep || '',
    logradouro: escola.logradouro || '',
    bairro: escola.bairro || '',
    cidade: escola.cidade || '',
    estado: escola.estado || '',
    numero: escola.numero || '',
  }
  window.scrollTo(0, 0)
}

function cancelar() {
  editando.value = null
}

async function buscarCep() {
  const numeros = form.value.cep.replace(/\D/g, '').slice(0, 8)
  form.value.cep = numeros.length > 5 ? `${numeros.slice(0, 5)}-${numeros.slice(5)}` : numeros
  erroCep.value = ''

  if (numeros.length < 8) return

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${numeros}/json/`)
    const dados = await resposta.json()

    if (dados.erro) {
      erroCep.value = 'CEP não encontrado.'
      form.value.logradouro = form.value.bairro = form.value.cidade = form.value.estado = ''
      return
    }

    form.value.logradouro = dados.logradouro
    form.value.bairro = dados.bairro
    form.value.cidade = dados.localidade
    form.value.estado = dados.uf
  } catch {
    erroCep.value = 'Não foi possível buscar o CEP. Tente de novo.'
  }
}

async function atualizar() {
  if (!form.value.cidade) {
    erroCep.value = 'Digite um CEP válido para preencher o endereço.'
    return
  }

  try {
    await fetch(`${URL_API}/${editando.value}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })
    editando.value = null
    carregar()
  } catch {
    alert('Erro ao atualizar a escola.')
  }
}

async function deletar(escola) {
  if (!confirm(`Deseja deletar "${escola.nome}"?`)) return

  try {
    await fetch(`${URL_API}/${escola.id}`, { method: 'DELETE' })
    carregar()
  } catch {
    alert('Erro ao deletar a escola.')
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

.escola {
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
