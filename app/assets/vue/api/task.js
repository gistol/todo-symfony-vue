import axios from 'axios'

export default {
    create (title, description) {
        return axios.post('api/task/create', {
            title,
            description
        })
    },
    edit (id, title, description) {
        return axios.post('api/task/edit', {
            id,
            title,
            description
        })
    },
    getAll () {
        return axios.get('api/tasks')
    }
}