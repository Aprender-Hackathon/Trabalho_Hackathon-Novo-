<template>
  <router-link to="/historico-pag" class="btn-adicionar">
    <svg
      class="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="12" y1="18" x2="12" y2="12" />
      <line x1="9" y1="15" x2="15" y2="15" />
    </svg>
    <span>Adicionar</span>
  </router-link>
</template>

<script>
export default {
  name: 'BotaoAdicionar'
}
</script>

<style scoped>
.btn-adicionar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: #a83244;
  color: #f7cbcf;
  padding: 12px 28px;
  border-radius: 16px;
  border: 4px solid #b83b4e;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  font-family: Arial, sans-serif;
  font-size: 28px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.btn-adicionar:hover {
  background-color: #932a3a;
}

.icon {
  width: 36px;
  height: 36px;
  stroke: #f7cbcf;
}
</style>
