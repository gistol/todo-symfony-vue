<template>
  <v-app>
    <v-layout row>
      <v-flex class="pt-5" xs12 sm6 offset-sm3>
        <v-card>
          <toolbar></toolbar>
          <task></task>
        </v-card>
      </v-flex>
    </v-layout>
    <drawer></drawer>
    <info></info>
    <error></error>
  </v-app>
</template>

<script>
import Toolbar from './components/tasks/Toolbar'
import Task from './components/tasks/Task'
import Drawer from './components/tasks/Drawer'
import Info from './components/notifications/Info'
import Error from './components/notifications/Error'

export default {
  components: {
    Task,
    Toolbar,
    Drawer,
    Info,
    Error
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');

  .task-completed {
    text-decoration: line-through;
  }
</style>
