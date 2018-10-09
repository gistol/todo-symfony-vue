export default {
  state: {
    tasks: []
  },
  mutations: {
    loadTasks (state, payload) {
      state.tasks = payload
    },
    editTask (state, {id, title, description}) {
      const task = state.tasks.find(item => item.id === id)
      task.title = title
      task.description = description
    },
    deleteTask (state, id) {
      state.tasks = state.tasks.filter(item => item.id !== id)
    }
  },
  actions: {
    fetchTasks ({commit}) {
      const tasks = [
          {id: 1, title: 'first task', description: 'Description first task', completed: true},
          {id: 2, title: 'second task', description: 'Description second task', completed: false},
          {id: 3, title: 'third task', description: 'Description third task', completed: false}
      ]

      commit('loadTasks', tasks)
    },
    editTask ({commit}, {id, title, description}) {
      commit('editTask', {id, title, description})
    },
    deleteTask ({commit}, {id}) {
      commit('deleteTask', id)
    }
  },
  getters: {
    allTasks (state) {
      return state.tasks
    }
  }
}