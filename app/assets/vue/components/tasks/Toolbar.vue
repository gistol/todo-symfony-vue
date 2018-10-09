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
    
}
</script>
