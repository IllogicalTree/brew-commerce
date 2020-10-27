<template>
  <v-container>
    <v-row>
      <p>ABV {{abv}}</p>
      <v-range-slider
          v-model='abv'
          max='60'
          min='0'
      ></v-range-slider>
      <v-btn @click='setFilters()'>Apply Filters</v-btn>
    </v-row>
    <v-layout row wrap>
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
  methods: {
    //https://www.digitalocean.com/community/tutorials/vuejs-implementing-infinite-scroll
    loadBeersOnScroll() {
      window.onscroll = () => {
        let bottomOfWindow = Math.ceil(document.documentElement.scrollTop) + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.$store.dispatch('getBeers')
        }
      }
    },
    setFilters() {
      this.$store.dispatch('setFilters', {
        minABV: this.abv[0],
        maxABV: this.abv[1]
      })
    }
  },
  computed: mapState(['beers']),
  mounted() {
    if (!this.$store.state.beers.length > 0) {
      this.$store.dispatch('getBeers')
    }
    this.loadBeersOnScroll();
  },
  created() {

  },
  beforeDestroy() {
    window.onscroll = null
  },
  data: function() {
    return {
      abv: [0, 60],
    }
  }
}
</script>
