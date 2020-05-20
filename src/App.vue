<template>
  <div id="app">
    <ProdsList/>
  </div>
</template>

<script>
import ProdsList from './components/ProdsList.vue'

export default {
  name: 'App',
  components: {
    ProdsList,
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
