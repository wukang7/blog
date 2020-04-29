// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/style.css'
import router from './router'
import Header from './components/header'
import Footer from './components/footer'
Vue.config.productionTip = false

Vue.component("f-header", Header)
Vue.component("f-footer", Footer)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
