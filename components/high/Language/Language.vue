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
export default Vue.extend({
  name: 'LanguageComponent',
  data() {
    return {
      currentLanguage: '',
      availableLanguage: [Languages.EN, Languages.IT],
    }
  },
  mounted() {
    this.currentLanguage = this.$store.getters.currentLang
  },
  methods: {
    changeLanguage(newLanguage: Languages) {
      this.$store.dispatch('changeLanguage', newLanguage)
    },
  },
  components: { Dropdown },
})
</script>