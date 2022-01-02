<template>
    <main  class="formularioEntrar">
      <form action="" class="formularioEntrar__form">

        <p class="formularioEntrar__titulo">Login</p>

        <div class="formularioEntrar__centralizaForm">

        <label for="email" class="formularioEntrar__rotulo">Email</label>
        <input type="text" id="email" class="formularioEntrar__input" placeholder="E-mail" />
        <span></span>

        <label for="senha" class="formularioEntrar__rotulo">Senha</label>
        <input type="text" id="senha" class="formularioEntrar__input" placeholder="Senhal" />
        <span></span>

        <input type="submit" id="" class="formularioEntrar__submeter"/>
        <span></span>

        </div>
      
      </form>
    </main>  
</template>

<script>
  export default {
    name: "FormularioEntrar"
  }
</script>

<style scope>

  .formularioEntrar {
    height: 100vh;
    width: 100vw;
  }

  .formularioEntrar__form {
    height: 100%;
    max-width: 80%;
    background-color: #F4F6F6;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .formularioEntrar__titulo {
    margin: 0 auto;
    margin-top: 50px;
  }

  .formularioEntrar__centralizaForm {
    height: 100%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -50px;
  }

  .formularioEntrar__rotulo {
    margin-top: 15px;
    font-family: roboto,sans-serif;
  }

  .formularioEntrar__input {
    padding: 15px;
    margin-top: 10px;
    font-family: roboto, arial, helvetica;
  }

  .formularioEntrar__input:focus {
    border: 2px solid #18a0fb;
    outline: none;
  }

  .formularioEntrar__submeter {
    padding: 15px;
    margin-top: 20px;
    background-color: #18a0fb;
    border: 1px solid #18a0fb;
    outline: none;
    color: #ffffff;
  }

</style>