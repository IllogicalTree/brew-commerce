<template>
  <v-app id="app">
    <v-app-bar app color="grey darken-3" dark>
      <div class="d-flex align-center">

        <v-img
          alt=""
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="@/assets/logo.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      
      <v-btn to="/" text>
        <span class="mr-2">Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/beers" text>
        <span class="mr-2">Products</span>
        <v-icon>mdi-beer</v-icon>
      </v-btn>

      <v-btn to="/cart" text>
        <span class="mr-2">View Cart ({{cartItems}})</span>
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-main> 
      <router-view/>  
    </v-main> 

    <v-footer fixed>
      This is a non-commercial website developed as part of coursework at the University of the Highlands and Islands, to allow student teams to experiment with building websites based on open APIs
    </v-footer>

  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import { mapState } from 'vuex' 

export default {
  name: 'App',
  computed: mapState(['cartItems']),
}
</script>