<template>
    <v-app>
        <v-layout row>
            <v-flex class="pt-5" xs12 sm6 offset-sm3>
                <v-card>
                    <v-toolbar color="blue" dark>
                        <v-btn icon @click="checkTasks">
                            <v-icon :class="{'green--text': checkedAll}">check_circle</v-icon>
                        </v-btn>
                        <v-toolbar-title>Task list</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn flat>
                            Add Task
                        </v-btn>
                    </v-toolbar>
                    <v-list two-line>
                        <template v-for="(item, index) in tasks">
                            <v-list-tile :key="item.id">
                                <v-list-tile-action>
                                    <v-checkbox v-model="item.completed"></v-checkbox>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title :class="{'task-completed': item.completed}">{{ item.title }}</v-list-tile-title>
                                    <v-list-tile-sub-title class="text--primary">{{ item.description }}</v-list-tile-sub-title>
                                </v-list-tile-content>
                                <v-list-tile-action v-if="false">
                                    <v-btn icon>
                                        <v-icon small color="grey">edit</v-icon>
                                    </v-btn>
                                </v-list-tile-action>
                                <v-list-tile-action>
                                    <v-btn icon>
                                        <v-icon small color="red">delete</v-icon>
                                    </v-btn>
                                </v-list-tile-action>
                            </v-list-tile>
                            <v-divider v-if="index + 1 < tasks.length" :key="`divider-${index}`"></v-divider>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>
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
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');

    .task-completed {
        text-decoration: line-through;
    }
</style>
