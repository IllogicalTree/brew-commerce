
<template>
<div class="home-container">
  <div class="hero">
    <HeroImage />
  </div>
  <h1>Lots of beer here!</h1>
  <p>Tasty, tasy beer.</p>
</div>
</template>

<script>
import HeroImage from "@/components/HeroImage.vue";
export default {
  name: "Home",
  components: {
    HeroImage,
  },
};
</script>

<style>
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("./../assets/heroimage.jpg");

  height: 50%;
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
