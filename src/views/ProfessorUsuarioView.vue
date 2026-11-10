<template>
  <div class="box">
    <div class="card">
      <div class="info-area">
        <h2>Painel do Professor</h2>
        
        <div class="linha">
          <span>Nome: {{ usuario.nome }}</span>
        </div>

        <div class="linha">
          <span>E-mail: {{ usuario.email }}</span>
        </div>

        <div class="linha">
          <span>Matéria: {{ usuario.materia }}</span>
        </div>

        <div class="linha">
          <span>Escola: {{ usuario.escola }}</span>
        </div>

        <div class="botoes">
          <button class="btn" @click="sair">Sair</button>
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
  background-color: #fefefe;
  font-family: sans-serif;
  padding: 20px;
}

.card {
  background-color: #fcd581;
  padding: 30px;
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
}

.info-area {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

h2 {
  color: #1a5660;
  text-align: center;
  margin-bottom: 10px;
}

.linha {
  background-color: white;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  color: #333;
}

.botoes {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.btn {
  background-color: #e65252;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}
</style>