import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../src/style/reset.scss'
Vue.config.productionTip = false

import {
  Icon
} from "element-ui"

Vue.use(Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
