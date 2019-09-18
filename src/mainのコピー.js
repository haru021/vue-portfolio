import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')




import router from './router.js'
new Vue({
  el: '#app',
  router, //アプリケーションに登録
  render: h => h(App)
})