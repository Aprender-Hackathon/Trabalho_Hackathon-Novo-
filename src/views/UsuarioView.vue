<template>
  <div class="profile-container">
    <h2>Minha Conta</h2>
    

    <button class="logout-btn" @click="handleLogout">
      Sair da Conta
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = () => {

  localStorage.removeItem('isLoggedIn')

  window.dispatchEvent(new Event('storage'))

  router.push('/')
}
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 20px;
}

.logout-btn {
  background-color: #e65252;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 24px;
  font-weight: bold;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.logout-btn:hover {
  background-color: #c93b3b;
  transform: scale(1.03);
}
</style>