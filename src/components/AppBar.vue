<template>
    <v-app-bar app color="grey darken-3" dark>
        <v-app-bar-nav-icon @click="$emit('toggle-drawer')"></v-app-bar-nav-icon>
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
</template>

<script>
import { mapState } from 'vuex' 

export default {
    name: 'Appbar',
    computed: mapState(['cartItems']),
    data: () => ({
        drawer: false,
    }),
}
</script>

<style>

</style>

