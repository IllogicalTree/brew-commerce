
<template>
  <div class="home-container">
    <div class="hero">
      <HeroImage />
    </div>
    <!-- {{ randomBeers }} -->
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
              <div class="display-1" v-if='randomBeers[i]'>
                Try {{ randomBeers[i].name }} - {{ randomBeers[i].tagline }}
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import HeroImage from "@/components/HeroImage.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: mapState(["randomBeers"]),
  async mounted() {
    if (!this.$store.state.randomBeers.length > 0) {
      for (let index = 0; index < 3; index++) {
        this.$store.dispatch("getRandomBeers")
        await new Promise(res => setTimeout(res, 1500))
      }
    }
  },
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
      slides: ["first", "second", "Third"],
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
