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
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data: {
    text: '',
  },
  methods: {
    callTheAlarm() {},
  },
})
</script>
