<template>
  <div class="hero-image">
    <div class="hero-text">
      <h1 class="display-3 font-weight-bold mb-2">Brew-Commerce</h1>
      <h2 class="display-1 font-weight-bold mb-3">Beer glorious beer</h2>
      <br />
      <v-btn to="/beers" id="buy" x-large outlined color="success" dark
        >Buy More Beer
      </v-btn>
      <p></p>
      <v-btn to="/cart" id="view" x-large outlined color="orange" dark
        >View Cart ({{ cartItems }})
      </v-btn>
    </div>
  </div>
</template>
  
  <script>
import { mapState } from "vuex";
export default {
  name: "HeroImage",
  computed: mapState(["cartItems"]),
};
</script>

<style scoped>
/* The hero image */
>>> .hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("./../assets/heroimage.jpg");

  /* Set a specific height */
  height: 50%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

/* Place text in the middle of the image */
>>> .hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
