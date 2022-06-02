<template>
  <div>
    <Dropdown
      :data="availableLanguage"
      :selected="currentLanguage"
      @change="changeLanguage"
    ></Dropdown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Languages } from '~/common/enums'
import Dropdown from '~/components/deep/Dropdown/Dropdown.vue'
import { useLangStore } from '~/store/lang.store'
export default Vue.extend({
  name: 'LanguageComponent',
  data() {
    return {
      currentLanguage: Languages.IT,
      availableLanguage: [Languages.IT, Languages.EN],
      langStore: useLangStore(),
    }
  },
  mounted() {
    this.currentLanguage = this.langStore.lang as Languages
  },
  methods: {
    changeLanguage(newLanguage: any) {
      const lang = newLanguage.target.value as Languages
      this.langStore.setLanguage(lang)
    },
  },
  components: { Dropdown },
})
</script>
