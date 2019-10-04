<template lang="pug">
  div(class="header")
    div(class="shell")
      div(class="header__inner")
        a(
          href="/"
          class="logo"
          :style="cssProps"
        )
        Nav(class="header__content")
        a(
          href="#"
          class="nav-trigger"
        )
</template>

<script>
import Nav from './nav'

export default {
  name: 'Header',
  components: {
    Nav
  },
  data () {
    return {
      cssProps: {
        backgroundImage: `url(${require('../../assets/images/thallein-logo-no-back.png')})`
      }
    }
  }
}
</script>

<style lang="stylus">
.logo
  width 50px
  height 50px
  margin-top 5px
  display inline-block
  background-size cover
  background-position 50%

.nav-menu
  margin-left 12px
  padding 10px 0 0
  font-family Rubik,sans-serif
  font-weight 500
  color #fff
  text-transform capitalize

.nav-trigger
  position: relative
  display: none
  width: 30px
  height: 19px
  margin-top: 20px

.header .header__content, .header .header__inner
  display -webkit-box
  display -ms-flexbox
  display flex
  -webkit-box-pack justify
  justify-content space-between

.header
  -webkit-transition .5s
  -o-transition .5s
  transition .5s
  position absolute
  background-color #262626
  top 0
  left 0
  right 0
  z-index 20

.header .header__inner
  padding 0 100px

.header__content
  -webkit-box-flex 0
  flex 0 0 76.5%
  max-width 76.5%
  display flex!important
</style>
