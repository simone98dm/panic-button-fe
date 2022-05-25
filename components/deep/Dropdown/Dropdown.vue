<template>
  <select @change="updateSelection" :value="selected">
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
  methods: {
    updateSelection(e: any) {
      this.$emit('change', e.target.value)
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