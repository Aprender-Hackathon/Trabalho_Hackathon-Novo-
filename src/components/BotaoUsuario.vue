<template>
  <router-link to="/usuario" class="btn-usuario" title="Ir para o Usuário">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="48"
      height="48"
      fill="none"
      stroke="#d9534f"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  </router-link>
</template>

<style scoped>
.btn-usuario {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 12px;
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.2s;
}

.btn-usuario:hover {
  transform: scale(1.05);
}
</style>
