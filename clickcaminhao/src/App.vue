<template>
  <main>
    <navegacao-home></navegacao-home>
    <banner-home></banner-home>
    <texto-home></texto-home>
  </main>
</template>

<script>
import NavegacaoHome from './components/NavegacaoHome.vue';
import BannerHome from './components/BannerHome.vue';
import TextoHome from './components/TextoHome.vue';

export default {
  name: 'App',
  components: {
    NavegacaoHome,
    BannerHome,
    TextoHome
  }
}
</script>

<style>

  * {
    margin: 0px; padding: 0px;
  }

</style>
