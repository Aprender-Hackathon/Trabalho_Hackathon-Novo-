<template>
  <div class="full-screen-container">
    <!-- Card Principal -->
    <div class="profile-card">
      <!-- Imagem de Perfil Importada de src/assets/user.png -->
      <div class="avatar-container">
        <img src="../assets/user.png" alt="Foto de perfil" class="avatar-img" />
      </div>

      <!-- Informações do Usuário -->
      <div class="info-container">
        <div class="fields-group">
          <!-- Campo Nome -->
          <div class="info-field">
            <span>{{ user.name || 'Informe seu nome' }}</span>
            <button class="icon-btn" type="button" title="Editar nome" @click="openModal('name')">
              <img src="../assets/pencil.png" alt="Editar" class="pencil-icon" />
            </button>
          </div>

          <!-- Campo E-mail -->
          <div class="info-field">
            <span>{{ user.email || 'Informe seu e-mail' }}</span>
            <button class="icon-btn" type="button" title="Editar e-mail" @click="openModal('email')">
              <img src="../assets/pencil.png" alt="Editar" class="pencil-icon" />
            </button>
          </div>
        </div>

        <!-- Botão Sair Fixo -->
        <div class="actions">
          <button class="pink-btn" type="button" @click="handleLogout">Sair</button>
        </div>
      </div>
    </div>

    <!-- Modal Pop-up para Edição -->
    <div v-if="activeField" class="modal-overlay" @click.self="closeModal">
      <div class="modal-card">
        <div class="modal-header">
          <h3>Alterar {{ activeField === 'name' ? 'nome' : 'e-mail' }}</h3>
          <button class="close-btn" type="button" @click="closeModal">✕</button>
        </div>

        <div class="modal-body">
          <label class="input-label">
            Novo {{ activeField === 'name' ? 'nome' : 'e-mail' }} <span class="required">*</span>
          </label>
          <input
            v-model="tempValue"
            class="modal-input"
            @keyup.enter="saveModal"
            autofocus
          />
        </div>

        <div class="modal-footer">
          <button class="pink-btn" type="button" @click="saveModal">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

/* Dados do usuário limpos sem nomes fakes */
const user = reactive({
  name: '',
  email: ''
})

const activeField = ref(null)
const tempValue = ref('')

const openModal = (field) => {
  activeField.value = field
  tempValue.value = user[field]
}

const closeModal = () => {
  activeField.value = null
  tempValue.value = ''
}

const saveModal = () => {
  if (activeField.value) {
    user[activeField.value] = tempValue.value
  }
  closeModal()
}

const handleLogout = () => {
  alert('Sessão encerrada!')
}
</script>

<style scoped>
/* Container Tela Cheia */
.full-screen-container {
  width: 100vw;
  height: 100vh;
  background-color: #faf7f2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
}

/* Card Principal */
.profile-card {
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 700px;
  padding: 30px;
  font-family: sans-serif;
  box-sizing: border-box;
}

.avatar-container {
  width: 290px;
  height: 270px;
  flex-shrink: 0;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 28px;
  flex-grow: 1;
}

.fields-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-field {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7d7d7;
  padding: 14px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.15rem;
  color: #000;
  user-select: none;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 0 0 12px;
  display: flex;
  align-items: center;
}

.pencil-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.actions {
  display: flex;
  justify-content: flex-end;
}


.pink-btn {
  background-color: #e38b93;
  color: #000;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  padding: 10px 28px;
  border-radius: 6px;
  cursor: pointer;
  transition: filter 0.2s;
  user-select: none;
  outline: none;
}

.pink-btn:hover {
  filter: brightness(0.95);
}


.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-card {
  background-color: #ffffff;
  width: 90%;
  max-width: 440px;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: sans-serif;
  box-sizing: border-box;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h3 {
  margin: 0;
  font-size: 1.15rem;
  color: #1a1a1a;
  font-weight: 700;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: #666;
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.input-label {
  font-size: 0.9rem;
  color: #444;
  font-weight: 600;
}

.required {
  color: #e53935;
}

.modal-input {
  width: 100%;
  padding: 10px 14px;
  border: 2px solid #e38b93;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  box-sizing: border-box;
}

.modal-input:focus {
  border-color: #d17880;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
