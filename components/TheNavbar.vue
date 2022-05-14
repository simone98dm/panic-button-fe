<template>
  <nav class="bg-dark px-6 relative shadow-md">
    <div
      class="
        mx-auto
        items-center
        justify-center
        content-center
        text-center
        py-2
      "
    >
      <h3 class="font-semibold text-3xl text-gray-500">
        PRESS THE PANIC
        <base-emoticon icon="panic" @onclick="changeTheme"></base-emoticon>
      </h3>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseEmoticon from '~/components/deep/BaseEmoticon/BaseEmoticon.vue'

enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export default Vue.extend({
  name: 'TheNavbar',
  components: { BaseEmoticon },
  data() {
    return {
      color: '',
    }
  },
  methods: {
    changeTheme() {
      if (this.color === Theme.DARK) {
        this.color = Theme.LIGHT
      } else {
        this.color = Theme.DARK
      }
      //   this.$colorMode.preference = this.color
    },
  },
})
</script>