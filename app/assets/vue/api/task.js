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
    delete (id) {
        return axios.post('api/task/remove', {
            id
        })
    },
    getAll () {
        return axios.get('api/tasks')
    }
}