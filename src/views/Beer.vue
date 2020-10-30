<template>
  <v-container>
    <v-img class="beerimg" :src="beer.image_url"></v-img>
    <h1>{{ beer.id }} - {{ beer.name }}</h1>
    <h2>{{ beer.tagline }}</h2>
    <h3>{{ beer.abv }} ABV</h3>
    <br />
    <p>{{ beer.description }}</p>
    <br />
    <div class="buttons">
      <v-btn
        id="addToCart"
        medium
        color="rgb(88, 245, 91)"
        outlined
        dark
        @click="addToCart(beer, 1)"
        >Add to cart
      </v-btn>
      <br />
      <br />
      <v-btn
        id="removeFromCart"
        medium
        color="rgb(250, 105, 95)"
        outlined
        dark
        @click="removeFromCart(beer, 1)"
        >Remove 1 from cart
      </v-btn>
      <br />
      <br />
      <v-btn @click="$router.go(-1)">Go back</v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  mounted() {
    // TODO: Big changes required here.. new beer added to state every time beer page viewed.. *facepalm*
    // Will probably change my approach and not use state for this and instead call api directly here?
    // this.$store.dispatch('getBeer', {id: this.$route.params.id})
    // TODO: Fix this horrible hardcoded wait to allow the dispatch to do its thing
    //setTimeout(() => {
    // for now lets just pray people don't refresh
    //this.beer = this.$store.state.beers.find(beer => beer.id == this.$route.params.id);
    //}, 0)
  },
  methods: {
    addToCart(beer, quantity) {
      this.$store.dispatch("addToCart", { beer: beer, quantity: quantity });
    },
    removeFromCart(beer, quantity) {
      this.$store.dispatch("removeFromCart", {
        beer: beer,
        quantity: quantity,
      });
    },
  },
  computed: {
    beerLink() {
      return "/beer/" + this.beer.id;
    },
    ...mapGetters({
      getBeer: 'getBeer'}
    ),
    beer() {
      return this.getBeer(this.$route.params.id)
    }
  },
};
</script>

<style scoped>
.beerimg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 5%;
  height: auto;
}
</style>