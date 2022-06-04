<template>
  <nav class="px-6 relative shadow-md">
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
      <h3 class="font-semibold text-3xl dark:text-gray-400 text-gray-600">
        BREAK THE ICE
        <base-emoticon icon="panic" @click="changeTheme"></base-emoticon>
      </h3>

      <language />
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { Themes } from '~/common/enums'
import BaseEmoticon from '~/components/deep/BaseEmoticon/BaseEmoticon.vue'
import Language from '~/components/high/Language/Language.vue'

export default Vue.extend({
  name: 'TheNavbar',
  components: { BaseEmoticon, Language },
  data() {
    return {
      color: 'light',
    }
  },
  mounted() {
    const theme = (this as any).$colorMode.value
    if (!theme) {
      ;(this as any).$colorMode.preference = this.color
      return
    }
    this.color = (this as any).$colorMode.value
  },
  methods: {
    changeTheme() {
      if (this.color === 'dark') {
        this.color = 'light'
      } else {
        this.color = 'dark'
      }

      ;(this as any).$colorMode.preference = this.color
    },
  },
})
</script>
