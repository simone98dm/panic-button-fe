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
      currentLanguage: Languages.IT,
      availableLanguage: [Languages.IT],
    }
  },
  mounted() {
    this.currentLanguage = this.$store.getters.currentLang
  },
  methods: {
    changeLanguage(newLanguage: any) {
      const lang = newLanguage.target.value;
      this.$store.dispatch('changeLanguage', lang)
    },
  },
  components: { Dropdown },
})
</script>