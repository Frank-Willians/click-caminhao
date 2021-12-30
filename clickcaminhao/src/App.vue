<template>
  <main>
    <router-view></router-view>
    <footer-home></footer-home>
  </main>
</template>

<script>
import FooterHome from './components/FooterHome.vue';

export default {
  name: 'App',
  components: {
    FooterHome
  }
}
</script>

<style>

  * {
    margin: 0px; padding: 0px;
  }

</style>
