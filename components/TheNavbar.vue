<template>
  <nav class="bg-dark px-6 relative shadow-md">
    <div
      class="mx-auto items-center justify-center content-center text-center py-2"
    >
      <h3 class="font-semibold text-3xl text-gray-500">
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
import { useThemeStore } from '~/store/theme.store'

export default Vue.extend({
  name: 'TheNavbar',
  components: { BaseEmoticon, Language },
  data() {
    return {
      color: Themes.LIGHT,
      themeStore: useThemeStore(),
    }
  },
  mounted() {
    this.color = this.themeStore.theme as Themes
  },
  methods: {
    changeTheme() {
      if (this.color === Themes.DARK) {
        this.color = Themes.LIGHT
      } else {
        this.color = Themes.DARK
      }
      this.themeStore.setTheme(this.color)
      console.log(
        '🚀 ~ file: TheNavbar.vue ~ line 50 ~ changeTheme ~ this.themeStore',
        this.themeStore.theme
      )
    },
  },
})
</script>
