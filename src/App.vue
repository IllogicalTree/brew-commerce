<template>
  <v-app id="app">
    <v-app-bar
      app
      color="grey darken-3"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

       <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Products</span>
        <v-icon>mdi-beer</v-icon>
      </v-btn>

      <v-btn
        href=""
        target="Beers"
        text
      >
        <span class="mr-2">View Cart</span>
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/beers">Beers</router-link>
    </div>
    
    <v-main> <router-view>  <router-view/>  </v-main>  -->
  </v-app>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
