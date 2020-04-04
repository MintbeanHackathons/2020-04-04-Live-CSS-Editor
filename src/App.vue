<template lang="pug">
  #app
    CustomCSS
</template>

<script>
import CustomCSS from './components/CustomCSS.vue'

export default {
  name: 'App',
  components: {
    CustomCSS
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
