import { defineStore } from 'pinia'
import { Themes } from '~/common/enums'

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => ({
    theme: Themes.LIGHT,
  }),
  actions: {
    setTheme(theme: Themes) {
      this.theme = theme
    },
  },
})
