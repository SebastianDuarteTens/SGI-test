<template>
  <div class="container">
    <div class="logo">
      <img src="/SGI.svg" alt="Seafloor Geotech" />
    </div>
    <p>Coming Soon...</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
}

.logo {
  width: 100%;
  max-width: 400px;
  height: auto;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  margin: 0 auto;
}

.logo img {
  width: 100%;
  height: auto;
}

p {
  font-size: 2rem;
  color: #666;
  margin-top: 20px;
}


@media (max-width: 768px) {
  p {
    font-size: 1.5rem;
  }

  .logo {
    max-width: 300px;
    padding: 1em;
  }
}

@media (max-width: 480px) {
  p {
    font-size: 1.2rem;
  }

  .logo {
    max-width: 250px;
    padding: 0.8em;
  }
}
</style>


<style>
@import url(./style.css);
</style>
