<template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
  >
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Create Task
          </v-list-tile-title>
        </v-list-tile>

      </v-list>
    </v-toolbar>

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
              v-model="title"
              required
            ></v-text-field>
            <v-textarea 
              name="description" 
              label="Description" 
              type="description"
              :rules="[v => !!v || 'Description is required']"
              v-model="description"
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
          <v-btn class="success" :disabled="!valid" @click="onCreate">Create</v-btn>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      title: '',
      description: '',
      completed: false
    }
  },
  computed: {
    drawer: {
      get () {
        return this.$store.getters.drawer
      },
      set (value) {
        return this.$store.commit('showDrawer', value)        
      }
    }
  },
  methods: {
    onCreate () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('createTask', {
          title: this.title,
          description: this.description
        })
      }

      this.$store.commit('showDrawer', false)
    }
  }
}
</script>
