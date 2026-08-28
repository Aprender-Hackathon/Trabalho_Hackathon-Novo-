<script setup>
defineProps({
    docx: String
});
</script>

<template>
    <div>
        <a :href="docx" download>
            Baixar .docx
            <img src="/images/baixar.svg" alt="Baixar">
        </a>
    </div>
</template>

<style scoped>

a {
    background-color: #D1495B;
    color: #FFFBF6;
    text-decoration: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    border-radius: 15px;
    font-size: 1.8vw;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 400;
    gap: 10px;
    transition: transform 0.1s ease;
}

a:hover {
  transform: scale(1.05);
}

a:active {
    transform: scale(1.08);
}

@media (max-width: 600px) {
    a {
        width: 100%;
        box-sizing: border-box;
        font-size: 1rem;
    }
}
</style>