<template>
  <v-app-bar :clipped-left="clipped" color="white" fixed app flat>
    <v-row
      class="pa-10 justify-space-between flex-nowrap ma-0 mt-10 align-center"
    >
      <logo />
      <the-navigation-menu class="flex-grow-1 d-flex justify-center" />
      <v-row class="pa-0 ma-0 flex-grow-0">
        <v-btn class="mr-4" icon>
          <search-icon />
        </v-btn>
        <v-btn icon>
          <car-icon />
        </v-btn>
      </v-row>
    </v-row>
  </v-app-bar>
</template>
<script>
import CarIcon from "../../icons/CarIcon"
import SearchIcon from "../../icons/SearchIcon"
import TheNavigationMenu from "./TheNavigationMenu"
import Logo from "~/components/common/Logo.vue"
export default {
  name: "TheHeader",
  components: {
    SearchIcon,
    CarIcon,
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
