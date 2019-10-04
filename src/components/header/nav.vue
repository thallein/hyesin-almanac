<template lang="pug">
  ul(class="nav-menu")
    li(class="nav-item" v-for="( navItem, index ) in navItems" :key="index")
      a(:href="navItem.href") {{ navItem.linkText }}
</template>

<script>
import navItems from '../../assets/content/nav-items.js'

export default {
  data () {
    return {
      navItems
    }
  }
}
</script>

<style lang="stylus">
.nav-menu ul
  display flex
  font-size 16px

.nav-item
  list-style none outside none
  padding-top 4px

.nav-item:hover
  color #a22a7a

.nav-item a
  text-decoration none
  transition opacity .4s ease
</style>
