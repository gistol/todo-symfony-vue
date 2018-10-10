<template>
  <v-dialog width="500" v-model="modal">
    <v-btn icon slot="activator">
      <v-icon small color="red">delete</v-icon>
    </v-btn>

    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h2 class="text--primary">Are you sure you want to delete this task?</h2>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat @click="onCancel">Cancel</v-btn>
              <v-btn color="red" :dark="!localLoading" :loading="localLoading" :disabled="localLoading" @click="onDelete">Delete</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['task'],
  data () {
    return {
      modal: false,
      localLoading: false
    }
  },
  methods: {
    onCancel () {
      this.modal = false
    },
    onDelete () {
      this.localLoading = true
      this.$store.dispatch('deleteTask', {
        id: this.task.id
      })
      .finally(() => {
        this.modal = false
        this.localLoading = false
      })
    }
  }
}
</script>