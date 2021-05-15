<template>
  <v-col class="pa-0 ma-0">
    <div class="title">Смотрите также</div>
    <v-row></v-row>
  </v-col>
</template>
<script>
export default {
  name: "ResemblantProduct",
  props: {
    products: {
      type: Array,
      default: []
    }
  }
}
</script>
