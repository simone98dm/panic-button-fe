<template>
  <div v-on="$listeners" class="emoticon">
    <rocket v-if="this.icon === 'rocket'" />
    <panic v-if="this.icon === 'panic'" />
    <pizza v-if="this.icon === 'pizza'" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Rocket from '~/components/deep/BaseEmoticon/Emoticons/Rocket.vue'
import Panic from '~/components/deep/BaseEmoticon/Emoticons/Panic.vue'
import Pizza from '~/components/deep/BaseEmoticon/Emoticons/Pizza.vue'

export default Vue.extend({
  name: 'BaseEmoticonComponent',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  components: { Rocket, Panic, Pizza },
})
</script>

<style scoped>
.emoticon {
  display: inline-block;
}
</style>
