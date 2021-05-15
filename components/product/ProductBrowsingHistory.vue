<template>
  <v-col class="pa-0 ma-0 browsing-history">
    <v-row class="pa-0 ma-0 justyfy-space-between">
      <div
        class="small-title-section font-weight-bold flex-grow-1 align-center"
      >
        История просмотров
      </div>
      <v-row class="pa-o ma-0 flex-grow-0">
        <v-btn icon small @click="scrollContainer('prev')">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn icon small @click="scrollContainer('next')">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-row>
    </v-row>
    <v-row id="scroll" class="pa-0 ma-0 overflow-hidden my-6 flex-nowrap history">
      <nuxt-link
        v-for="(product, index) in products"
        :key="index"
        to="/"
        class="col-3 pa-0 ma-0 history__item"
      >
        <v-row class="pa-0 ma-0">
          <v-img :src="product.images[0].src" max-width="70" height="100" />
          <v-col class="pa-0 ma-0 ml-4">
            <div>{{ product.title }}</div>
            <div>
              <span
                :class="
                  !product.salesPrice
                    ? 'black--text f-bold'
                    : 'through-text grey--text'
                "
              >
                {{ product.price }} ₽
              </span>
              <span v-if="product.salesPrice" class="font-weight-bold ml-2">
                {{ product.salesPrice }} ₽
              </span>
            </div>
          </v-col>
        </v-row>
      </nuxt-link>
    </v-row>
  </v-col>
</template>
<script>
export default {
  name: "ProductBrowsingHistory",
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    scrollContainer(params) {
      const scroll = document.getElementById("scroll")
      const step = params === "prev" ? -200 : 200
      scroll.scrollBy({ left: step, behavior: "smooth" })
    }
  }
}
</script>
<style lang="sass">
.browsing-history
  .history
    .history__item
      transition: .3s
      &:hover
        text-decoration: none
        color: #777777
</style>
