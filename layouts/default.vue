<template>
  <v-app>
    <the-header />
    <v-main>
      <div class="app-content">
        <nuxt />
      </div>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <the-footer />
  </v-app>
</template>

<script>
import TheHeader from "../components/common/header/TheHeader"
import TheFooter from "../components/common/footer/TheFooter"

export default {
  components: { TheFooter, TheHeader },
  data() {
    return {
      colors: ["deep-purple accent-4", "error", "teal darken-1"],
      navItems: [...Array(4)].map((_, i) => `Item ${i}`),
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      right: true,
      rightDrawer: false
    }
  }
}
</script>
