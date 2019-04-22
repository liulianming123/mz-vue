import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import Store from './store/index'

Vue.config.productionTip = false

new Vue({
  store: Store,
  router,
  render: h => h(App)
}).$mount('#app')
