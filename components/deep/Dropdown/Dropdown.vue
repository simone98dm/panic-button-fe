<template>
    <select>
      <option value="en">EN</option>
      <option value="it">IT</option>
    </select>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'DropdownComponent'
})
</script>

<style scoped>
select {
    padding: 5px 10px;
    border: 1px solid grey;
    border-radius: 5px;
}
</style>