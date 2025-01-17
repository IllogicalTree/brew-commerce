import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    page: 1,
    beers: [],
    cart: [],
    cartItems: 0,
    filterString: "",
    randomBeers: []
  },
  mutations: {
    incrementPage(state) {
      state.page++;
    },
    addBeers(state, beers) {
      state.beers = state.beers.concat(beers);
    },
    addRandomBeers(state, randomBeers) {
      state.randomBeers = state.randomBeers.concat(randomBeers);
    },
    clearBeers(state) {
      state.beers = [];
      state.page = 1;
    },
    setFilterString(state, filterString) {
      state.filterString = filterString;
    },
    modifyCart(state, { beer, quantity }) {
      let beerInCart = state.cart.find(prod => prod.id == beer.id);
      if (beerInCart) {
        let index = state.cart.indexOf(beerInCart);
        if (state.cart[index].quantity > 0) {
          state.cart[index].quantity += quantity;
          state.cartItems += quantity;
        }
        if (state.cart[index].quantity == 0) {
          state.cart.splice(index, 1);
        }
      } else {
        if (quantity > 0) {
          state.cart = state.cart.concat({
            ...beer,
            quantity
          });
          state.cartItems += quantity;
        }
      }
    }
  },
  actions: {
    getBeers({ commit, state }, filterString) {
      const filter = filterString || state.filterString;
      axios
        .get(`https://api.punkapi.com/v2/beers?page=${state.page}${filter}`)
        .then(resp => resp.data)
        .then(beers => {
          commit("incrementPage");
          commit("addBeers", beers);
        })
        .catch(error => console.log(error));
    },
    getRandomBeers({ commit }) {
      axios
        .get(`https://api.punkapi.com/v2/beers/random`)
        .then(resp => resp.data)
        .then(randomBeers => commit("addRandomBeers", randomBeers))
        .catch(error => console.log(error));
    },
    addToCart({ commit }, beer) {
      commit("modifyCart", beer);
    },
    removeFromCart({ commit }, beer) {
      beer.quantity = -beer.quantity;
      commit("modifyCart", beer);
    },
    setFilters({ commit, dispatch }, filters) {
      const filter = `&abv_gt=${filters.abv_gt}&abv_lt=${filters.abv_lt}&ibu_gt=${filters.ibu_gt}&ibu_lt=${filters.ibu_lt}&ebc_gt=${filters.ebc_gt}&ebc_lt=${filters.ebc_lt}`;
      commit("clearBeers");
      commit("setFilterString", filter);
      dispatch("getBeers", filter);
    }
  },
  getters: {
    getBeer: state => id => state.beers.find(beer => beer.id == id)
  }
});
