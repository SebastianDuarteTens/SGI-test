<script setup>
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div Class="logo">
      <img src="/SGI.svg" alt="Seafloo Geotech" />
  </div>
  <p>Coming Soon...</p>
</template>

<style scoped>
p {
  font-size: 2rem;
  color: #666;
}

.logo {
  width: 400px;
  height: auto;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #9c9c9c3a);
}
</style>

<style>
@import url(./style.css);
</style>
