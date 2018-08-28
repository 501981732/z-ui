<template>
  <div id="app">
    <h2>123</h2>
    <loading :show='true' text='四不四傻'></loading> 
  </div>
</template>

<script>
  // import loading from './lib/loading/loading.vue'
  export default {
    name: 'app',
    // components: {
    //   loading
    // },
    data () {
      return {
        
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}


</style>
