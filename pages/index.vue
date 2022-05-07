<template>
  <div
    class="container mx-auto items-center justify-center content-center max-width-sm text-center mb-0"
  >
    <button
      class="border-2 border-purple-800 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-purple-600 transition duration-300 hover:text-white text-4xl w-full absolute inset-x-0 bottom-0"
      @click="callTheAlarm"
    >
      PANIC!!
    </button>
    <span class="w-full text-4xl m-8 w-32 h-32 mx-auto">{{ this.text }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      text: '',
    }
  },
  methods: {
    async callTheAlarm() {
      const available = await this.$axios
        .get(
          'https://raw.githubusercontent.com/simone98dm/panic-button/master/panic/single/README.md'
        )
        .then((response) => response.data)
        .then((data: string) => data.split('\n'))

      const random = this.generateRandom(available.length)
      this.text = available[random]
    },
    generateRandom(limit: number) {
      return Math.floor(Math.random() * (limit - 1))
    },
  },
})
</script>
