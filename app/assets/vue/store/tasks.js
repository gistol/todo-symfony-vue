export default {
    state: {
        tasks: []
    },
    mutations: {
        loadTasks (state, payload) {
            state.tasks = payload
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
        }
    },
    getters: {
        allTasks (state) {
            return state.tasks
        }
    }
}