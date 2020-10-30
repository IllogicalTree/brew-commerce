<template>
  <v-container class="vCon">
    <h1>Your Cart:</h1>
    <br /><br />
    <h2 v-if='!cart.length'>Add some items to your cart first!</h2>
    <v-layout column v-else>
      <v-flex xs4 v-for="beer in cart" :key="beer.id">
        <Beer :beer="beer" />
        <p class="Quantity">Quantity: {{ beer.quantity }}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Beer from "@/components/Beer.vue";
import { mapState } from "vuex";

export default {
  name: "Beers",
  components: {
    Beer,
  },
  computed: mapState(["cart"]),
};
</script>

<style scoped>
.vCon {
  width: 60vh;
}

h1 {
  position: absolute;
  text-align-last: left;
  color: #000000;
}

.Quantity {
  background-color: rgb(23, 24, 24);
  color: #ffffff;
}
</style>
