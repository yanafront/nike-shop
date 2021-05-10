<template>
  <div class="w-100 ma-0">
    <v-menu
      v-for="(el, index) in menu"
      :key="index"
      content-class="mt-6"
      rounded="xl"
      offset-y
      flat
    >
      <template #activator="{ on, attrs }">
        <a
          light
          text
          v-bind="attrs"
          class="black--text px-6 nav-item"
          v-on="on"
        >
          {{ el.title }}
          <v-icon>mdi-chevron-down</v-icon>
        </a>
      </template>
      <v-list class="pa-0">
        <v-list-item v-for="(item, i) in el.items" :key="i" link>
          <v-list-item-title v-text="item.title" />
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
export default {
  name: "TheNavigationMenu",
  data() {
    return {
      menu: [
        {
          title: "Одежда",
          items: [
            {
              title: "Футболки",
              link: "/"
            },
            {
              title: "Худи",
              link: "/"
            },
            {
              title: "Свитшоты",
              link: "/"
            }
          ]
        },
        {
          title: "Аксесcуары",
          items: [
            {
              title: "Кепки",
              link: "/"
            },
            {
              title: "Перчатки",
              link: "/"
            },
            {
              title: "Очки",
              link: "/"
            }
          ]
        },
        {
          title: "Коллекции",
          items: [
            {
              title: "Спорт",
              link: "/"
            },
            {
              title: "Street style",
              link: "/"
            }
          ]
        }
      ],
      navItems: [...Array(4)].map((_, i) => `Item ${i}`)
    }
  }
}
</script>
