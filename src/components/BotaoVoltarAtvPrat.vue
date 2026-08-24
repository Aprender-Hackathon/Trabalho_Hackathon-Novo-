<template>
  <button class="back-btn" @click="goToAtividadesPraticas" aria-label="Voltar para Atividades Práticas">
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 8 8 12 12 16" />
    </svg>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToAtividadesPraticas = () => {
  router.push({ name: 'atividades-praticas' })
}
</script>

<style scoped>
.back-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #2c2c2c;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.back-btn:hover {
  opacity: 0.7;
  transform: scale(1.05);
}

.back-btn:active {
  transform: scale(0.95);
}
</style>
