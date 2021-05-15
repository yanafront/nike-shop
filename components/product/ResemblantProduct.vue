<template>
  <v-col class="pa-0 ma-0 resemblant-container">
    <div class="section-title">Смотрите также</div>
    <v-row class="ma-0 pa-0 justify-space-between mt-8 flex-no-wrap">
      <nuxt-link
        v-for="(item, index) in resemblarProducts"
        :key="index"
        to="/"
        class="col-4 resemblant-card"
      >
        <v-col class="pa-0 ma-0 justify-center">
          <v-img :src="item.images[0].src" />
          <div class="resemblant-card__title mt-8">{{ item.title }}</div>
          <div class="resemblant-card__price font-weight-bold">
            {{ item.price }} ₽
          </div>
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
<style lang="sass">
.resemblant-container
  a.resemblant-card
    text-align: center
    transition: .3s
    &:hover
      text-decoration: none
      color: #777777
    &__title
    font-size: 20px
    font-weight: 400
    transition: .3s
    &__price
      font-size: 18px
      font-weight: 700
      transition: .3s
</style>
