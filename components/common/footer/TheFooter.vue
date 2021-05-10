<template>
  <v-footer class="py-16">
    <div class="footer-content mx-auto">
      <v-row class="pa-0 ma-0 col-12 w-100 align-start">
        <v-row class="col-8 pa-0 ma-0 justify-start">
          <footer-menu
            v-for="(menu, i) in footerMenu"
            :key="i"
            :title="menu.title"
            :items="menu.items"
            class="col-4"
          />
        </v-row>
        <v-row class="col-4 pa-0 ma-0 align-center">
          <nuxt-link to="/">
            <instagram-icon />
          </nuxt-link>
          <nuxt-link to="/">
            <vk-icon class="ml-4" />
          </nuxt-link>
          <nuxt-link to="/">
            <facebook-icon class="ml-4" />
          </nuxt-link>
        </v-row>
      </v-row>
      <v-row class="justify-space-between pa-0 ma-0 mt-16">
        <div class="grey--text">&copy; Nike, Inc.,2020 Все права защищены.</div>
        <footer-navbar :items="navbarList" />
      </v-row>
    </div>
  </v-footer>
</template>
<script>
import InstagramIcon from "../../icons/InstagramIcon"
import VkIcon from "../../icons/VkIcon"
import FacebookIcon from "../../icons/FacebookIcon"
import FooterMenu from "./FooterMenu"
import FooterNavbar from "./FooterNavbar"
export default {
  name: "TheFooter",
  components: { FooterNavbar, FacebookIcon, VkIcon, InstagramIcon, FooterMenu },
  data() {
    return {
      navbarList: [
        {
          name: "Каталог",
          link: "/"
        },
        {
          name: "Условия использования",
          link: "/"
        },
        {
          name: "Условия продажи",
          link: "/"
        },
        {
          name: "Конфиденциальность и файлы cookie\n",
          link: "/"
        }
      ],
      footerMenu: [
        {
          title: "Информация",
          items: [
            {
              name: "Оплата",
              link: "/"
            },
            {
              name: "Возврат",
              link: "/"
            },
            {
              name: "О нас",
              link: "/"
            },
            {
              name: "Контакты",
              link: "/"
            }
          ]
        },
        {
          title: "O Nike",
          items: [
            {
              name: "Новости",
              link: "/"
            },
            {
              name: "Карьера",
              link: "/"
            },
            {
              name: "Инвесторам",
              link: "/"
            },
            {
              name: "Забота об окружающей среде",
              link: "/"
            }
          ]
        }
      ]
    }
  }
}
</script>
