import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  loading: './assets/img/common/bg.png',
  attempt: 1
  })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
