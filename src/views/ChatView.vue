<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const logado = localStorage.getItem('isLoggedIn') === 'true'
const usuario = JSON.parse(localStorage.getItem('userData') || '{}')
const meuNome = usuario.name || 'Visitante'
const souProfessor = usuario.role === 'professor'

const mensagens = ref([])
const texto = ref('')
const arquivo = ref(null)
const caixa = ref(null)

function carregar() {
  const salvo = localStorage.getItem('mensagensChat')
  if (salvo) {
    mensagens.value = JSON.parse(salvo)
  }
  rolarParaBaixo()
}

function salvar() {
  localStorage.setItem('mensagensChat', JSON.stringify(mensagens.value))
}

function rolarParaBaixo() {
  nextTick(() => {
    if (caixa.value) {
      caixa.value.scrollTop = caixa.value.scrollHeight
    }
  })
}

onMounted(() => {
  carregar()
  window.addEventListener('storage', carregar)
})

onUnmounted(() => {
  window.removeEventListener('storage', carregar)
})

function escolherArquivo(evento) {
  const arq = evento.target.files[0]
  if (!arq) return

  if (arq.size > 1000000) {
    alert('Arquivo muito grande! O máximo é 1 MB.')
    evento.target.value = ''
    return
  }

  const leitor = new FileReader()
  leitor.onload = () => {
    arquivo.value = { nome: arq.name, dados: leitor.result }
  }
  leitor.readAsDataURL(arq)
}

function enviar() {
  if (texto.value.trim() === '' && arquivo.value === null) {
    return
  }

  mensagens.value.push({
    autor: meuNome,
    professor: souProfessor,
    texto: texto.value,
    arquivo: arquivo.value,
    hora: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
  })

  try {
    salvar()
  } catch {
    mensagens.value.pop()
    alert('Não deu para enviar: o espaço do navegador acabou.')
    return
  }

  texto.value = ''
  arquivo.value = null
  document.getElementById('campoArquivo').value = ''
  rolarParaBaixo()
}
</script>

<template>
  <div class="pagina">
    <div v-if="!logado">
      <h1>Conversas</h1>
      <p>Entre na sua conta para usar o chat.</p>
      <RouterLink to="/login-pag">Entrar</RouterLink>
    </div>

    <div v-else>
      <h1>Conversas</h1>
      <p>Você está como: {{ meuNome }} ({{ souProfessor ? 'professor' : 'aluno' }})</p>

      <div class="caixa" ref="caixa">
        <p v-if="mensagens.length === 0">Nenhuma mensagem ainda.</p>

        <div v-for="(m, posicao) in mensagens" :key="posicao" class="mensagem">
          <strong>{{ m.autor }}</strong>
          <span v-if="m.professor"> (professor)</span>

          <p v-if="m.texto">{{ m.texto }}</p>

          <a v-if="m.arquivo" :href="m.arquivo.dados" :download="m.arquivo.nome">
            📎 {{ m.arquivo.nome }}
          </a>
        </div>
      </div>

      <p v-if="arquivo">Arquivo escolhido: {{ arquivo.nome }}</p>

      <div>
        <input id="campoArquivo" type="file" @change="escolherArquivo" />
      </div>

      <div>
        <input v-model="texto" @keyup.enter="enviar" placeholder="Digite sua mensagem" />
        <button @click="enviar">Enviar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pagina {
  max-width: 700px;
  margin: 20px auto;
  padding: 0 16px;
}

.caixa {
  height: 350px;
  overflow-y: auto;
  border: 2px solid black;
  padding: 10px;
  margin-bottom: 10px;
  background: white;
}

.mensagem {
  border-bottom: 1px solid #ccc;
  padding: 6px 0;
}
</style>