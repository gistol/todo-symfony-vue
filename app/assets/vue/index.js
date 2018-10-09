import Vue from 'vue'
import App from './App'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
  created () {
    this.$store.dispatch('fetchTasks')
  }
})