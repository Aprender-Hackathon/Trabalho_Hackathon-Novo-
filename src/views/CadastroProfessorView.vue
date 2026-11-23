<template>
  <div class="box">
    <button class="btn-voltar" @click="voltarHome">Voltar</button>

    <div class="wrapper">
      <h1 class="titulo">Painel de Professores</h1>

      <div class="card">
        <h3>Cadastrar Professor</h3>

        <form @submit.prevent="salvarProfessor" autocomplete="off">
          <input v-model="nome" class="input-text" placeholder="Nome" required />
          <input v-model="email" class="input-text" type="email" placeholder="E-mail" required />
          <input v-model="materia" class="input-text" placeholder="Matéria" required />
          <input v-model="escola" class="input-text" placeholder="Escola" required />
          <input
            v-model="senha"
            class="input-text"
            type="password"
            placeholder="Senha"
            autocomplete="new-password"
            required
          />

          <div class="acoes-form">
            <button type="submit" class="btn" :disabled="salvando">
              {{ salvando ? 'Salvando...' : 'Salvar' }}
            </button>
            <button type="button" class="btn btn-limpar" @click="limparFormulario">
              Limpar Campos
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const roteador = useRouter()
const URL_API = 'http://localhost:3000/professores'

const lista = ref([])
const nome = ref('')
const email = ref('')
const materia = ref('')
const escola = ref('')
const senha = ref('')
const salvando = ref(false)

async function buscarProfessores() {
  try {
    const resposta = await fetch(URL_API)
    if (!resposta.ok) throw new Error()
    lista.value = await resposta.json()
  } catch {
    alert('Erro ao carregar a lista. Confira se a API está rodando.')
  }
}

async function salvarProfessor() {
  if (salvando.value) return

  const dados = {
    nome: nome.value,
    'email-instituicao': email.value.trim(),
    materia: materia.value,
    escola: escola.value,
    senha: senha.value
  }

  salvando.value = true

  try {
    const resposta = await fetch(URL_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    })

    if (!resposta.ok) throw new Error()

    const dadosCriados = await resposta.json()

    const sessao = {
      id: dadosCriados.id,
      nome: dadosCriados.nome,
      email: dadosCriados['email-instituicao'],
      'email-instituicao': dadosCriados['email-instituicao'],
      materia: dadosCriados.materia,
      escola: dadosCriados.escola,
      role: 'professor'
    }

    localStorage.setItem('userData', JSON.stringify(sessao))
    localStorage.setItem('isLoggedIn', 'true')
    window.dispatchEvent(new Event('auth-change'))

    roteador.push('/usuario-professor')
  } catch {
    alert('Erro ao salvar os dados. Confira se a API está rodando.')
  } finally {
    salvando.value = false
  }
}

function limparFormulario() {
  nome.value = ''
  email.value = ''
  materia.value = ''
  escola.value = ''
  senha.value = ''
}


function voltarHome() {
  roteador.push('/')
}

onMounted(buscarProfessores)
</script>

<style scoped>
.box {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fefefe;
  font-family: sans-serif;
  padding: 20px;
  position: relative;
}

.btn-voltar {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #e38b93;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.wrapper {
  width: 100%;
  max-width: 600px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.titulo {
  color: #1a5660;
  font-size: 1.8rem;
  text-align: center;
}

.card {
  background-color: #fcd581;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card h3 {
  margin: 0;
  color: #2c2c2c;
  font-size: 1.2rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-text {
  width: 100%;
  padding: 10px;
  border: 1px solid #dfb969;
  border-radius: 6px;
  outline: none;
  font-size: 0.95rem;
}

.acoes-form {
  display: flex;
  gap: 10px;
}

.btn {
  background-color: #2b8b97;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.btn-limpar {
  background-color: #4a7c82;
  color: white;
}

.tabela {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.tabela th,
.tabela td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #dfb969;
  font-size: 0.95rem;
}

.btn-acao {
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-right: 5px;
}

.btn-excluir {
  background-color: #e65252;
  color: white;
}

@media (max-width: 600px) {
  .wrapper {
    max-width: 100%;
    margin-top: 50px;
  }
}
</style>
