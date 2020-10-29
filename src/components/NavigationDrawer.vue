<template>
    <v-navigation-drawer
        v-model="drawer"
        app
    >
        <v-list 
            nav 
            dense
        >
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
        </v-list>

    </v-navigation-drawer>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'NavigationDrawer',
    data: () => ({
        drawer: false
    }),
    computed: mapState(['cartItems']),
}
</script>

<style>

</style>
