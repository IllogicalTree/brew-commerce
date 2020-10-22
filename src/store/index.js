import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: 1,
    beers: []
  },
  mutations: {
    setBeers (state, beers) {
      state.beers = beers
    },
    addBeers (state, beers) {
      state.beers = state.beers.concat(beers)
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
    }
  },
  modules: {
  }
})
