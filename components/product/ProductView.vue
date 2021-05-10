<template>
  <v-row class="pa-0 ma-0 flex-nowrap">
    <carousel-slider
      :img-normal="product.images[0].src"
      :img-zoom="product.images[0].imgZoom"
      :scale="2"
      :images="product.images"
      class="col-6"
    />
    <div class="col-6 pa-0 ma-0 ml-12">
      <v-breadcrumbs :items="breadcrumbs" class="pa-0 ma-0" />
      <div class="product-name f-bold">
        {{ product.title }}
      </div>
      <div class="price mt-2">
        <span
          :class="
            !product.salesPrice
              ? 'black--text f-bold'
              : 'through-text grey--text'
          "
        >
          {{ product.price }} ₽
        </span>
        <span v-if="product.salesPrice" class="black--text f-bold ml-2">
          {{ product.salesPrice }} ₽
        </span>
      </div>
      <v-divider class="my-10" />
      <div class="subtitle">Размер:</div>
      <v-chip-group
        v-model="selectSize"
        class="size"
        active-class="deep-purple--text text--accent-4"
        mandatory
        color="black"
      >
        <v-chip
          v-for="(size, index) in product.sizes"
          :key="index"
          :value="size"
          class="black--text"
          active-class="black white--text"
        >
          {{ size }}
        </v-chip>
      </v-chip-group>
      <div class="subtitle mt-8">Цвет:</div>
      <v-chip-group
        v-model="selectColor"
        class="size"
        active-class="deep-purple--text text--accent-4"
        mandatory
        color="black"
      >
        <v-chip
          v-for="(color, i) in product.colors"
          :key="i"
          :value="color"
          class="black--text"
          active-class="black white--text"
        >
          {{ color }}
        </v-chip>
      </v-chip-group>
      <v-divider class="my-10" />
      <v-btn class="black white--text">В корзину</v-btn>
    </div>
  </v-row>
</template>
<script>
import CarouselSlider from "../widgets/CarouselSlider"
export default {
  name: "ProductView",
  components: { CarouselSlider },
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      selectColor: null,
      selectSize: null,
      breadcrumbs: [
        {
          text: "Главная",
          disabled: false,
          href: "/"
        },
        {
          text: "Одежда",
          disabled: false,
          href: "/"
        },
        {
          text: "Худи и свитшоты",
          disabled: false,
          href: "/"
        },
        {
          text: "Худи",
          disabled: false,
          href: "/"
        },
        {
          text: "Свитшот Nike",
          disabled: true,
          href: "/"
        }
      ]
    }
  }
}
</script>
