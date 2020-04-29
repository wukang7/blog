import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import home from '../pages/home'
import info from '../pages/info'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import '../assets/style.css'
Vue.use(Router)
Vue.use(ElementUI)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/info',
      name: 'info',
      component: info
    }
  ]
})
