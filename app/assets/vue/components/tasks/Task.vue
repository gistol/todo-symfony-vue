<template>
  <v-list two-line v-if="hasTasks">
    <template v-for="(item, index) in tasks">
      <v-list-tile :key="item.id">
        <v-list-tile-action>
          <v-checkbox v-model="item.completed"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title :class="{'task-completed': item.completed}">{{ item.title }}</v-list-tile-title>
          <v-list-tile-sub-title class="text--primary">{{ item.description }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action v-if="true">
          <edit-modal :task="item"></edit-modal>
        </v-list-tile-action>
        <v-list-tile-action>
          <delete-modal :task="item"></delete-modal>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider v-if="index + 1 < tasks.length" :key="`divider-${index}`"></v-divider>
    </template>
  </v-list>
  <div v-else class="pa-3 text-xs-center">
    <h2 class="text--primary">You don't have any task.</h2>
  </div>
</template>

<script>
import EditModal from './EditModal'
import DeleteModal from './DeleteModal'

export default {
  computed: {
    tasks () {
      return this.$store.getters.allTasks
    },
    hasTasks () {
      return this.tasks.length
    }
  },
  components: {
    EditModal,
    DeleteModal
  }
}
</script>
