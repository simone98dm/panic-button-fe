<template>
  <div
    class="container mx-auto items-center justify-center content-center max-width-sm text-center"
  >
    <span>{{ text }}</span>
    <button
      class="border-2 border-purple-800 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-purple-600 transition duration-300 hover:text-white text-4xl"
      @click="callTheAlarm"
    >
      PANIC!!
    </button>
  </div>
</template>

<script lang="ts">
import { AxiosResponse } from 'axios'
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data: {
    text: '',
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
      return Math.floor(Math.random() * (limit + 1))
    },
  },
})
</script>
