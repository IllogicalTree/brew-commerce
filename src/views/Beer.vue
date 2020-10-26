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
    this.beer = this.$store.state.beers.find(beer => beer.id == this.$route.params.id)
  }
}
</script>