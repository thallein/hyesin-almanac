import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

// Importing Global Styles
import './assets/css/app.styl'
import './assets/css/section.styl'

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  apolloProvider: createProvider(),
  router,
  render: h => h(App)
}).$mount('#app')
