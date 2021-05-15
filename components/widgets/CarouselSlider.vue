<template>
  <v-row class="pa-0 ma-0 flex-nowrap">
    <v-col class="pa-0 ma-0 mr-4 vertical-slider">
      <div>
        <div
          class="pointer justify-center d-flex mb-2"
          @click="scrollToElement(0)"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </div>
        <div id="slider" class="vertical-slider__images">
          <transition-group name="list" tag="div">
            <v-img
              v-for="(image, index) in images"
              :id="`slide-item-${index}`"
              :key="index"
              :src="image.src"
              class="slide-item mb-4 slide-item mb-4 pointer"
              reverse-transition="fade-transition"
              transition="fade-transition"
              @click="scrollToImage(index)"
            />
          </transition-group>
        </div>
        <div
          class="d-flex pointer justify-center mt-2"
          @click="scrollToElement(1)"
        >
          <v-icon>mdi-chevron-down</v-icon>
        </div>
      </div>
    </v-col>
    <div class="relative">
      <v-btn
        light
        icon
        fab
        class="black--text px-6 navigation-slider-button navigation-slider-button_left"
        @click="$emit('changeImagePreview', 'prew')"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <div
        class="image-preview"
        :class="{ zoomed }"
        @touchstart="touchzoom"
        @mousemove="move"
        @mouseenter="zoom"
        @mouseleave="unzoom"
      >
        <img ref="normal" class="normal" :src="imgNormal" />
        <img ref="zoom" class="zoom" :src="imgZoom || imgNormal" />
      </div>
      <v-btn
        light
        icon
        fab
        class="black--text px-6 navigation-slider-button navigation-slider-button_rigth"
        @click="$emit('changeImagePreview', 'next')"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </v-row>
</template>
<script>
export default {
  name: "CarouselSlider",
  props: {
    imgNormal: {
      type: String,
      default: ""
    },
    imgZoom: {
      type: String,
      default: ""
    },
    scale: {
      type: Number,
      default: null
    },
    disabled: {
      type: Boolean
    },
    images: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      scaleFactor: 1,
      resizeCheckInterval: null,
      zoomed: false,
      scrollSlider: 0
    }
  },
  mounted() {
    if (this.scale) {
      this.scaleFactor = parseInt(this.scale)
      this.$refs.zoom.style.transform = "scale(" + this.scaleFactor + ")"
    }
    this.initEventLoaded()
    this.initEventResized()
  },
  updated() {
    this.initEventLoaded()
  },
  beforeDestroy() {
    this.resizeCheckInterval && clearInterval(this.resizeCheckInterval)
  },
  methods: {
    scrollToElement(scroll) {
      const block = document.getElementById("slider")
      scroll ? (this.scrollSlider += 60) : (this.scrollSlider += -60)
      if (this.scrollSlider > block.scrollHeight) {
        this.scrollSlider = block.scrollHeight
      }
      if (this.scrollSlider < 0) {
        this.scrollSlider = 0
      }

      block.scrollTo({
        top: this.scrollSlider,
        behavior: "smooth"
      })
    },
    scrollToImage(index) {
      const elem = document.getElementById(`slide-item-${index}`)
      elem.scrollIntoView({ block: "center", behavior: "smooth" })
      this.$emit("selectImage", index)
    },
    pageOffset(el) {
      const rect = el.getBoundingClientRect()
      const scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      return {
        y: rect.top + scrollTop,
        x: rect.left + scrollLeft
      }
    },
    touchzoom(event) {
      if (this.disabled) return
      this.move(event)
      this.zoomed = !this.zoomed
    },
    zoom() {
      if (!this.disabled) this.zoomed = true
    },
    unzoom() {
      if (!this.disabled) this.zoomed = false
    },
    move(event) {
      if (this.disabled || !this.zoomed) return
      const offset = this.pageOffset(this.$el)
      const zoom = this.$refs.zoom
      const normal = this.$refs.normal
      const relativeX = event.clientX - offset.x + window.pageXOffset
      const relativeY = event.clientY - offset.y + window.pageYOffset
      const normalFactorX = relativeX / normal.offsetWidth
      const normalFactorY = relativeY / normal.offsetHeight
      const x =
        normalFactorX *
        (zoom.offsetWidth * this.scaleFactor - normal.offsetWidth)
      const y =
        normalFactorY *
        (zoom.offsetHeight * this.scaleFactor - normal.offsetHeight)
      zoom.style.left = -x + "px"
      zoom.style.top = -y + "px"
    },
    initEventLoaded() {
      const promises = [this.$refs.zoom, this.$refs.normal].map(function(
        image
      ) {
        return new Promise(function(resolve, reject) {
          image.addEventListener("load", resolve)
          image.addEventListener("error", reject)
        })
      })
      const component = this
      Promise.all(promises).then(function() {
        component.$emit("loaded")
      })
    },
    initEventResized() {
      const normal = this.$refs.normal
      let previousWidth = normal.offsetWidth
      let previousHeight = normal.offsetHeight
      const component = this
      this.resizeCheckInterval = setInterval(function() {
        if (
          previousWidth !== normal.offsetWidth ||
          previousHeight !== normal.offsetHeight
        ) {
          previousWidth = normal.offsetWidth
          previousHeight = normal.offsetHeight
          component.$emit("resized", {
            width: normal.width,
            height: normal.height,
            fullWidth: normal.naturalWidth,
            fullHeight: normal.naturalHeight
          })
        }
      }, 1000)
    }
  }
}
</script>
<style lang="sass">
.vertical-slider
  max-width: 60px
  &__images
    max-height: 640px
    overflow: hidden
.image-preview
  position: relative
  overflow: hidden
  height: 700px
  .normal
    width: 100%
    height: 100%
    object-fit: cover
  .zoom
    position: absolute
    opacity: 0
    cursor: crosshair
    transform-origin: top left
  &.zoomed
    .zoom
      opacity: 1
  &.zoomed
    .normal
      opacity: 0
.navigation-slider-button
  position: absolute
  z-index: 2
  top: calc(50% - 50px)
  &_left
    left: 5px
  &_rigth
    right: 5px
.slide-item
  max-width: 60px
</style>
