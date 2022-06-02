import { defineStore } from 'pinia'
import { Languages } from '~/common/enums'

export const useLangStore = defineStore({
  id: 'lang',
  state: () => ({
    lang: Languages.IT,
  }),
  actions: {
    setLanguage(lang: Languages) {
      this.lang = lang
    },
  },
})
