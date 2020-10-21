<template>
  <div>
    <div v-for='beer in beers' :key='beer.name'>
      <Beer :beer='beer'/>
    </div>
  </div>
</template>

<script>

import Beer from '@/components/Beer.vue'
import { mapState } from 'vuex' 

export default {
  name: 'Beers',
  components: {
    Beer
  },
  computed: mapState(['beers'])
}
</script>
