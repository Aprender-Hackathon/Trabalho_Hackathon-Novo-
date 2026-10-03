<script setup>
import formularioAdd from '@/components/formularioAdd.vue';
</script>

 <template>
    <div>
        <h1>Formulário de Adição de Atividade</h1>
        <formulario-add/>
    </div>
 </template>

 <style scoped>
 div {
    margin: 2rem;
 }

 h1 {
    max-width: 990px;   /* <-- ajuste este número para alinhar com o formulário */
    margin: 0 auto 2rem;
    text-align: left;
 }
</style>
