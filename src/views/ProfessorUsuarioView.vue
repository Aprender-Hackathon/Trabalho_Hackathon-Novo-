<template>
  <main class="pagina-perfil">
    <div class="cartao-perfil">
      <img class="foto-perfil" src="../assets/user.png" alt="Foto de perfil" />

      <div class="dados-perfil">
        <div class="linha">Nome: {{ usuario.nome }}</div>
        <div class="linha">E-mail: {{ usuario.email }}</div>
        <div class="linha">Matéria: {{ usuario.materia }}</div>
        <div class="linha">Escola: {{ usuario.escola }}</div>
      </div>

      <div class="botoes">
        <button
          type="button"
          class="botao-perfil vermelho"
          :disabled="excluindoConta"
          @click="excluirConta"
        >
          {{ excluindoConta ? 'Excluindo...' : 'Excluir conta' }}
        </button>

        <button
          type="button"
          class="botao-perfil amarelo"
          :disabled="excluindoConta"
          @click="abrirEdicao"
        >
          Editar conta
        </button>

        <button type="button" class="botao-perfil" :disabled="excluindoConta" @click="sair">
          Sair
        </button>
      </div>
    </div>

    <dialog
      ref="janelaEdicao"
      class="janela-edicao"
      aria-labelledby="titulo-edicao"
      @cancel="bloquearFechamentoAoSalvar"
    >
      <form @submit.prevent="salvarEdicao">
        <h2 id="titulo-edicao">Editar conta</h2>

        <label>
          Nome
          <input v-model.trim="dadosEditados.nome" :disabled="salvando" required />
        </label>

        <label>
          E-mail
          <input v-model.trim="dadosEditados.email" type="email" :disabled="salvando" required />
        </label>

        <label>
          Matéria
          <input v-model.trim="dadosEditados.materia" :disabled="salvando" required />
        </label>

        <label>
          Escola
          <input v-model.trim="dadosEditados.escola" :disabled="salvando" required />
        </label>

        <p v-if="erro" class="erro" role="alert">{{ erro }}</p>

        <div class="botoes">
          <button type="button" class="botao-perfil" :disabled="salvando" @click="fecharEdicao">
            Cancelar
          </button>
          <button type="submit" class="botao-perfil amarelo" :disabled="salvando">
            {{ salvando ? 'Salvando...' : 'Salvar' }}
          </button>
        </div>
      </form>
    </dialog>
  </main>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const roteador = useRouter()
const usuario = reactive({ nome: '', email: '', materia: '', escola: '' })
const dadosEditados = reactive({ nome: '', email: '', materia: '', escola: '' })
const janelaEdicao = ref(null)
const salvando = ref(false)
const excluindoConta = ref(false)
const erro = ref('')

function mostrarPerfil(professor) {
  usuario.nome = professor.nome || ''
  usuario.email = professor['email-instituicao'] || professor.email || ''
  usuario.materia = professor.materia || ''
  usuario.escola = professor.escola || ''
}

onMounted(() => {
  const dadosSalvos = localStorage.getItem('userData')
  if (dadosSalvos) mostrarPerfil(JSON.parse(dadosSalvos))
})

function abrirEdicao() {
  Object.assign(dadosEditados, usuario)
  erro.value = ''
  janelaEdicao.value.showModal()
}

function fecharEdicao() {
  janelaEdicao.value.close()
}

function bloquearFechamentoAoSalvar(evento) {
  if (salvando.value) evento.preventDefault()
}

async function salvarEdicao() {
  if (salvando.value || excluindoConta.value) return

  erro.value = ''
  salvando.value = true

  try {
    const sessao = localStorage.getItem('userData')
    const professor = JSON.parse(sessao || 'null')
    const ehProfessor =
      professor?.role === 'professor' ||
      (professor?.role == null && professor?.materia !== undefined)

    if (
      localStorage.getItem('isLoggedIn') !== 'true' ||
      !ehProfessor ||
      professor?.id == null ||
      professor.id === ''
    ) {
      erro.value = 'Entre na sua conta de professor para salvar.'
      return
    }

    const dadosParaAPI = {
      nome: dadosEditados.nome,
      'email-instituicao': dadosEditados.email,
      materia: dadosEditados.materia,
      escola: dadosEditados.escola
    }

    const id = encodeURIComponent(professor.id)
    const url = `http://localhost:3000/professores/${id}`

    const resposta = await fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dadosParaAPI)
    })

    if (resposta.status === 404) {
      erro.value = 'Cadastro não encontrado (404). Saia e entre de novo com seu e-mail de professor.'
      return
    }

    if (!resposta.ok) {
      erro.value = `A API recusou o salvamento (erro ${resposta.status}).`
      return
    }

    const atualizado = await resposta.json()
    if (localStorage.getItem('userData') !== sessao) return

    const perfilAtualizado = {
      ...professor,
      ...atualizado,
      email: atualizado['email-instituicao']
    }

    localStorage.setItem('userData', JSON.stringify(perfilAtualizado))
    mostrarPerfil(perfilAtualizado)
    fecharEdicao()
  } catch {
    erro.value = 'Confira se a API está rodando na porta 3000 e tente novamente.'
  } finally {
    salvando.value = false
  }
}

async function excluirConta() {
  if (excluindoConta.value || salvando.value) return

  try {
    const sessao = localStorage.getItem('userData')
    const professor = JSON.parse(sessao || 'null')
    const ehProfessor =
      professor?.role === 'professor' ||
      (professor?.role == null && professor?.materia !== undefined)

    if (
      localStorage.getItem('isLoggedIn') !== 'true' ||
      !ehProfessor ||
      professor?.id == null ||
      professor.id === ''
    ) {
      alert('Entre na sua conta de professor para poder excluí-la.')
      return
    }

    if (!window.confirm('Tem certeza? Sua conta será excluída permanentemente.')) return

    excluindoConta.value = true

    const id = encodeURIComponent(professor.id)
    const resposta = await fetch(`http://localhost:3000/professores/${id}`, {
      method: 'DELETE'
    })

    if (!resposta.ok) {
      alert(`Não foi possível excluir a conta (erro ${resposta.status}).`)
      return
    }

    if (localStorage.getItem('userData') === sessao) {
      sair()
    }
  } catch {
    alert('Não foi possível confirmar a exclusão. Confira se o npm run api está rodando.')
  } finally {
    excluindoConta.value = false
  }
}

function sair() {
  localStorage.removeItem('userData')
  localStorage.removeItem('isLoggedIn')
  window.dispatchEvent(new Event('auth-change'))
  roteador.push('/')
}
</script>

<style scoped>
.pagina-perfil {
  box-sizing: border-box;
  min-height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: clamp(36px, 16.86vh, 174px) 20px 40px;
  background-color: #faf4e8;
  font-family: Arial, sans-serif;
  color: #000;
}

.cartao-perfil {
  box-sizing: border-box;
  width: 100%;
  max-width: 793px;
  padding: 36px 37px;
  background-color: #fff;
  border: 1px solid #d2d2d2;
  border-radius: 8px;
}

.foto-perfil {
  display: block;
  width: 220px;
  height: 220px;
  max-width: 100%;
  object-fit: contain;
  border-radius: 50%;
  margin: 0 auto 49px;
}

.dados-perfil {
  display: grid;
  gap: 15px;
}

.linha {
  padding: 17px 22px;
  background-color: #f2d7d7;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  overflow-wrap: anywhere;
}

.botoes {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.botao-perfil {
  width: auto;
  height: auto;
  min-height: 54px;
  padding: 0 30px;
  border: 0;
  border-radius: 8px;
  background-color: #d78c93;
  color: #000;
  font: bold 20px Arial, sans-serif;
  white-space: nowrap;
  cursor: pointer;
}

.botao-perfil.amarelo {
  background-color: #f7c94f;
}

.botao-perfil.vermelho {
  background-color: #c34250;
  color: #fff;
}

.botao-perfil:disabled {
  opacity: 0.65;
  cursor: wait;
}

.janela-edicao {
  box-sizing: border-box;
  width: min(440px, calc(100% - 32px));
  padding: 24px;
  border: 1px solid #d2d2d2;
  border-radius: 8px;
  background-color: #fff;
  color: #000;
}

.janela-edicao::backdrop {
  background-color: rgb(0 0 0 / 35%);
}

.janela-edicao h2 {
  margin: 0 0 16px;
}

.janela-edicao label {
  display: grid;
  gap: 5px;
  margin-bottom: 12px;
}

.janela-edicao input {
  box-sizing: border-box;
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #999;
  border-radius: 6px;
  font: inherit;
}

.janela-edicao .botao-perfil {
  min-height: 42px;
  padding: 0 16px;
  font-size: 16px;
}

.erro {
  color: #8b1e1e;
}

@media (max-width: 600px) {
  .cartao-perfil {
    padding: 22px 18px;
  }

  .foto-perfil {
    width: 150px;
    height: 150px;
    margin-bottom: 28px;
  }

  .linha {
    padding: 12px 14px;
    font-size: 16px;
  }

  .botao-perfil {
    min-height: 44px;
    padding: 0 16px;
    font-size: 16px;
  }
}
</style>
