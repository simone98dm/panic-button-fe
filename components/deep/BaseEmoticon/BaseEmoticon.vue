<template>
  <div @click="clickHandler" style="display: inline-block">
    <rocket v-if="this.icon === 'rocket'" />
    <panic v-if="this.icon === 'panic'" />
    <pizza v-if="this.icon === 'pizza'" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Rocket from '~/components/deep/BaseEmoticon/Emoticons/Rocket.vue'
import Panic from '~/components/deep/BaseEmoticon/Emoticons/Panic.vue'
import Pizza from '~/components/deep/BaseEmoticon/Emoticons/Pizza.vue'

enum Icons {
  ROCKET = 'rocket',
  PANIC = 'panic',
  PIZZA = 'pizza',
}

export default Vue.extend({
  name: 'BaseEmoticonComponent',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  methods: {
    clickHandler() {
      this.$emit('onclick')
    },
  },
  components: { Rocket, Panic, Pizza },
})
</script>