<template>
  <button
    class="heart-button"
    :class="[
      `heart-button--${size}`,
      /*`heart-button--${color}`,*/
      { 'is-active': isLiked }
    ]"
    @click="toggleLike"
  >
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  </button>
</template>

<script setup>
import { ref } from 'vue'

// adicionando as propriedades de tamanho e cor
defineProps({
  size: {
    type: String,
    default: 'M',
    validator: (value) => ['S', 'M', 'L'].includes(value)
  } /*,

  color: {
    type: String,
    default: 'red',
    validator: (value) =>
      ['gray', 'red', 'black', 'blue'].includes(value)
  } */
})

const isLiked = ref(false)

const toggleLike = () => {
  isLiked.value = !isLiked.value
}

</script>

<style scoped>
.heart-button {
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 8px;
  transition: transform 0.2s ease;
  color: #ccc;
}

.heart-button:hover {
  transform: scale(1.05);
}
.heart-button:active{
    transform: scale(1.1);
}

.heart-button.is-active {
  color: #e74c3c;
}

.heart-button.is-active svg {
  fill: #e74c3c;
}


/*
Tamanho aceito para adicionar no Botão
Tamanhos: S = pequeno, M = médio e L = grande */

.heart-button--S {
  padding: 8px;
}

.heart-button--S svg {
  width: 24px;
  height: 24px;
}

.heart-button--M {
  padding: 12px;
}

.heart-button--M svg {
  width: 36px;
  height: 36px;
}

.heart-button--L {
  padding: 16px;
}

.heart-button--L svg {
  width: 48px;
  height: 48px;
}

/* Cores aplicadas quando o coração está ativo
Serão aceita cores cinza, vermelho, preto e azul 

.heart-button--gray.is-active {
  color: gray;
}

.heart-button--red.is-active {
  color: #e74c3c;
}

.heart-button--black.is-active {
  color: #000000;
}

.heart-button--blue.is-active {
  color: #3498db;
}

.heart-button.is-active svg {
  fill: currentColor;
} */

</style>
