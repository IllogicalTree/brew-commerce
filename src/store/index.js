import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: []
  },
  mutations: {
    setBeers (state, beers) {
      state.beers = beers
    }
  },
  actions: {
    getBeers ({commit}) {
      axios
        .get('https://api.punkapi.com/v2/beers')
        .then(resp => resp.data)
        .then(beers => {
          commit('setBeers', beers)
        })
    }
  },
  modules: {
  }
})
