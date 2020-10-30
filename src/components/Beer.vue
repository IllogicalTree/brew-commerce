<template>
  <v-container class="vContainer">
    <v-row>
      <v-col class="vCol">
        <b class="beerName">{{ beer.id }} - {{ beer.name }}</b>
        <p class="beerDesc">{{ beer.tagline }}</p>
        <b class="beerABV">{{ beer.abv }} %ABV</b>
        <br />
        <b class="beerABV">{{ beer.ibu }} IBU</b>
        <br />
        <b class="beerABV">{{ beer.ebc }} EBC</b>
        <br />
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
        </div>
      </v-col>
      <v-col class="beerBG" justify="center">
        <router-link :to="{ name: 'Beer', params: { id: beer.id } }">
          <v-img class="beerIMG" :src="beer.image_url"></v-img>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Beer",
  props: ["beer"],
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
};
</script>

<style scoped>
.vContainer {
  height: 40vh;
  background: rgb(26, 27, 27);
  max-width: auto;
}

.vCol {
  height: 35vh;
  background: rgb(31, 32, 32);
  max-width: auto;
  overflow: hidden;
}

.beerName {
  color: rgb(237, 237, 237);
}

.beerDesc {
  color: rgb(187, 191, 187);
}

.beerABV {
  color: rgb(187, 191, 187);
}

.beerBG {
  background: rgb(21, 22, 22);
}

.beerIMG {
  max-width: 4rem;
}
</style>