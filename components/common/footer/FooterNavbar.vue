<template>
  <v-row class="ma-0 pa-0 align-center justify-end">
    <div v-for="(item, index) in items" :key="index" class="mr-4">
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
