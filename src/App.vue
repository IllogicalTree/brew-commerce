<template>
  <v-app id="app">
    <!-- 
      This is a fun one.. so the app bar emits a event named toggle-drawer when the button is clicked
      I toggle the drawer property of the ref named drawer which just refers to the drawer within the data() inside the nav component..
      Might be one better explain in a meeting..

      Alternatively I could have just done this in the global store, 
      I chose not to because no other components need access to this
    -->
    <AppBar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" />
    <NavigationDrawer ref="drawer" />

    <v-main>
      <router-view />
    </v-main>

    <v-footer fixed>
      This is a non-commercial website developed as part of coursework at the
      University of the Highlands and Islands, to allow student teams to
      experiment with building websites based on open APIs
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
import NavigationDrawer from "./components/NavigationDrawer.vue";
import AppBar from "./components/AppBar.vue";

export default {
  name: "App",
  components: {
    NavigationDrawer,
    AppBar,
  },
};
</script>