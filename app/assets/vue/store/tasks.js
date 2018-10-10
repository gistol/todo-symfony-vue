import TaskAPI from '../api/task'

class Task {
  constructor (title, description, completed, created = null, id = null) {
    this.title = title
    this.description = description
    this.completed = completed
    this.created = created
    this.id = id
  }
}

export default {
  state: {
    tasks: [],
    isLoading: false,
    error: null
  },
  mutations: {
    loadTasks (state) {
      state.isLoading = true
      state.error = null
      state.tasks = []
    },
    loadTasksSuccess (state, payload) {
      state.isLoading = false
      state.error = null
      state.tasks = payload
    },
    loadTasksError (state, payload) {
      state.isLoading = false
      state.error = payload
      state.tasks = []
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
      commit('loadTasks')
      TaskAPI.getAll()
        .then(res => commit('loadTasksSuccess', res.data))
        .catch(err => commit('loadTasksError', err))
    },
    createTask ({commit}, {title, description, completed}) {
      const task = new Task(title, description, completed)
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
    isLoading (state) {
      return state.isLoading
    },
    hasError (state) {
      return state.error !== null
    },
    allTasks (state) {
      return state.tasks
    }
  }
}