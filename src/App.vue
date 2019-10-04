<template lang="pug">
  div(id="app")
    head
      link(rel="shortcut icon" type="image/x-icon" href="favicon.ico")
    Header
    RouterView
</template>

<script>
import Header from './components/header/header'

export default {
  name: 'app',
  components: {
    Header
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
  margin-top 60px
</style>
