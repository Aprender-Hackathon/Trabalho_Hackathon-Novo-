<script setup>
import { reactive, onMounted } from 'vue'

const usuario = reactive({
  id: '',
  nome: '',
  email: '',
  materia: '',
  escola: '',
})

const ehProfessor = computed(() => usuario.role === 'professor')

onMounted(() => {
  const dadosSalvos = localStorage.getItem('userData')
  if (dadosSalvos) {
    try {
      const prof = JSON.parse(dadosSalvos)
      usuario.id = prof.id || ''
      usuario.nome = prof.nome || ''
      usuario.email = prof.email || ''
      usuario.materia = prof.materia || ''
      usuario.escola = prof.escola || ''
    } catch (e) {
      console.error('Erro ao ler userData do localStorage', e)
    }
  }
})
</script>

<template>
  <div class="usuario-page" style="padding: 2rem;">
    <!-- Informações do Responsável -->
    <div class="perfil-info" style="margin-bottom: 2rem; background: #fff; padding: 1.5rem; border-radius: 16px;">
      <h2>Perfil do Responsável</h2>
      <p><strong>Nome:</strong> {{ usuario.nome || 'Não informado' }}</p>
      <p><strong>E-mail:</strong> {{ usuario.email || 'Não informado' }}</p>
    </div>
  </div>
</template>
