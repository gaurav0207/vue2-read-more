import Vue from 'vue'
import App from './App.vue'
import readMore from './index'

Vue.use(readMore)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
