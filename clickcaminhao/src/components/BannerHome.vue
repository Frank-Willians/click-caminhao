<template>
  <section class="secaoFotoHome">
    <div class="centralizaParagrafo">
       <p class="p-foto">Use a Click Caminhão para fazer as melhores escolhas.</p>
    </div> 
  </section>
</template>

<script>
export default {
  name: "BannerHome"
}
</script>

<style scope>
  .secaoFotoHome {
    height: 95vh;
    width: 100vw;
    background-image: url(".././assets/banner-clickCaminhao-2.jpg");
  }

  .centralizaParagrafo {
    height: 100%;
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  .p-foto {
    font-family: roboto,sans-serif;
    font-size: 72px;
    color: #141414;
    width: 800px;
  }

</style>