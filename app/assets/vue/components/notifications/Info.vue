<template>
  <v-snackbar
    v-if="message"
    :timeout="3000"
    :multi-line="true"
    :value="true"
    color="info"
    @input="closeMessage"
  >
    {{message}}
    <v-btn
      flat
      dark
      @click.native="closeMessage"
    >Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    message () {
      return this.$store.getters.message
    }
  },
  methods: {
    closeMessage () {
      this.$store.commit('message', null)
    }
  }
}
</script>

