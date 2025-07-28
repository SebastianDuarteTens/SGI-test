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

/* === MÓVILES PEQUEÑOS (≤ 480px) === */
@media (max-width: 480px) {
  .hero-logo {
    max-width: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .hero-text {
    font-size: 18px;
    text-align: center;
    padding: 0 16px;
  }

  .column {
    padding-left: 16px !important;
    padding-right: 16px !important;
    align-items: center;
    text-align: center;
    margin-top: 15vh !important;
  }
}

/* === MÓVILES GRANDES (481px – 600px) === */
@media (min-width: 481px) and (max-width: 600px) {
  .hero-logo {
    max-width: 250px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .hero-text {
    font-size: 20px;
    text-align: center;
  }

  .column {
    padding-left: 24px;
    padding-right: 24px;
    align-items: center;
    margin-top: 18vh;
  }
}

/* === TABLETS (601px – 900px) === */
@media (min-width: 601px) and (max-width: 900px) {
  .hero-logo {
    max-width: 280px;
    left: 20%;
  }

  .hero-text {
    font-size: 24px;
  }

  .column {
    padding-left: 32px;
    padding-right: 32px;
    margin-top: 20vh;
  }
}

/* === LAPTOPS PEQUEÑOS (901px – 1280px) === */
@media (min-width: 901px) and (max-width: 1280px) {
  .hero-logo {
    max-width: 300px;
    left: 15%;
  }

  .hero-text {
    font-size: 28px;
  }

  .column {
    padding-left: 48px;
    padding-right: 48px;
    margin-top: 22vh;
  }
}

/* === ESCRITORIOS GRANDES (> 1280px) === */
@media (min-width: 1281px) {
  .hero-logo {
    max-width: 320px;
    left: 25%;
  }

  .hero-text {
    font-size: 32px;
  }

  .column {
    padding-left: 64px;
    padding-right: 64px;
    margin-top: 25vh;
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