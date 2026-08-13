<template>
  <header class="custom-header">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid px-4 align-items-center">
        <a class="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#">
          <img src="/src/assets/img/logo_aprender.png" alt="Logo Aprender+" class="logo-img" />
          <span class="brand-text">Aprender+</span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#headerNavbar"
          aria-controls="headerNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="headerNavbar">
          <ul class="navbar-nav mx-auto align-items-center gap-2 my-2 my-lg-0">
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="#">
                <img src="/src/assets/img/casa.png" alt="Início" class="nav-icon" />
                <span>Início</span>
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link nav-link-highlight d-flex align-items-center gap-2 active"
                href="#"
              >
                <img src="/src/assets/img/explorar.png" alt="Explorar" class="nav-icon" />
                <span>Explorar</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="#">
                <img src="/src/assets/img/atividade.png" alt="Atividades" class="nav-icon" />
                <span>Atividades Práticas</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="#">
                <img src="/src/assets/img/sobre.png" alt="Sobre Nós" class="nav-icon" />
                <span>Sobre Nós</span>
              </a>
            </li>
          </ul>

          <div
            class="d-flex align-items-center gap-3 header-actions justify-content-center justify-content-lg-end mt-2 mt-lg-0"
          >
            <button class="btn-icon" aria-label="Favoritos">
              <img src="/src/assets/img/coracao.png" alt="Favoritos" class="action-icon" />
            </button>
            <button class="btn-icon" aria-label="Perfil">
              <img src="/src/assets/img/pessoa.png" alt="Perfil" class="action-icon" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
.custom-header {
  background-color: #fdfbf7;
  border-bottom: 1px solid #f0eae1;
  padding: 0.4rem 0;
}

.brand-text {
  color: #333333;
  font-size: 1.25rem;
  font-weight: 700;
}

.nav-link {
  color: #2c2c2c !important;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.4rem 0.8rem !important;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
}

.nav-link:hover {
  color: #e65261 !important;
}

.nav-link-highlight {
  border: 1.5px solid #e65261;
  color: #e65261 !important;
  border-radius: 10px;
  padding: 0.35rem 1.1rem !important;
  background-color: transparent;
}

.nav-link-highlight:hover {
  background-color: #fde8ea;
}

.btn-icon {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.btn-icon:hover {
  transform: scale(1.1);
}

/* Tamanhos das Imagens Ajustados */
.logo-img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.nav-icon {
  width: 30px !important;
  height: 30px !important;
  object-fit: contain;
}

.action-icon {
  width: 30px !important;
  height: 30px !important;
  object-fit: contain;
}
</style>
