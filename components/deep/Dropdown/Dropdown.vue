<template>
  <select
    v-on="$listeners"
    :value="selected"
    class="dark:bg-gray-600 dark:text-white text-dark bg-gray-100"
  >
    <option v-for="(el, i) in this.data" :key="i" :value="el">{{ el }}</option>
  </select>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'DropdownComponent',
  props: {
    data: {
      type: Array,
      default: [],
    },
    selected: {
      type: String,
      default: '',
    },
  },
})
</script>

<style scoped>
select {
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 5px;
}
</style>
