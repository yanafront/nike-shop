<template>
  <v-row class="ma-0 pa-0 align-center justify-lg-end justify-md-end justify-start">
    <div v-for="(item, index) in items" :key="index" class="mr-4 mt-4 mt-md-0 mt-lg-0">
      <a :href="item.link" class="grey--text lighten-5">{{ item.name }}</a>
    </div>
  </v-row>
</template>
<script>
export default {
  name: "FooterNavbar",
  props: {
    items: {
      type: Array,
      default: []
    }
  }
}
</script>
