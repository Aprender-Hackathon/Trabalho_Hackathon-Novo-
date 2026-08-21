<script setup>
defineProps({
    pdf: String
});
</script>

<template>
    <div>
        <a :href="pdf" download>
            Baixar PDF
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
    border-radius: 5px;
    font-size: 1.8vw;
    gap: 10px;
    font-family: 'Baloo 2';

    transition: transform 0.1s ease;
}

a:active {
    transform: scale(1.08);
}

@media (max-width: 600px) {
    a {
        width: 100%;
        box-sizing: border-box;
        font-size: 1.5rem;
    }
}
</style>