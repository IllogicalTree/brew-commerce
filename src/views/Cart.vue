<template>
  <v-container>
    <v-layout column>
      <v-flex xs4 v-for='beer in cart' :key='beer.id'>
        <Beer :beer='beer'/>
        {{beer.quantity}}
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
