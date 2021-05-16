<template>
  <v-navigation-drawer
    :value="value"
    width="440"
    class="pa-8"
    absolute
    temporary
    right
  >
    <v-row class="pa-0 ma-0 flex-nowrap">
      <v-list-item-title class="title">Твоя корзина</v-list-item-title>
      <v-btn icon @click="$emit('setCardDrawer')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-row>
    <div class="flex-grow-1"></div>
    <v-row class="flex-nowrap pa-0 ma-0 justify-space-between font-weight-bold my-4">
      <div class="subtitle-small">Предварительный итог:</div>
      <div>2200</div>
    </v-row>
    <v-btn class="black white--text" width="100%">Оформить заказ</v-btn>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "Cart",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
}
</script>
