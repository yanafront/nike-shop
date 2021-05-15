<template>
  <v-row justify="center" align="center" class="ma-0 py-0 px-4">
    <product-view :product="product[3]" />
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      product: [
        {
          id: 1,
          title: "Кроссовки AIR MAX 270 WOMEN'S SHOE",
          price: 8700,
          salesPrice: 5800,
          sizes: ["36", "37", "38", "39", "40"],
          colors: ["Белый", "Черный"],
          count: 2,
          smallDescription: "Женские кроссовки.",
          structure: "текстиль.",
          careRecommendation:
            "Только ручная стирка при температуре не выше 30 градусов, нейтральными моющими средствами; не тереть; не отжимать; отбеливание запрещено; не стирать моющими средствами содержащие отбеливатель; химчистка запрещена; гладить при низкой температуре до 100 градусов; сушить в тени на горизонтальной поверхности.",
          images: [
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464AWDOPL8_7939786_1_v2.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464AWDOPL8_7939786_1_v2.jpg"
            },
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464AWDOPL8_7939787_2_v2.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464AWDOPL8_7939787_2_v2.jpg"
            },
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464AWDOPL8_7939788_3_v2.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464AWDOPL8_7939788_3_v2.jpg"
            },
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464AWDOPL8_7939789_4_v2.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464AWDOPL8_7939789_4_v2.jpg"
            },
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464AWDOPL8_7939790_5_v2.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464AWDOPL8_7939790_5_v2.jpg"
            },
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464AWDOPL8_7998425_9_v1.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464AWDOPL8_7998425_9_v1.jpg"
            },
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464AWDOPL8_7939786_1_v2.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464AWDOPL8_7939786_1_v2.jpg"
            }
          ],
          resembling: [1, 2, 3]
        },
        {
          id: 2,
          title: "Свитшот Nike",
          price: 5500,
          salesPrice: 4900,
          sizes: ["S", "M", "L", "XL", "XXL"],
          colors: ["Синий", "Черный", "Красный"],
          count: 0,
          smallDescription: "Свитшот оверсайз со спущенной линией плеча.",
          structure: "80% хлопок, 20% полиэстер.",
          careRecommendation:
            "Только ручная стирка при температуре не выше 30 градусов, нейтральными моющими средствами; не тереть; не отжимать; отбеливание запрещено; не стирать моющими средствами содержащие отбеливатель; химчистка запрещена; гладить при низкой температуре до 100 градусов; сушить в тени на горизонтальной поверхности.",
          images: [
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464EWLYZB0_13580418_1_v2_2x.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464EWLYZB0_13580418_1_v2_2x.jpg"
            },
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464EWLYZB0_13580419_2_v2_2x.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464EWLYZB0_13580419_2_v2_2x.jpg"
            },
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464EWLYZB0_13580420_3_v2_2x.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464EWLYZB0_13580420_3_v2_2x.jpg"
            },
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464EWLYZB0_13580421_4_v2_2x.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464EWLYZB0_13580421_4_v2_2x.jpg"
            },
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464EWLYZB0_13580418_1_v2_2x.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464EWLYZB0_13580418_1_v2_2x.jpg"
            },
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464EWLYZB0_13580419_2_v2_2x.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464EWLYZB0_13580419_2_v2_2x.jpg"
            },
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464EWLYZB0_13580420_3_v2_2x.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464EWLYZB0_13580420_3_v2_2x.jpg"
            }
          ],
          resembling: [0, 2, 3]
        },
        {
          id: 3,
          title: "Брюки спортивные ",
          price: 7200,
          salesPrice: 6900,
          sizes: ["S", "M", "L", "XL", "XXL"],
          colors: ["Синий", "Черный", "Белый"],
          count: 0,
          smallDescription: "Брюки спортивные выполнены из трикотажа.",
          structure: "Хлопок - 80%, Полиэстер - 20%",
          careRecommendation:
            "Только ручная стирка при температуре не выше 30 градусов, нейтральными моющими средствами; не тереть; не отжимать; отбеливание запрещено; не стирать моющими средствами содержащие отбеливатель; химчистка запрещена; гладить при низкой температуре до 100 градусов; сушить в тени на горизонтальной поверхности.",
          images: [
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464EWFLDA8_8895168_1_v1_2x.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464EWFLDA8_8895168_1_v1_2x.jpg"
            },
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464EWFLDA8_8895169_2_v1_2x.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464EWFLDA8_8895169_2_v1_2x.jpg"
            },
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464EWFLDA8_8895170_3_v1_2x.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464EWFLDA8_8895170_3_v1_2x.jpg"
            },
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464EWFLDA8_8895168_1_v1_2x.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464EWFLDA8_8895168_1_v1_2x.jpg"
            }
          ],
          resembling: [0, 1, 3]
        },
        {
          id: 4,
          title: "Куртка",
          price: 7200,
          salesPrice: 6900,
          sizes: ["S", "M", "L", "XL", "XXL"],
          colors: ["Пудровый", "Черный", "Белый"],
          count: 0,
          smallDescription: "Куртка выполнена из текстиля без подкладки.",
          structure: "Хлопок - 80%, Полиэстер - 20%",
          careRecommendation:
            "Только ручная стирка при температуре не выше 30 градусов, нейтральными моющими средствами; не тереть; не отжимать; отбеливание запрещено; не стирать моющими средствами содержащие отбеливатель; химчистка запрещена; гладить при низкой температуре до 100 градусов; сушить в тени на горизонтальной поверхности.",
          images: [
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464EWMQEO3_13636853_1_v1_2x.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464EWMQEO3_13636853_1_v1_2x.jpg"
            },
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464EWMQEO3_13636854_2_v1_2x.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464EWMQEO3_13636854_2_v1_2x.jpg"
            },
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464EWMQEO3_13636855_3_v1_2x.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464EWMQEO3_13636855_3_v1_2x.jpg"
            },
            {
              src:
                "https://a.lmcdn.ru/img600x866/N/I/NI464EWMQEO3_13636856_4_v1_2x.jpg",
              imgZoom:
                "https://a.lmcdn.ru/product/N/I/NI464EWMQEO3_13636856_4_v1_2x.jpg"
            }
          ],
          resembling: [0, 1, 2]
        }
      ]
    }
  },
  created() {
    console.log(this.$store.state.articles)
  }
}
</script>
