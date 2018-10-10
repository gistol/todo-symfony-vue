<template>
  <div v-if="!isLoading">
    <v-list two-line v-if="hasTasks">
      <template v-for="(item, index) in tasks">
        <v-list-tile :key="item.id" @mouseover="showEdit = item.id" @mouseleave="showEdit = null">
          <v-list-tile-action>
            <v-checkbox v-model="item.completed"></v-checkbox>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title :class="{'task-completed': item.completed}">{{item.title}}</v-list-tile-title>
            <v-list-tile-action-text>{{formatDate(item.created)}}</v-list-tile-action-text>
            <v-list-tile-sub-title class="text--primary">{{item.description}}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action v-show="showEdit === item.id">
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
      <h2 class="text--primary">You don't have any task. <a @click="showDrawer">Add your first task</a>.</h2>
    </div>
  </div>
  <div v-else class="pa-2">
    <v-progress-linear :indeterminate="true"></v-progress-linear>
  </div>
</template>

<script>
import moment from 'moment'
import EditModal from './EditModal'
import DeleteModal from './DeleteModal'

export default {
  data () {
    return {
      showEdit: null
    }
  },
  computed: {
    tasks () {
      return this.$store.getters.allTasks
    },
    hasTasks () {
      return this.$store.getters.hasTasks
    },
    isLoading () {
      return this.$store.getters.isLoading
    }
  },
  methods: {
    showDrawer () {
      this.$store.commit('showDrawer', true)
    },
    formatDate (date) {
      return moment(date).fromNow()
    }
  },
  components: {
    EditModal,
    DeleteModal
  }
}
</script>
