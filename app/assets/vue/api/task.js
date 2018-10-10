import axios from 'axios'

export default {
    create (title, description) {
        return axios.post('api/task/create', {
            title,
            description
        })
    },
    getAll () {
        return axios.get('api/tasks')
    }
}