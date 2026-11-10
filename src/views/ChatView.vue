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

const posicaoEditando = ref(null)
const menuAberto = ref(null)
const textoEditado = ref('')

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
  document.addEventListener('click', fecharMenu)
})

onUnmounted(() => {
  window.removeEventListener('storage', carregar)
  document.removeEventListener('click', fecharMenu)
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
    editada: false,
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

function abrirMenu(posicao) {
  if (menuAberto.value === posicao) {
    menuAberto.value = null
  } else {
    menuAberto.value = posicao
  }
}

function fecharMenu() {
  menuAberto.value = null
}

function excluir(posicao) {
  menuAberto.value = null
  if (!confirm('Quer mesmo excluir esta mensagem?')) {
    return
  }

  mensagens.value.splice(posicao, 1)
  salvar()
  posicaoEditando.value = null
}

function comecarEdicao(posicao) {
  menuAberto.value = null
  posicaoEditando.value = posicao
  textoEditado.value = mensagens.value[posicao].texto
}

function cancelarEdicao() {
  posicaoEditando.value = null
}

function salvarEdicao(posicao) {
  const mensagem = mensagens.value[posicao]

  if (textoEditado.value.trim() === '' && !mensagem.arquivo) {
    alert('A mensagem não pode ficar vazia. Se quiser, exclua ela.')
    return
  }

  mensagem.texto = textoEditado.value
  mensagem.editada = true
  salvar()
  posicaoEditando.value = null
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
          <small v-if="m.editada"> (editada)</small>

          <div v-if="posicaoEditando === posicao">
            <input v-model="textoEditado" @keyup.enter="salvarEdicao(posicao)" />
            <button @click="salvarEdicao(posicao)">Salvar</button>
            <button @click="cancelarEdicao">Cancelar</button>
          </div>

          <p v-else-if="m.texto">{{ m.texto }}</p>

          <a v-if="m.arquivo" :href="m.arquivo.dados" :download="m.arquivo.nome">
            📎 {{ m.arquivo.nome }}
          </a>

          <div v-if="m.autor === meuNome && posicaoEditando !== posicao" class="menu">
            <button class="pontinhos" @click.stop="abrirMenu(posicao)">⋮</button>

            <div v-if="menuAberto === posicao" class="menu-lista">
              <button @click="comecarEdicao(posicao)">Editar</button>
              <button @click="excluir(posicao)">Excluir</button>
            </div>
          </div>
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
  position: relative;
}

.menu {
  position: absolute;
  top: 4px;
  right: 4px;
}

.pontinhos {
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
}

.menu-lista {
  position: absolute;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  z-index: 5;
}

.menu-lista button {
  background: none;
  border: none;
  padding: 8px 20px;
  text-align: left;
  cursor: pointer;
}

.menu-lista button:hover {
  background: #eee;
}
</style>