<template>
  <v-container>
    <h1>{{beer.id}} - {{beer.name}}</h1>
    <h2>{{beer.tagline}}</h2>
    <p>{{beer.description}}</p>
    <br>
    <p>{{beer}}</p>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
        beer: []
    }
  },
  mounted() {
    // TODO: Big changes required here.. new beer added to state every time beer page viewed.. *facepalm*
    // Will probably change my approach and not use state for this and instead call api directly here? 
    // this.$store.dispatch('getBeer', {id: this.$route.params.id}) 
    // TODO: Fix this horrible hardcoded wait to allow the dispatch to do its thing
    //setTimeout(() => {
        // for now lets just pray people don't refresh
        this.beer = this.$store.state.beers.find(beer => beer.id == this.$route.params.id)
    //}, 0)
  },
}
</script>