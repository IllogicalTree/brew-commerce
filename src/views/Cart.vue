<template>
  <v-container class = "vCon">
    <h1>Your Cart:</h1>
    <br><br>
      <v-layout column>
        <v-flex xs4 v-for='beer in cart' :key='beer.id'>
          <Beer :beer='beer'/>
          <p class = "Quantity">{{beer.quantity}}</p>
          </v-flex>
        </v-layout>
  </v-container>
</template>

<script>

import Beer from '@/components/Beer.vue'
import { mapState } from 'vuex' 

export default {
  name: 'Beers',
  components: {
    Beer
  },
  computed: mapState(['cart']),
}
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
  color: #000000;
}

</style>
