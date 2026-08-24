<template>
  <div class="button-group">
    <router-link to="/entrar" class="btn">Entrar</router-link>
    <router-link to="/cadastrar" class="btn">Cadastro</router-link>
  </div>
</template>

<style scoped>
.button-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 130px;
  padding: 10px 24px;
  border: 3px solid #5d5d5d;
  border-radius: 12px;
  background-color: transparent;
  color: #5d5d5d;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 22px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:hover {
  background-color: #5d5d5d;
  color: #ffffff;
}
</style>