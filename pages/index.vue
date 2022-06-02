<template>
  <the-main>
    <div
      class="mt-32 mx-auto items-center justify-center content-center text-center"
    >
      <base-text :text="this.text" color="light" size="superlarge" />
    </div>
    <the-footer>
      <base-button color="rainbow" @click="callTheAlarm" :loading="loading">
        <span>PANIC <base-emoticon icon="rocket" /></span>
      </base-button>
    </the-footer>
    <loading :show="loading" />
  </the-main>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseText from '~/components/deep/BaseText/BaseText.vue'
import BaseButton from '~/components/deep/BaseButton/BaseButton.vue'
import TheFooter from '~/components/high/TheFooter/TheFooter.vue'
import TheMain from '~/components/high/TheMain/TheMain.vue'
import BaseEmoticon from '~/components/deep/BaseEmoticon/BaseEmoticon.vue'
import Loading from '~/components/deep/Loading/Loading.vue'
import { baseUrl, basePath, panicButtonEndpoints } from '~/config/config'
import { useLangStore } from '~/store/lang.store'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      text: 'Call the alarm 🚨',
      loading: false,
      langStore: useLangStore(),
    }
  },
  methods: {
    async callTheAlarm() {
      this.loading = true
      const url = `${baseUrl}${basePath}/${this.langStore.lang}${panicButtonEndpoints.all}`
      await this.$axios
        .get(url)
        .then((response) => response.data)
        .then((data: { data: string }) => (this.text = data.data))
        .then(() => (this.loading = false))
        .catch(() => {
          this.loading = false
          this.text = 'Something went wrong 😱'
        })
    },
  },
  components: {
    BaseText,
    BaseButton,
    TheFooter,
    TheMain,
    BaseEmoticon,
    Loading,
  },
})
</script>
