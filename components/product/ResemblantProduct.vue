<template>
  <v-col class="pa-0 ma-0">
    <div class="section-title">Смотрите также</div>
    <v-row class="ma-0 pa-0 justify-space-between mt-8 flex-no-wrap">
      <nuxt-link
        v-for="(item, index) in resemblarProducts"
        :key="index"
        to="/"
        class="col-4"
      >
        <v-col class="pa-0 ma-0 justify-center">
          <v-img :src="item.images[0].src" />
          <div>{{ item.title }}</div>
          <div class="font-weight-bold">{{ item.price }}₽</div>
        </v-col>
      </nuxt-link>
    </v-row>
  </v-col>
</template>
<script>
export default {
  name: "ResemblantProduct",
  props: {
    products: {
      type: Array,
      default: () => []
    },
    selectProductId: {
      type: [String, Number],
      default: null
    }
  },
  computed: {
    product() {
      return this.products.find(el => el.id === this.selectProductId)
    },
    resemblarProducts() {
      return this.products.filter(el =>
        this.product.resembling.find(item => item === el.id)
      )
    }
  }
}
</script>
