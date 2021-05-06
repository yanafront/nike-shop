<template>
  <v-menu offset-y flat>
    <template #activator="{ on, attrs }">
      <v-btn light icon v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="item in navItems" :key="item" link>
        <v-list-item-title v-text="item" />
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  name: "TheNavigationMenu",
  data() {
    return {
      navItems: [...Array(4)].map((_, i) => `Item ${i}`)
    }
  }
}
</script>
