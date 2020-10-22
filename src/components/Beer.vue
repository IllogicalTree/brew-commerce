<template>
    <v-container style='background: pink'>
        <v-row style='background: red'>
            <v-col style='background: lime' justify="center">
                <b>{{beer.id}} - {{beer.name}}</b>
                <p>{{beer.tagline}}</p>
                <b>{{beer.abv}} %ABV</b> 
                <v-btn id="addToCart" large outlined color="orange" dark>Add to cart </v-btn>
            </v-col>
            <v-col style='background: blue' justify="center">
                <v-img max-width='2rem' :src='beer.image_url'></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'Beer',
  props: ['beer']
}
</script>