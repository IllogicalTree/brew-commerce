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
    getBeers ({commit}) {
      axios
        .get(`https://api.punkapi.com/v2/beers?page=${this.state.page}`)
        .then(resp => resp.data)
        .then(beers => {
          commit('incrementPage')
          commit('addBeers', beers)
        })
        .catch(error => console.log(error))
    },
    addToCart ({commit}, beer) {
      commit('modifyCart', beer)
    },
    removeFromCart ({commit}, beer) {
      beer.quantity = -beer.quantity
      commit('modifyCart', beer)
    }
  },
  modules: {
  }
})
