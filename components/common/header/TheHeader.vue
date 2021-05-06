<template>
  <v-app-bar :clipped-left="clipped" color="white" fixed app flat>
    <v-row class="pa-10 justify-space-between flex-nowrap ma-0 mt-10">
      <logo />
      <the-navigation-menu />
      <v-btn icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-row>
  </v-app-bar>
</template>
<script>
import Logo from "~/components/common/Logo.vue"
import TheNavigationMenu from "./TheNavigationMenu"
export default {
  name: "TheHeader",
  components: {
    TheNavigationMenu,
    Logo
  },
  data() {
    return {
      clipped: false
    }
  }
}
</script>
