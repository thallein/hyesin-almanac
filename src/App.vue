<template lang="pug">
  div(id="app")
    Nav
    RouterView
</template>

<script>
import Nav from './components/header/nav'

export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
