<template>
  <main>
    <navegacao-home></navegacao-home>
    <banner-home></banner-home>
  </main>
</template>

<script>
import NavegacaoHome from './components/NavegacaoHome.vue';
import BannerHome from './components/BannerHome.vue';

export default {
  name: 'App',
  components: {
    NavegacaoHome,
    BannerHome
  }
}
</script>

<style>

  * {
    margin: 0px; padding: 0px;
  }

</style>
