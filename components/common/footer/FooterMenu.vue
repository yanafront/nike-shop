<template>
  <div class="pa-0 ma-0">
    <div class="font-weight-bold">{{ title }}</div>
    <div v-for="(el, index) in items" :key="index">
      <a :href="el.link" class="black--text">
        {{ el.name }}
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterMenu",
  props: {
    title: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: []
    }
  }
}
</script>
