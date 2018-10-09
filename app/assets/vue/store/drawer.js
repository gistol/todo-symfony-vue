export default {
    state: {
      drawer: false
    },
    mutations: {
        showDrawer (state, status) {
            state.drawer = status
        }
    },
    getters: {
      drawer (state) {
        return state.drawer
      }
    }
  }