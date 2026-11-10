<script setup>
defineProps({
  isSalvo: Boolean,
  size: {
    type: String,
    default: 'M',
    validator: (value) => ['S', 'M', 'L'].includes(value)
  }
})
defineEmits(['salvar'])
</script>

<template>
  <button
    class="botao-salvar"
    type="button"
    :class="[`botao-salvar--${size}`, { 'is-active': isSalvo }]"
    @click="$emit('salvar')"
  >
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
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  color: #ccc;
}

.botao-salvar:hover {
  transform: scale(1.05);
}

.botao-salvar:active {
  transform: scale(1.1);
}

.botao-salvar.is-active {
  color: #e74c3c;
}

.botao-salvar.is-active svg {
  fill: #e74c3c;
}

.botao-salvar--S {
  padding: 8px;
}

.botao-salvar--S svg {
  width: 24px;
  height: 24px;
}

.botao-salvar--M {
  padding: 12px;
}

.botao-salvar--M svg {
  width: 36px;
  height: 36px;
}

.botao-salvar--L {
  padding: 16px;
}

.botao-salvar--L svg {
  width: 48px;
  height: 48px;
}

</style>
