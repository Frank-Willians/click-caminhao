<template>
  <main class="formularioDeCadastroDeUsuario">
    <form action="#" class="formularioCadastrarUsuario">

      <p class="formularioCadastrarUsuario__titulo">Cadastrar Usuário</p>

      <div class="formularioCadastrarUsuario__centralizar">

        <label for="nome" class="formularioCadastrarUsuario__rotulo" title="Nome Completo">Nome Completo</label>
        <input type="text" class="formularioCadastrarUsuario__input" id="nome" placeholder=" Nome Completo">
        <span></span>
        
        <label for="cpf" class="formularioCadastrarUsuario__rotulo" title="CPF/CNPJ">CPF/CNPJ</label>
        <input type="text" class="formularioCadastrarUsuario__input" id="cpf" placeholder=" CPF/CNPJ">
        <span></span>
        
        <label for="telefone" class="formularioCadastrarUsuario__rotulo" title="Telefone">Telefone</label>    
        <input type="text" class="formularioCadastrarUsuario__input" id="telefone" placeholder=" Telefone">
        <span></span>

        <label for="email" class="formularioCadastrarUsuario__rotulo" title="E-mail">E-mail</label>
        <input type="email" class="formularioCadastrarUsuario__input" id="email" placeholder=" E-mail">
        <span></span>
        
        <label for="senha" class="formularioCadastrarUsuario__rotulo" title="Senha">Senha</label>  
        <input type="password" class="formularioCadastrarUsuario__input" id="senha" placeholder=" Senha">
        <span></span>

        <input type="submit" class="formularioCadastrarUsuario__submit">
      
      </div>
    </form>
  </main>
</template>

<script>
  export default {
    name: "FormularioCadastrarUsuario"
  }
</script>

<style>
  .formularioDeCadastroDeUsuario {
    height: 120vh;
    width: 100vw;
  }

  .formularioCadastrarUsuario {
    height: 110%;
    max-width: 80%;
    margin: 0 auto; 
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #F4F6F6;
  }

  .formularioCadastrarUsuario__titulo {
    margin: 0 auto;
    margin-top: 20px;
  }

  .formularioCadastrarUsuario__centralizar {
    height: 110%;
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: -30px;
  } 

  .formularioCadastrarUsuario__centralizar label {
    font-family: roboto,sans-serif;
    color: #000000;
    margin-top: 10px;
  }

  .formularioCadastrarUsuario__input {
    padding: 15px;
    font-family: "roboto,sans-serif";
    margin: 10px 0px;
    font-size: 1.2rem;
  }
  
  .formularioCadastrarUsuario__input:focus {
    outline: none;
    border: 2px solid #18a0fb;
  }


  .formularioCadastrarUsuario__submit {
    padding: 20px 0px;
    background-color: #18a0fb;
    color: #ffffff;
    outline: none;
    border: none;
    margin-top: 10px;
    border-radius: 2px;
  }

  .formularioCadastrarUsuario__submit:hover {
    opacity: .8;
  }

</style>