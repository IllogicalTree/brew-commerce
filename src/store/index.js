import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: 1,
    beers: [],
    cart: [],
    cartItems: 0,
  },
  mutations: {
    incrementPage (state) {
      state.page++
    },
    addBeers (state, beers) {
      state.beers = state.beers.concat(beers)
    },
    clearBeers (state) {
      state.beers = []
      state.page = 1
    },
    modifyCart (state, payload) {
      let beer = payload.beer
      let quantity = payload.quantity
      let beerInCart = state.cart.find(prod => prod.id == beer.id)
      if (beerInCart) {
        let index = state.cart.indexOf(beerInCart)
        if (state.cart[index].quantity > 0) {
          state.cart[index].quantity += quantity
          state.cartItems += quantity
        }
        if (state.cart[index].quantity == 0) {
          state.cart.splice(index, 1);
        }
      } else {
        if (quantity > 0) {
          state.cart = state.cart.concat({
            ...beer,
            quantity
          })
          state.cartItems += quantity
        }
      }
    },
  },
  actions: {
    getBeers ({commit}, filterString) {
      if (!filterString) {
        filterString = ''
      }
      axios
        .get(`https://api.punkapi.com/v2/beers?page=${this.state.page}${filterString}`)
        .then(resp => resp.data)
        .then(beers => {
          commit('incrementPage')
          commit('addBeers', beers)
        })
        .catch(error => console.log(error))
    },
    getBeer ({commit}, obj) {
      axios
        .get(`https://api.punkapi.com/v2/beers/${obj.id}`)
        .then(resp => resp.data)
        .then(beer => {
          commit('addBeers', beer)
        })
        .catch(error => console.log(error))
    },
    addToCart ({commit}, beer) {
      commit('modifyCart', beer)
    },
    removeFromCart ({commit}, beer) {
      beer.quantity = -beer.quantity
      commit('modifyCart', beer)
    },
    setFilters ({commit, dispatch}, filters) {
      commit('clearBeers')
      let filterString = `&abv_gt=${filters.minABV}&abv_lt=${filters.maxABV}`
      dispatch('getBeers', filterString)
    }
  },
  modules: {
  }
})
