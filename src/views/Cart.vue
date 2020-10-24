<template>
  <v-container>
    <v-layout column>
      <v-flex xs4 v-for='beer in beers' :key='beer.id'>
        <Beer :beer='beer'/>
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
  computed: mapState(['beers']),
}
</script>
