<template>
    <v-container class = "vContainer">
        <v-row>
            <v-col class = "vCol">
                <b class = "beerName">{{beer.id}} - {{beer.name}}</b>
                <p class = "beerDesc">{{beer.tagline}}</p>
                <b class = "beerABV">{{beer.abv}} %ABV</b> 
                <br>
                <b class = "beerABV">{{beer.ibu}} IBU</b> 
                <br>
                <b class = "beerABV">{{beer.ebc}} EBC</b> 
                    <br>
                    <br>
                <v-btn id="addToCart" medium outlined color="rgb(88, 245, 91)" dark @click="addToCart(beer, 1)">Add to cart </v-btn>
                    <br>
                    <br>
                <v-btn id="removeFromCart" medium outlined color="rgb(250, 105, 95)" dark @click="removeFromCart(beer, 1)">Remove 1 from cart </v-btn>
            </v-col>
            <v-col class = "beerBG" justify="center">
                <router-link :to='beerLink'>
                <v-img max-width='2rem' :src='beer.image_url'></v-img>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'Beer',
  props: ['beer'],
  methods: {
    addToCart(beer, quantity) {
        this.$store.dispatch('addToCart', {beer: beer, quantity: quantity})
    },
    removeFromCart(beer, quantity) {
        this.$store.dispatch('removeFromCart', {beer: beer, quantity: quantity})
    }
  },
  // TODO: Not happy with this solution, shouldn't need to create a computed prop for this
  computed: {
    beerLink() {
        return '/beer/' + this.beer.id
    }
  }
}
</script>

<style scoped>

.vContainer {
    background: rgb(26, 27, 27);
}

.vCol {
    background: rgb(31, 32, 32);
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
    background: rgb(21,22,22);
}

</style>