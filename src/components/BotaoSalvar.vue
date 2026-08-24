<template>
  <button
    class="btn-salvar"
    type="button"
    @click="clicouNoBotao"
  >

    <svg
      viewBox="0 0 24 24"
      class="coracao-icon"
      :fill="isSalvo ? '#E25B45' : 'none'"
      stroke="#E25B45"
      stroke-width="2"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  </button>
</template>

<script setup>
defineProps({
  isSalvo: Boolean,
  size: String
})

const emit = defineEmits(['salvar'])

function clicouNoBotao() {
  emit('salvar') 
}
</script>

<style scoped>
.btn-salvar {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.coracao-icon {
  width: 32px;
  height: 32px;
  transition: fill 0.2s ease;
}
</style>
