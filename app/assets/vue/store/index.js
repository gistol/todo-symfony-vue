import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './tasks'
import drawer from './drawer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {tasks, drawer}
})