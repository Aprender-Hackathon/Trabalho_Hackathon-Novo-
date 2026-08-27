<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { renderAsync } from 'docx-preview'
const props = defineProps({
  arquivo: {
    type: String,
    required: true
  }
})
const preview = ref(null)
const erro = ref(false)
async function carregarDocumento() {
  try {
    erro.value = false
    const resposta = await fetch(props.arquivo)
    if (!resposta.ok) {
      throw new Error('Não foi possível carregar o arquivo DOCX')
    }
    const blob = await resposta.blob()
    await renderAsync(
      blob,
      preview.value,
      null,
      {
        className: 'docx',
        inWrapper: true,
        breakPages: true,
        ignoreWidth: false,
        ignoreHeight: false,
        renderHeaders: true,
        renderFooters: true
      }
    )
    await nextTick()
    setTimeout(() => {
      ajustarPrevia()
    }, 150)
  } catch (erroCarregamento) {
    console.error('Erro ao carregar DOCX:', erroCarregamento)
    erro.value = true
  }
}
function ajustarPrevia() {
  if (!preview.value) return
  const wrapper = preview.value.querySelector('.docx-wrapper')
  if (!wrapper) {
    console.error('DOCX wrapper não encontrado')
    return
  }
  const pagina = wrapper.querySelector('section.docx')
  if (!pagina) {
    console.error('Página do DOCX não encontrada')
    return
  }
  const todasPaginas = wrapper.querySelectorAll('section.docx')
  todasPaginas.forEach((paginaAtual, index) => {
    if (index > 0) {
      paginaAtual.style.display = 'none'
    }
  })
  const larguraPagina = pagina.offsetWidth
  if (!larguraPagina) {
    console.error('Não foi possível descobrir a largura da página')
    return
  }
  const larguraCard = preview.value.clientWidth
  const margem = 6
  const escala =
    (larguraCard - margem) / larguraPagina
  wrapper.style.position = 'absolute'
  wrapper.style.top = '0'
  wrapper.style.left = '0'
  wrapper.style.width = '100%'
  wrapper.style.height = '100%'
  wrapper.style.padding = '0'
  wrapper.style.margin = '0'
  wrapper.style.background = '#f3f3f3'
  wrapper.style.overflow = 'hidden'
  pagina.style.position = 'absolute'
  pagina.style.top = '0'
  pagina.style.left = '50%'
  pagina.style.margin = '0'
  pagina.style.transform =`translateX(-50%) scale(${escala})`
  pagina.style.transformOrigin ='top center'
  pagina.style.background = 'white'
  pagina.style.boxShadow ='0 1px 6px rgba(0, 0, 0, 0.18)'
  pagina.style.boxSizing = 'border-box'
  console.log('Prévia configurada:', {
    larguraPagina,
    larguraCard,
    escala
  })
}
onMounted(() => {
  carregarDocumento()
})
</script>

<template>
  <div class="preview-docx">
    <div
      v-if="erro"
      class="erro-preview"
    >
      Não foi possível carregar a prévia.
    </div>
    <div
      v-else
      ref="preview"
      class="documento-preview"
    ></div>
  </div>
</template>
<style>
.preview-docx {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f1f1f1;
}
.documento-preview {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.documento-preview .docx-wrapper {
  width: 100% !important;
  height: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
  overflow: hidden !important;
  background: #f1f1f1 !important;
}
.documento-preview .docx-wrapper > section.docx {
  background: #fff !important;
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
}
.documento-preview .docx-wrapper > section.docx ~ section.docx {
  display: none !important;
}
.erro-preview {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;
  text-align: center;
  color: #777;
  background: #f1f1f1;
}
</style>
