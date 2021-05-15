<template>
  <v-row class="ma-0 counter justify-space-between">
    <div class="pointer" @click="value > 0 && value--">
      <v-icon size="18">mdi-minus</v-icon>
    </div>
    <input
      id="num_count"
      v-model="value"
      type="number"
      :step="step"
      :min="min"
      :max="max"
      class="counter__input"
      size="4"
    />
    <div class="pointer" @click="value < max && value++">
      <v-icon size="18">mdi-plus</v-icon>
    </div>
  </v-row>
</template>
<script>
export default {
  name: "InputNumber",
  props: {
    max: {
      type: Number,
      default: 10
    },
    min: {
      type: Number,
      default: 1
    },
    step: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      value: 1
    }
  }
}
</script>
<style lang="sass">
.counter
  display: inline-flex
  background: #F4F4F4
  padding: 10px
  border-radius: 8px
  max-width: 161px
  &__input
    text-align: center
    font-size: 18px
    outline: none
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button
      -webkit-appearance: none
      margin: 0
</style>
