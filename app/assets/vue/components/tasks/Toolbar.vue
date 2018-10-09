<template>
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
</template>

<script>
export default {
    computed: {
        tasks () {
            return this.$store.getters.allTasks
        },
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
}
</script>
