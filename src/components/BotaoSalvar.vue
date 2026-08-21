<template>
  <button
    class="heart-button"
    :class="{ 'is-active': isLiked }"
    :size="aa"
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

const isLiked = ref(false)

const toggleLike = () => {
  isLiked.value = !isLiked.value
}

const size = () => {
    return('aaaa')
};

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
  transform: scale(1.1);
}
.heart-button:active{
    transform: scale(1.3);
}

.heart-button.is-active {
  color: #e74c3c;
}

.heart-button.is-active svg {
  fill: #e74c3c;
}

</style>