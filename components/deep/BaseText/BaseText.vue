<template>
  <span :class="[textSize, textColor, 'font-mono', 'font-bold']">
    {{ this.text }}
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

type Size = 'superlarge' | 'large' | 'medium' | 'small' | 'tiny'
type Color = 'dark' | 'light' | 'red' | 'blue' | 'purple' | 'rainbow'

export default Vue.extend({
  name: 'BaseText',
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String as PropType<Color>,
      default: 'dark',
    },
    size: {
      type: String as PropType<Size>,
      default: 'medium',
    },
  },
  computed: {
    textSize() {
      switch (this.size) {
        case 'superlarge':
          return 'text-4xl'
        case 'large':
          return 'text-2xl'
        case 'medium':
          return 'text-md'
        case 'small':
          return 'text-sm'
        case 'tiny':
          return 'text-xs'
        default:
          return 'text-md'
      }
    },
    textColor() {
      switch (this.color) {
        case 'dark':
          return 'dark:text-gray-800 text-gray-100'
        case 'light':
          return 'dark:text-gray-100 text-gray-800'
        case 'red':
          return 'dark:text-red-100 text-red-500'
        case 'blue':
          return 'dark:text-blue-100 text-blue-500'
        case 'purple':
          return 'dark:text-purple-100 text-purple-500'
        case 'rainbow':
          return 'bg-gradient-to-r from-indigo-500 via-pink-500'
      }
    },
  },
})
</script>
