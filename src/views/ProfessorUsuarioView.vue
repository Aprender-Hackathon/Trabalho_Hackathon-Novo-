<template>
  <div class="box">
    <div class="card">

      <div class="avatar-area">
        <div class="foto-box">
          <img src="../assets/user.png" alt="Perfil" class="foto" />
        </div>
      </div>

      <div class="info-area">
        <div class="lista-campos">
          <div class="linha">
            <span>{{ usuario.nome || 'Informe seu nome' }}</span>
            <button class="btn-icone" type="button" @click="abrirModal('nome')">
              <img src="../assets/pencil.png" alt="Editar" class="lapis" />
            </button>
          </div>

          <div class="linha">
            <span>{{ usuario.email || 'Informe seu e-mail' }}</span>
            <button class="btn-icone" type="button" @click="abrirModal('email')">
              <img src="../assets/pencil.png" alt="Editar" class="lapis" />
            </button>
          </div>

          <div class="linha">
            <span>{{ usuario.localizacao || 'Informe sua matéria' }}</span>
            <button class="btn-icone" type="button" @click="abrirModal('localizacao')">
              <img src="../assets/pencil.png" alt="Editar" class="lapis" />
            </button>
          </div>

          <div class="linha">
            <span>{{ usuario.instituicao || 'Informe sua instituição' }}</span>
            <button class="btn-icone" type="button" @click="abrirModal('instituicao')">
              <img src="../assets/pencil.png" alt="Editar" class="lapis" />
            </button>
          </div>
        </div>

        <div class="botoes">
          <button class="btn" type="button" @click="excluirProfessor">Excluir Conta</button>
          <button class="btn" type="button" @click="lidarSair">Sair</button>
        </div>
      </div>
    </div>

    <div v-if="campoAtivo" class="overlay" @click.self="fecharModal">
      <div class="modal">
        <div class="modal-topo">
          <h3>
            Alterar
            {{
              campoAtivo === 'nome' ? 'nome' :
              campoAtivo === 'email' ? 'e-mail' :
              campoAtivo === 'localizacao' ? 'matéria' : 'instituição'
            }}
          </h3>
          <button class="btn-fechar" type="button" @click="fecharModal">✕</button>
        </div>

        <div class="modal-meio">
          <label>
            Novo
            {{
              campoAtivo === 'nome' ? 'nome' :
              campoAtivo === 'email' ? 'e-mail' :
              campoAtivo === 'localizacao' ? 'matéria' : 'instituição'
            }}
            <span class="asterisco">*</span>
          </label>
          <input v-model="valorTemporario" class="input-text" @keyup.enter="salvarModal" autofocus />
        </div>

        <div class="modal-baixo">
          <button class="btn" type="button" @click="salvarModal">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const roteador = useRouter()
const URL_API = 'http://localhost:3000/professores'

const usuario = reactive({
  id: '1',
  nome: '',
  email: '',
  localizacao: '',
  instituicao: '',
  senha: ''
})

const campoAtivo = ref(null)
const valorTemporario = ref('')

async function carregarDadosProfessor() {
  try {
    const resposta = await fetch(`${URL_API}/${usuario.id}`)
    if (!resposta.ok) throw new Error('Erro ao buscar professor')
    
    const dados = await resposta.json()
    usuario.nome = dados.nome || ''
    usuario.email = dados['email-instituicao'] || dados.email || ''
    usuario.localizacao = dados.materia || ''
    usuario.instituicao = dados.escola || ''
    usuario.senha = dados.senha || ''
  } catch (err) {
    console.error(err)
    alert('Erro ao carregar dados do servidor.')
  }
}

const abrirModal = (campo) => {
  campoAtivo.value = campo
  valorTemporario.value = usuario[campo]
}

const fecharModal = () => {
  campoAtivo.value = null
  valorTemporario.value = ''
}

const salvarModal = async () => {
  if (campoAtivo.value) {
    usuario[campoAtivo.value] = valorTemporario.value

    const dadosAtualizados = {
      id: usuario.id,
      nome: usuario.nome,
      'email-instituicao': usuario.email,
      materia: usuario.localizacao,
      escola: usuario.instituicao,
      senha: usuario.senha
    }

    try {
      const resposta = await fetch(`${URL_API}/${usuario.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosAtualizados)
      })

      if (!resposta.ok) throw new Error('Erro ao atualizar')
      alert('Dados salvos com sucesso!')
    } catch (err) {
      console.error(err)
      alert('Não foi possível salvar os dados.')
    }
  }
  fecharModal()
}

const excluirProfessor = async () => {
  const confirmacao = confirm('Tem certeza de que deseja excluir este cadastro de professor?')
  if (!confirmacao) return

  try {
    const resposta = await fetch(`${URL_API}/${usuario.id}`, {
      method: 'DELETE'
    })

    if (!resposta.ok) throw new Error('Erro ao excluir')
    alert('Cadastro excluído!')
    lidarSair()
  } catch (err) {
    console.error(err)
    alert('Não foi possível excluir o cadastro.')
  }
}

const lidarSair = () => {
  localStorage.removeItem('isLoggedIn')
  window.dispatchEvent(new Event('storage'))
  roteador.push('/')
}

onMounted(() => {
  carregarDadosProfessor()
})
</script>

<style scoped>
*, *::before, *::after {
  box-sizing: border-box;
}

.box {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;
}

.card {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
  max-width: 750px;
  padding: 30px;
  font-family: sans-serif;
}

.avatar-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
}

.foto-box {
  width: 220px;
  height: 220px;
}

.foto {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.info-area {
  display: flex;
  flex-direction: column;
  gap: 28px;
  flex-grow: 1;
  width: 100%;
}

.lista-campos {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.linha {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7d7d7;
  padding: 14px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.15rem;
  color: #000;
  user-select: none;
  word-break: break-word;
}

.btn-icone {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 0 0 12px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.lapis {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.botoes {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.btn {
  background-color: #e38b93;
  color: #000;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  padding: 10px 28px;
  border-radius: 6px;
  cursor: pointer;
  transition: filter 0.2s;
  user-select: none;
  outline: none;
}

.btn:hover {
  filter: brightness(0.95);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 16px;
}

.modal {
  background-color: #ffffff;
  width: 100%;
  max-width: 440px;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: sans-serif;
}

.modal-topo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-topo h3 {
  margin: 0;
  font-size: 1.15rem;
  color: #1a1a1a;
  font-weight: 700;
}

.btn-fechar {
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: #666;
}

.modal-meio {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.modal-meio label {
  font-size: 0.9rem;
  color: #444;
  font-weight: 600;
}

.asterisco {
  color: #e53935;
}

.input-text {
  width: 100%;
  padding: 10px 14px;
  border: 2px solid #e38b93;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
}

.input-text:focus {
  border-color: #d17880;
}

.modal-baixo {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 600px) {
  .box {
    padding: 12px;
  }

  .card {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 15px;
  }

  .foto-box {
    width: 150px;
    height: 150px;
  }

  .linha {
    font-size: 1rem;
    padding: 12px 16px;
  }

  .botoes {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }

  .btn {
    width: 100%;
  }

  .modal {
    max-width: 100%;
    padding: 20px;
  }
}
</style>