<template>
  <div class="home-hero row items-center">
    <div class="column q-pl-xl"
      style="max-width: 1200px; margin-top: 25vh; margin-left: 50vh; width: 100%; height: 100%;">
      <img src="../assets/SGI.svg" alt="Logo" class="hero-logo" />
      <p class="hero-text">Preparing the future with<br /><span class="highlight">advanced geotechnical</span><br /><span class="highlight">solutions</span> that
        guarantee<br /><span class="highlight">efficient, sustainable, and<br />secure projects.</span></p>
    </div>
  </div>
</template>

<style scoped>
.home-hero {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url('../assets/heroImg.jpg');
  background-size: cover;       
  background-position: center;  
  background-repeat: no-repeat; 
}

.hero-logo {
  max-width: 300px;
  width: 100%;
  margin-bottom: 1rem;
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
</style>