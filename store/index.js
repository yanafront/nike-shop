import Vuex from "vuex"

export const strict = false

export const state = () => ({
  article: null,
  articles: []
})

export const getters = {}
export const mutations = {
  setArticle(state, data) {
    state.article = data
  }
}
