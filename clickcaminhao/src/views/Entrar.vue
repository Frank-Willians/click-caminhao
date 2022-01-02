<template>
  <main>
  <navegacao-cadastrar></navegacao-cadastrar>  
  <formulario-entrar></formulario-entrar>
  </main>
</template>

<script>
  import FormularioEntrar from "../components/FormularioEntrar.vue";
  import NavegacaoCadastrar from "../components/NavegacaoCadastrar.vue";

  export default {
   name: "Entrar",
   components: {
     NavegacaoCadastrar,
     FormularioEntrar
   }
  }
</script>

<style>

</style>