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
    loading (state) {
      state.isLoading = true
      state.error = null
    },
    error (state, payload) {
      state.isLoading = false
      state.error = payload
      state.tasks = []
    },
    loadTasks (state, payload) {
      state.isLoading = false
      state.error = null
      state.tasks = payload
    },
    createTask (state, payload) {
      state.isLoading = false
      state.error = null
      state.tasks.unshift(payload)
    },
    editTask (state, {id, title, description}) {
      state.isLoading = false
      state.error = null
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
      commit('loading')
      TaskAPI.getAll()
        .then(res => commit('loadTasks', res.data))
        .catch(error => commit('error', error))
    },
    createTask ({commit}, {title, description}) {
      commit('loading')
      return TaskAPI.create(title, description)
        .then(res => commit('createTask', res.data))
        .catch(error => commit('error', error))
    },
    async editTask ({commit}, {id, title, description}) {      
      await TaskAPI.edit(id, title, description)
        .then(res => commit('editTask', res.data))
        .catch(error => commit('error', error))
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