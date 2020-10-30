<template>
  <v-container>
    <div v-if="!beer">
      <h1>Error occured loading beer details, check out our beers page.</h1>
      <v-btn @click="$router.go(-1)">Go back</v-btn>
    </div>
    <div v-if="beer">
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
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    addToCart(beer, quantity) {
      this.$store.dispatch("addToCart", { beer, quantity });
    },
    removeFromCart(beer, quantity) {
      this.$store.dispatch("removeFromCart", { beer, quantity });
    },
  },
  computed: {
    ...mapGetters({
      getBeer: "getBeer",
    }),
    beer() {
      return this.getBeer(this.$route.params.id);
    },
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