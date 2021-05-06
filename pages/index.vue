<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
    </v-col>
  </v-row>
</template>

<script>
import Logo from "~/components/common/Logo.vue"

export default {
  components: {
    Logo
  },
  created() {
    console.log(this.$store.state.articles)
  }
}
</script>
