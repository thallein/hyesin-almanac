import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home'

Vue.use(Router)

const routes = [
  { path: '/', component: Home },
  { path: '*', redirect: '/' }
]

export default new Router({
  routes: routes
})