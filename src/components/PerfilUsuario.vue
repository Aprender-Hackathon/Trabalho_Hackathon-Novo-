<template>
  <div class="profile-card">
    <!-- Coluna da Esquerda: Avatar -->
    <div class="avatar-container">
      <svg class="avatar-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-3.8-.85-5.05-2.2.04-1.67 3.36-2.58 5.05-2.58 1.68 0 5.01.91 5.05 2.58C15.8 19.15 14.03 20 12 20z"/>
      </svg>
    </div>

    <!-- Coluna da Direita: Informações -->
    <div class="info-container">
      <div class="fields-group">
        <div class="info-field">
          <span>{{ user.name }}</span>
          <button class="edit-btn">✏️</button>
        </div>

        <div class="info-field">
          <span>{{ user.email }}</span>
          <button class="edit-btn">✏️</button>
        </div>
      </div>

      <button class="logout-btn" @click="handleLogout">Sair</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const user = reactive({
  name: 'Maria da Silva',
  email: 'mariadasilva@gmail.com'
})

const handleLogout = () => {
  alert('Sessão encerrada!')
}
</script>

<style scoped>
.profile-card {
  display: flex;
  align-items: center;
  gap: 32px;
  background-color: #faf7f2;
  padding: 40px;
  border-radius: 8px;
  max-width: 500px;
  font-family: sans-serif;
}

.avatar-container {
  width: 140px;
  height: 140px;
  flex-shrink: 0;
}

.avatar-icon {
  width: 100%;
  height: 100%;
  color: #cccccc;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 36px;
  flex-grow: 1;
}

.fields-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-field {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7d7d7;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 600;
  color: #000;
}

.edit-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.logout-btn {
  align-self: flex-end;
  background-color: #e38b93;
  color: #000;
  font-weight: bold;
  border: none;
  padding: 8px 24px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
