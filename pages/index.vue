<template>
  <the-main>
    <div
      class="
        m-4
        mt-32
        mx-auto
        items-center
        justify-center
        content-center
        text-center
      "
    >
      <base-text :text="this.text" color="light" size="superlarge"></base-text>
    </div>
    <the-footer>
      <base-button color="rainbow" @onclick="callTheAlarm">
        <span>PANIC <base-emoticon icon="rocket" /></span>
      </base-button>
    </the-footer>
  </the-main>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseText from '~/components/deep/BaseText/BaseText.vue'
import BaseButton from '~/components/deep/BaseButton/BaseButton.vue'
import TheFooter from '~/components/high/TheFooter/TheFooter.vue'
import TheMain from '~/components/high/TheMain/TheMain.vue'
import BaseEmoticon from '~/components/deep/BaseEmoticon/BaseEmoticon.vue'
import { baseUrl, basePath, panicButtonEndpoints } from '~/config/config'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      text: '',
    }
  },
  methods: {
    async callTheAlarm() {
      const apiUrl = `${baseUrl}${basePath}`
      await this.$axios
        .get(`${apiUrl}${panicButtonEndpoints.all}`)
        .then((response) => response.data)
        .then((data: { data: string }[]) => {
          const random = this.generateRandom(data.length)
          this.text = data[random].data
        })
    },
    generateRandom(limit: number) {
      return Math.floor(Math.random() * (limit - 1))
    },
  },
  components: { BaseText, BaseButton, TheFooter, TheMain, BaseEmoticon },
})
</script>
