<template>
    <v-container style='background: rgb(26, 27, 27)'>
        <v-row style='background: red'>
            <v-col style='background: rgb(31, 32, 32)' justify="center">
                <b>{{beer.id}} - {{beer.name}}</b>
                <p>{{beer.tagline}}</p>
                <b>{{beer.abv}} %ABV</b> <br>
                <v-btn id="addToCart" medium outlined color="rgb(88, 245, 91)" dark @click="addToCart(beer, 1)">Add to cart </v-btn>
                <v-btn id="removeFromCart" medium outlined color="orange" dark @click="removeFromCart(beer, 1)">Remove 1 from cart </v-btn>
            </v-col>
            <v-col style='background: rgb(21,22,22)' justify="center">
                <v-img max-width='2rem' :src='beer.image_url'></v-img>
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
  }
}
</script>