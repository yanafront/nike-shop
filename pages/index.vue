<template>
  <v-row justify="center" align="center" class="ma-0 py-0 px-4">
    <product-view :product="product" />
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      product: {
        id: 1,
        title: "Свитшот Nike",
        price: 3500,
        salesPrice: 2900,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Синий", "Черный", "Красный"],
        count: 2,
        images: [
          {
            src:
              "https://i.pinimg.com/736x/7f/93/ea/7f93ea23488387196874ad014a21caff.jpg",
            imgZoom:
              "https://i.pinimg.com/originals/41/9a/85/419a85c2343749f34940d3ae7b0eb5dc.jpg"
          },
          {
            src:
              "https://i.pinimg.com/736x/7f/93/ea/7f93ea23488387196874ad014a21caff.jpg",
            imgZoom:
              "https://i.pinimg.com/originals/41/9a/85/419a85c2343749f34940d3ae7b0eb5dc.jpg"
          },
          {
            src:
              "https://i.pinimg.com/736x/7f/93/ea/7f93ea23488387196874ad014a21caff.jpg",
            imgZoom:
              "https://i.pinimg.com/originals/41/9a/85/419a85c2343749f34940d3ae7b0eb5dc.jpg"
          },
          {
            src:
              "https://i.pinimg.com/736x/7f/93/ea/7f93ea23488387196874ad014a21caff.jpg",
            imgZoom:
              "https://i.pinimg.com/originals/41/9a/85/419a85c2343749f34940d3ae7b0eb5dc.jpg"
          },
          {
            src:
              "https://i.pinimg.com/736x/7f/93/ea/7f93ea23488387196874ad014a21caff.jpg",
            imgZoom:
              "https://i.pinimg.com/originals/41/9a/85/419a85c2343749f34940d3ae7b0eb5dc.jpg"
          },
          {
            src:
              "https://i.pinimg.com/736x/7f/93/ea/7f93ea23488387196874ad014a21caff.jpg",
            imgZoom:
              "https://i.pinimg.com/originals/41/9a/85/419a85c2343749f34940d3ae7b0eb5dc.jpg"
          },
          {
            src:
              "https://i.pinimg.com/736x/7f/93/ea/7f93ea23488387196874ad014a21caff.jpg",
            imgZoom:
              "https://i.pinimg.com/originals/41/9a/85/419a85c2343749f34940d3ae7b0eb5dc.jpg"
          },
          {
            src:
              "https://i.pinimg.com/736x/7f/93/ea/7f93ea23488387196874ad014a21caff.jpg",
            imgZoom:
              "https://i.pinimg.com/originals/41/9a/85/419a85c2343749f34940d3ae7b0eb5dc.jpg"
          },
          {
            src:
              "https://i.pinimg.com/736x/7f/93/ea/7f93ea23488387196874ad014a21caff.jpg",
            imgZoom:
              "https://i.pinimg.com/originals/41/9a/85/419a85c2343749f34940d3ae7b0eb5dc.jpg"
          },
          {
            src:
              "https://i.pinimg.com/736x/7f/93/ea/7f93ea23488387196874ad014a21caff.jpg",
            imgZoom:
              "https://i.pinimg.com/originals/41/9a/85/419a85c2343749f34940d3ae7b0eb5dc.jpg"
          }
        ]
      }
    }
  },
  created() {
    console.log(this.$store.state.articles)
  }
}
</script>
