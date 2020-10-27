
<template>
  <div class="home-container">
    <div class="hero">
      <HeroImage />
    </div>

    <!-- <h1>Lots of beer here!</h1>
    <p>Tasty, tasy beer.</p> -->
    <div>
      <v-carousel
        cycle
        height="120"
        hide-delimiter-background
        hide-delimiters
        show-arrows-on-hover
        vertical
        reverse
        continuous
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">Drink {{ slide }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import HeroImage from "@/components/HeroImage.vue";

export default {
  name: "Home",
  components: {
    HeroImage,
  },
  data() {
    return {
      colors: [
        "indigo",
        "warning darken -1",
        "pink darken-2",
        "light-blue darken-1",
        "deep-purple accent-4",
      ],
      slides: ["Lager", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>

<style>
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("./../assets/heroimage.jpg");

  height: 80%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.home-container {
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
