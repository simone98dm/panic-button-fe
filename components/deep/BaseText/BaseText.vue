<template>
  <span :class="[textSize, textColor, 'text-mono', 'font-bold']">{{ this.text }}</span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

enum Size {
  SUPERLARGE = 'superlarge',
  LARGE = 'large',
  MEDIUM = 'medium',
  TINY = 'tiny',
}

const enum Color {
  DARK = 'dark',
  LIGHT = 'light',
  RED = 'red',
  BLUE = 'blue',
  PURPLE = 'purple',
  RAINBOW = 'RAINBOW',
}

export default Vue.extend({
  name: 'BaseText',
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String as PropType<Color>,
      default: Color.DARK,
    },
    size: {
      type: String as PropType<Size>,
      default: Size.MEDIUM,
    },
  },
  computed: {
    textSize() {
      switch (this.size) {
        case Size.SUPERLARGE:
          return 'text-4xl'
        case Size.LARGE:
          return 'text-2xl'
        case Size.MEDIUM:
          return 'text-md'
        case Size.TINY:
          return 'text-sm'
        default:
          return 'text-md'
      }
    },
    textColor() {
      switch (this.color) {
        case Color.DARK:
          return 'text-gray-100'
        case Color.LIGHT:
          return 'text-gray-800'
        case Color.RED:
          return 'text-red-500'
        case Color.BLUE:
          return 'text-blue-500'
        case Color.PURPLE:
          return 'text-purple-500'
        case Color.RAINBOW:
          return 'bg-gradient-to-r from-indigo-500 via-pink-500'
      }
    },
  },
})
</script>