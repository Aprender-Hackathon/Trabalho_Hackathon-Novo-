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
            <span>Nome: {{ usuario.nome || 'Não informado' }}</span>
          </div>

          <div class="linha">
            <span>E-mail: {{ usuario.email || 'Não informado' }}</span>
          </div>

          <div class="linha">
            <span>Matéria: {{ usuario.materia || 'Não informada' }}</span>
          </div>

          <div class="linha">
            <span>Escola: {{ usuario.escola || 'Não informada' }}</span>
          </div>
        </div>

        <div class="botoes">
          <button class="btn" type="button" @click="sair">Sair</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const roteador = useRouter()

const usuario = reactive({
  nome: '',
  email: '',
  materia: '',
  escola: ''
})

onMounted(() => {
  const dadosSalvos = localStorage.getItem('userData')
  if (dadosSalvos) {
    const prof = JSON.parse(dadosSalvos)
    usuario.nome = prof.nome
    usuario.email = prof['email-instituicao'] || prof.email
    usuario.materia = prof.materia
    usuario.escola = prof.escola
  }
})

const sair = () => {
  localStorage.removeItem('userData')
  localStorage.removeItem('isLoggedIn')
  window.dispatchEvent(new Event('auth-change'))
  roteador.push('/')
}
</script>

<style scoped>
.box {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.card {
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 650px;
  padding: 30px;
  font-family: sans-serif;
}

.avatar-area {
  flex-shrink: 0;
}

.foto-box {
  width: 180px;
  height: 180px;
}

.foto {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
  background-color: #ccc;
}

.info-area {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.lista-campos {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.linha {
  background-color: #f7d7d7;
  padding: 12px 18px;
  border-radius: 8px;
  font-weight: 600;
  color: #000;
}

.botoes {
  display: flex;
  justify-content: flex-end;
}

.btn {
  background-color: #e38b93;
  color: #000;
  font-weight: bold;
  border: none;
  padding: 10px 24px;
  border-radius: 6px;
  cursor: pointer;
}

@media (max-width: 600px) {
  .card {
    flex-direction: column;
    gap: 20px;
  }
}
</style>