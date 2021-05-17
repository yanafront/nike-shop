import Vuex from "vuex"

export const strict = false

export const state = () => ({
  article: null,
  articles: [],
  cartProucts: []
})

export const getters = {
  getProductsCart: state => state.cartProucts
}
export const mutations = {
  setArticle(state, data) {
    state.article = data
  },
  addProductInCart(state, data) {
    if (!state.cartProucts.find(el => el.id === data.id)) {
      state.cartProucts.push(data)
    } else {
      state.cartProucts.find(el => el.id === data.id).value = data.value
    }
  },
  deleteProductCart(state, data) {
    const deleteProductId = state.cartProucts.findIndex(el => el.id === data)
    state.cartProucts.splice(deleteProductId, 1)
  }
}
