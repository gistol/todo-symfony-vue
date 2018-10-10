<template>
  <v-dialog width="500" persistent v-model="modal">
    <v-btn icon slot="activator">
      <v-icon small color="grey">edit</v-icon>
    </v-btn>

    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h2 class="text--primary">Edit Task</h2>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-form v-model="valid" ref="form" validation>
                <v-text-field 
                  name="title" 
                  label="Title" 
                  type="title"
                  :rules="[v => !!v || 'Title is required']"
                  v-model="editedTitle"
                  required
                ></v-text-field>
                <v-textarea 
                  name="description" 
                  label="Description" 
                  type="description"
                  :rules="[v => !!v || 'Description is required']"
                  v-model="editedDescription"
                  required
                ></v-textarea>
              </v-form>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat @click="onCancel">Cancel</v-btn>
              <v-btn class="success" :loading="localLoading" :disabled="!valid || localLoading" @click="onEdit">Save</v-btn>
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
      localLoading: false,
      valid: false,
      editedTitle: this.task.title,
      editedDescription: this.task.description
    }
  },
  methods: {
    onCancel () {
      this.editedTitle = this.task.title
      this.editedDescription = this.task.description
      this.modal = false
    },
    onEdit () {
      this.localLoading = true
      this.$store.dispatch('editTask', {
        id: this.task.id,
        title: this.editedTitle,
        description: this.editedDescription
      })
      .finally(() => {
        this.modal = false
        this.localLoading = false
      })
    }
  }
}
</script>