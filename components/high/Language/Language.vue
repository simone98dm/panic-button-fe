<template>
  <Dropdown></Dropdown>
</template>

<script lang="ts">
import Vue from 'vue'
import Dropdown from '~/components/deep/Dropdown/Dropdown.vue'
export default Vue.extend({
  name: 'LanguageComponent',
  components: { Dropdown },
})
</script>