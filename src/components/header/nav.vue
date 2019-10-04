<template lang="pug">
  b-navbar(type="is-dark")
    template(slot="brand")
      b-navbar-item(tag="router-link" :to="{ path: '/' }")
        img(
          src="../../assets/images/thallein-logo-no-back.png"
          alt="Thallein Logo"
        )

    template(slot="start")
      b-navbar-dropdown(v-if="navItem.type === 'dropdown'" v-for="( navItem, index ) in navItems" :key="index" :label="navItem.label")
        b-navbar-item(v-for="( subItem, index ) in navItem.options" :key="index" :href="subItem.href") {{ subItem.linkText }}
      b-navbar-item(
        v-else-if="navItem.type === 'single'"
        :key="index"
        :href="navItem.href"
        class="nav-item"
      ) {{ navItem.linkText }}

    template(slot="end")
        b-navbar-item(tag="div")
          div(class="buttons")
            a(class="button is-light") Log in
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
