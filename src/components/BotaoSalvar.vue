<script setup>
defineProps({
  isSalvo: Boolean
})
defineEmits(['salvar'])
</script>

<template>
  <button class="botao-salvar" type="button" @click.stop="$emit('salvar')">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      :fill="isSalvo ? '#e74c3c' : 'none'"
      stroke="#1a1a1a"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  </button>
</template>

<style scoped>
.botao-salvar {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  transition: transform 0.2s ease;
}
.botao-salvar:hover {
  transform: scale(1.1);
}
</style>
