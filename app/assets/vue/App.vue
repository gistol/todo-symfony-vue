<template>
    <v-app>
        <v-layout row>
            <v-flex class="pt-5" xs12 sm6 offset-sm3>
                <v-card>
                    <toolbar></toolbar>
                    <task tasks="tasks"></task>
                </v-card>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>
import Toolbar from './components/tasks/Toolbar'
import Task from './components/tasks/Task'

export default {
    data () {
        return {
            tasks: [
                {id: 1, title: 'first task', description: 'Description first task', completed: true},
                {id: 2, title: 'second task', description: 'Description second task', completed: false},
                {id: 3, title: 'third task', description: 'Description third task', completed: false}
            ]
        }
    },
    computed: {
        checkedAll () {
            return this.tasks.filter(item => item.completed).length === this.tasks.length
        }
    },
    methods: {
        checkTasks () {
            const complete = !this.checkedAll
            this.tasks.map(item => item.completed = complete)
        }
    },
    components: {
        Task,
        Toolbar
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');

    .task-completed {
        text-decoration: line-through;
    }
</style>
