<template>
  <v-row class="pa-0 ma-0 flex-lg-nowrap flex-wrap">
    <carousel-slider
      :img-normal="product.images[imgIndex].src"
      :img-zoom="product.images[imgIndex].imgZoom"
      :scale="2"
      :images="product.images"
      class="col-lg-5 col-md-5 col-12"
      @selectImage="selectImage"
      @changeImagePreview="changeImagePreview"
    />
    <div class="col-lg-7 col-md-7 col-12 pa-0 ma-0 pl-lg-12 mt-lg-0 mt-md-0 pl-md-12 mt-12">
      <v-breadcrumbs :items="breadcrumbs" class="pa-0 ma-0" />
      <div class="product-name f-bold">
        {{ product.title }}
      </div>
      <div class="small-title-section mt-2">
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
      <v-row class="pa-0 ma-0 mt-8">
        <template v-if="product.count">
          <input-number
            :value="product.value"
            :max="product.count"
            class="mr-4"
            @changeValue="changeInputValue"
          />
          <v-btn class="black white--text" large @click="addProductCart(product)">
            В корзину
          </v-btn>
        </template>
        <template v-else>
          Товара нет в наличии
        </template>
      </v-row>
      <v-divider class="my-10" />
      <v-col class="pa-0 ma-0">
        <div class="font-weight-bold mb-2">
          {{ product.smallDescription }}
        </div>
        <div class="mb-2">
          <span class="font-weight-bold">Состав:</span>
          {{ product.structure }}
        </div>
        <div class="mb-2">
          <div class="font-weight-bold mb-2">Рекомендация по уходу:</div>
          {{ product.careRecommendation }}
        </div>
      </v-col>
    </div>
  </v-row>
</template>
<script>
import CarouselSlider from "../widgets/CarouselSlider"
import InputNumber from "../ui/InputNumber"
export default {
  name: "ProductView",
  components: { InputNumber, CarouselSlider },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      countProduct: 1,
      selectColor: null,
      selectSize: null,
      imgIndex: 0,
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
  },
  methods: {
    changeInputValue(value) {
      console.log(value)
      this.countProduct = value
    },
    addProductCart(product) {
      const params = {
        price: product.price,
        salesPrice: product.salesPrice,
        images: product.images,
        color: this.selectColor,
        size: this.selectSize,
        value: this.countProduct,
        title: product.title,
        id: product.id
      }
      console.log(this.countProduct)
      if (this.countProduct) {
        this.$notify({
          type: "success",
          text: "Товар добавлен в корзину!"
        })
        this.$store.commit("addProductInCart", params)
      } else {
        this.$notify({
          type: "error",
          text: "Выберите товар!"
        })
      }
    },
    selectImage(index) {
      this.imgIndex = index
    },
    changeImagePreview(step) {
      if (step === "prew" && this.imgIndex) {
        this.imgIndex--
      }
      if (step === "next" && this.imgIndex < this.product.images.length - 1) {
        this.imgIndex++
      }
    }
  }
}
</script>
