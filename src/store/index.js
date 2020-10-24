import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: 1,
    beers: [],
    cart: [],
  },
  mutations: {
    addBeers (state, beers) {
      state.beers = state.beers.concat(beers)
    },
    addToCart (state, payload) {
      let beer = payload.beer
      let quantity = payload.quantity
      let beerInCart = state.cart.find(prod => prod.id == beer.id)
      if (beerInCart) {
        let index = state.cart.indexOf(beerInCart)
        state.cart[index].quantity += quantity
      } else {
        state.cart = state.cart.concat({
          ...beer,
          quantity
        })
      }
    },
    removeFromCart (state, beer, quantity) {
      console.log('REMOVE', beer.name, quantity)
    }
  },
  actions: {
    getBeers ({commit}) {
      axios
        .get(`https://api.punkapi.com/v2/beers?page=${this.state.page}`)
        .then(resp => resp.data)
        .then(beers => {
          this.state.page ++;
          commit('addBeers', beers)
        })
        .catch(error => console.log(error))
    },
    addToCart ({commit}, beer) {
      commit('addToCart', beer)
    }
  },
  modules: {
  }
})
