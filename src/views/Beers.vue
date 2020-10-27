<template>
  <v-container>
    <v-row>
      <p>ABV</p>
      <v-range-slider
          v-model='abv'
          max='60'
          min='0'
          @change='setFilters()'
      ></v-range-slider>
      <p>IBU</p>
      <v-range-slider
          v-model='ibu'
          max='100'
          min='0'
          @change='setFilters()'
      ></v-range-slider>
      <p>EBC</p>
      <v-range-slider
          v-model='ebc'
          max='100'
          min='0'
          @change='setFilters()'
      ></v-range-slider>
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
        abv_gt: this.abv[0],
        abv_lt: this.abv[1],
        ibu_gt: this.ibu[0],
        ibu_lt: this.ibu[1],
        ebc_gt: this.ebc[0],
        ebc_lt: this.ebc[1],

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
      ibu: [0, 100],
      ebc: [0, 100]
    }
  }
}
</script>
