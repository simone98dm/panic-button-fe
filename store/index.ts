import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Languages } from '~/common/enums'

export const state = () => ({
  lang: Languages.IT,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  currentLang: (state) => state.lang,
}

export const mutations: MutationTree<RootState> = {
  CHANGE_I18N: (state, newName: Languages) => (state.lang = newName),
}

export const actions: ActionTree<RootState, RootState> = {
  changeLanguage({ commit }, val) {
    commit('CHANGE_I18N', val)
  },
}
