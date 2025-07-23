<template>
  <div class="home-hero row items-center">
    <div class="column q-pl-xl" style="max-width: 1200px; margin-top: 25vh; align-items: center;">
      <img src="../assets/SGI.svg" alt="Logo" class="hero-logo" v-show="!$q.screen.xs" />
      <!-- <p class="hero-text">Preparing the future with<br /><span class="highlight">advanced geotechnical</span><br /><span class="highlight">solutions</span> that
        guarantee<br /><span class="highlight">efficient, sustainable, and<br />secure projects.</span></p> -->
    </div>
  </div>
</template>

<style scoped>
.home-hero {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url('../assets/heroImg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  /* si usas align-items */
  align-items: center;
}


.hero-logo {
  position: absolute;
  top: 52%;
  left: 25%;
  transform: translateY(-50%);
  max-width: 300px;
  width: 100%;
  height: auto;
}

.hero-text {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 32px;
  color: #4D4D4D;
}

.highlight {
  color: #0E2D3B;
  font-weight: bold;
}

@media (max-width: 1280px) {
  .hero-logo {
    max-width: 300px;
    top: 52%;
    left: 15%;
  }
}
</style>

<style>
@media (max-width: 600px) {
  body.home-no-scroll {
    overflow-y: hidden;
    margin: 0;
    padding: 0;
    height: 100dvh;
    width: 100vw;
    background-image: url('../assets/heroImg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

onMounted(() => {
  document.body.classList.add('home-no-scroll');
});

onBeforeUnmount(() => {
  document.body.classList.remove('home-no-scroll');
});
</script>