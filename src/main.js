// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueKonva from 'vue-konva'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueKonva)
Vue.use(Axios)

Vue.prototype.$http = Axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
