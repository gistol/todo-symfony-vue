class Task {
  constructor (title, description, completed, date, id = null) {
    this.title = title
    this.description = description
    this.completed = completed
    this.date = date
    this.id = id
  }
}

export default {
  state: {
    tasks: []
  },
  mutations: {
    loadTasks (state, payload) {
      state.tasks = payload
    },
    createTask (state, payload) {
      state.tasks.push(payload)

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
    createTask ({commit}, {title, description, completed}) {
      const task = new Task(title, description, completed, '111', 212)
      commit('createTask', task)
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