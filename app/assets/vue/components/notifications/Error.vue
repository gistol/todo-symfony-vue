<template>
  <v-snackbar
    v-if="error"
    :timeout="5000"
    :multi-line="true"
    :value="true"
    color="error"
    @input="closeError"
  >
    {{error}}
    <v-btn
      flat
      dark
      @click.native="closeError"
    >Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    closeError () {
      this.$store.commit('error', null)
    }
  }
}
</script>

