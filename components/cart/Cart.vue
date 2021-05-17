<template>
  <v-navigation-drawer
    :value="value"
    width="440"
    class="pa-8 cart"
    absolute
    temporary
    app
    right
  >
    <v-col class="pa-0 ma-0 d-flex flex-column h-100">
      <v-row class="pa-0 ma-0 flex-nowrap flex-grow-0">
        <v-list-item-title class="cart__title mb-4">Твоя корзина</v-list-item-title>
        <v-btn icon @click="$emit('setCardDrawer')">
          <v-icon class="black--text">mdi-close</v-icon>
        </v-btn>
      </v-row>
      <div v-if="!products.length">Корзина пуста</div>
      <div class="flex-grow-1">
        <v-row
          v-for="(product, index) in products"
          :key="index"
          class="pa-0 ma-0 mt-4 flex-nowrap justify-space-between"
        >
          <v-row class="pa-0 ma-0">
            <v-img :src="product.images[0].src" max-width="80" class="mr-4" />
            <v-col class="pa-0 ma-0">
              <div>{{ product.title }}</div>
              <div class="grey--text">
                {{ product.size }}, {{ product.color }}
              </div>
              <v-row
                class="pa-0 ma-0 flex-nowrap justify-space-between align-center mt-4"
              >
                <input-number :value="product.value" :max="product.count" />
                <div class="font-weight-bold">{{ product.price }} ₽</div>
              </v-row>
            </v-col>
          </v-row>
          <v-btn icon small @click="deleteProductCart(product.id)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-row>
      </div>
      <v-row
        class="flex-nowrap pa-0 ma-0 justify-space-between font-weight-bold my-4 flex-grow-0"
      >
        <div class="subtitle-small">Предварительный итог:</div>
        <div>{{ preliminaryСost }} ₽</div>
      </v-row>
      <v-btn class="black white--text flex-grow-0" width="100%"
        >Оформить заказ</v-btn
      >
    </v-col>
  </v-navigation-drawer>
</template>
<script>
import InputNumber from "../ui/InputNumber"
export default {
  name: "Cart",
  components: { InputNumber },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    preliminaryСost() {
      return this.products.length
        ? this.products.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price
          }, 0)
        : 0
    },
    products() {
      return this.$store.getters.getProductsCart
    }
  },
  methods: {
    deleteProductCart(id) {
      this.$store.commit('deleteProductCart', id)
    }
  }
}
</script>
<style lang="sass">
.cart
  &__title
    font-weight: bold
    font-size: 32px
    line-height: 120%
</style>
