<template>
    <div class="container">
        <h1>Escolha seu tipo de cadastro</h1>
        <div class="row">
            <div class="col-md-9">
                <RouterLink to="/cadastro-pag" class="btn btn-custom btn-sm fw-bold px-3">
                    Cadastrar como Aluno/Visitante
                </RouterLink>
            </div>
            <div class="col-md-6">
                <RouterLink to="/cadastro-professor" class="btn btn-custom btn-sm fw-bold px-3">
                    Cadastrar como Professor(a)
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  color: #1e6d77;
  padding: 4rem 4rem 5rem 1rem;
  text-align: center;
}

h1 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

.row {
  background-color: #fde896;
  border-radius: 36px;
  padding: 3rem 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
}

.col-md-9,
.col-md-6 {
  width: 100%;
  padding: 0;
}

.btn-custom {
  background-color: #e65261;
  border: 2px solid #e65261;
  color: white !important;
  border-radius: 25px;
  box-shadow: 0 4px 12px rgba(230, 82, 97, 0.25);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: block;
  width: 100%;
  padding: 0.8rem 1.2rem;
}

.btn-custom:hover {
  background-color: #f8959f;
  border-color: #ff7280;
  box-shadow: 0 6px 16px rgba(248, 149, 159, 0.35);
  transform: translateY(-2px);
}

.btn-custom:active {
  transform: translateY(0);
}

.btn-outline-custom {
  background-color: transparent;
  border: 2px solid #e65261;
  color: #ff7280 !important;
  border-radius: 25px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: block;
  width: 100%;
  padding: 0.8rem 1.2rem;
}

.btn-outline-custom:hover {
  background-color: #f8959f;
  border-color: #f8959f;
  color: white !important;
  transform: translateY(-2px);
}

.btn-outline-custom:active {
  transform: translateY(0);
}
</style>