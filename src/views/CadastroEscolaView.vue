<template>
  <div class="pagina">
    <h1>Cadastrar escola</h1>

    <form class="caixa" @submit.prevent="cadastrar">
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

      <button type="submit" class="btn-cadastrar">Cadastrar escola</button>
    </form>

    <RouterLink to="/escolhe-cadastro" class="voltar">Voltar</RouterLink>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const URL_API = 'http://localhost:3000/escolas'

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

async function cadastrar() {
  if (!form.value.cidade) {
    erroCep.value = 'Digite um CEP válido para preencher o endereço.'
    return
  }

  try {
    const resposta = await fetch(URL_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })
    if (!resposta.ok) throw new Error()

    alert('Escola cadastrada com sucesso!')
    router.push('/')
  } catch {
    alert('Erro ao cadastrar a escola. A API (npm run api) está rodando?')
  }
}
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
  max-width: 440px;
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

.btn-cadastrar {
  background-color: #e65261;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 0.7rem 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 6px;
}

.btn-cadastrar:hover {
  background-color: #f8959f;
}

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
