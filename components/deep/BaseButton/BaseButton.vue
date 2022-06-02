<template>
  <button
    :class="[
      buttonColor,
      'w-full px-5 py-3 text-sm shadow-sm font-medium tracking-wider rounded-md hover:shadow-2xl',
    ]"
    v-on="$listeners"
  >
    <slot v-if="this.label === ''" />
    <span v-if="this.label !== ''">
      {{ this.label }}
    </span>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

enum Color {
  RED = 'red',
  PURPLE = 'purple',
  BLUE = 'blue',
  DARK = 'dark',
  LIGHT = 'light',
  RAINBOW = 'rainbow',
}

export default Vue.extend({
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      default: '',
    },
    color: {
      type: String as PropType<Color>,
      default: Color.PURPLE,
    },
  },
  computed: {
    buttonColor() {
      switch (this.color) {
        case Color.RED:
          return 'bg-red-500 text-red-100 hover:bg-red-600'
        case Color.PURPLE:
          return 'bg-purple-500 text-purple-100 hover:bg-purple-600'
        case Color.BLUE:
          return 'bg-blue-500 text-blue-100 hover:bg-blue-600'
        case Color.DARK:
          return 'bg-gray-700 text-gray-100 hover:bg-gray-800'
        case Color.LIGHT:
          return 'bg-gray-50  text-gray-600 hover:bg-gray-100"'
        case Color.RAINBOW:
          return 'bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md mx-auto p-5'
      }
    },
  },
})
</script>
