<template>
  <div class="equipment-slider-container">
    <div class="equipment-slider">
      <transition name="fade">
        <div v-if="slides[currentSlide]" :key="currentSlide" class="slide"
          :style="{ backgroundImage: slides[currentSlide].background }">
          <div class="content">
            <h2 class="title">EQUIPMENT</h2>
            <div class="row items-center justify-between">
              <h2 class="subtitle">{{ slides[currentSlide].subtitle }}</h2>
              <a :href="slides[currentSlide].downloadLink" target="_blank" rel="noopener noreferrer"
                style="outline: none; text-decoration: none;">
                <div class="custom-download-btn">
                  <div class="left">
                    <font-awesome-icon :icon="['fas', 'file-pdf']" />
                  </div>
                  <div class="right">
                    Download
                  </div>
                </div>
              </a>
            </div>
            <div class="description-box">
              <p class="description-text">{{ slides[currentSlide].description }}</p>
            </div>
          </div>
          <!-- Botones de navegación izquierda y derecha -->
          <div class="nav-button left" @click="prevSlide">‹</div>
          <div class="nav-button right" @click="nextSlide">›</div>
        </div>
      </transition>
    </div>
  </div>
  <div class="equipment-navigation">
    <div v-for="(slide, index) in slides" :key="'nav-btn-' + index" class="equipment-button"
      :class="{ active: index === currentSlide, 'equipment-disabled': index !== currentSlide }"
      @click="goToSlide(index)" :style="index === currentSlide ? { backgroundImage: slide.background } : {}">
      <span class="equipment-label">{{ slide.label }}</span>
      <img :src="slide.thumbnail" alt="thumbnail" class="equipment-icon" />
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'

import Slide1 from '../assets/ammonite.jpg'
import Slide2 from '../assets/cone.jpg'
import Slide3 from '../assets/thermal.jpg'
import Slide4 from '../assets/rossfelder.jpg'
import Slide5 from '../assets/UCM.jpg'
import ico1 from '../assets/ammoIco.svg'
import ico2 from '../assets/coneIco.svg'
import ico3 from '../assets/rossIco2.svg'
import ico4 from '../assets/thermalIco.svg'
import ico5 from '../assets/UcmIco.svg'

const slides = [
  {
    background: `linear-gradient(rgba(8, 76, 42, 0.9), rgba(8, 76, 42, 0.9)), url(${Slide1})`,
    thumbnail: ico1,
    label: 'Ammonite',
    subtitle: 'AMMONITE',
    description: 'Engineered for durability and versatility, our rover is a robust, research-grade platform designed to perform in challenging subsea environments. It can be outfitted with a suite of modular accessories and sensors to supports a wide range of geotechnical and scientific missions.Built to endure, equipped to discover.',
    downloadLink: 'https://drive.google.com/file/d/18jocZURfyIcVfLQZ1U6P5aqkhzAKnkiC/view?usp=sharing'
  },
  {
    background: `linear-gradient(rgba(19, 95, 137, 0.9), rgba(19, 95, 137, 0.9)), url(${Slide2})`,
    thumbnail: ico2,
    label: 'Cone',
    subtitle: 'CONE',
    description: 'Not your ordinary seismic cone. A state of the art soil characterization tool designed around ISO 22476-1, delivering high-precision data and seamless integration with a variety of geotechnical accessories.',
    downloadLink: 'https://drive.google.com/file/d/1e8Sj--dVTjSCGBr9TaFKLwoQrPmqOGr_/view?usp=sharing'
  },
  {
    background: `linear-gradient(rgba(124, 11, 19, 0.9), rgba(124, 11, 19, 0.9)), url(${Slide3})`,
    thumbnail: ico3,
    label: 'Rossfelder P-5',
    subtitle: 'ROSSFELDER P-5 VIBROCORE',
    description: 'Designed for improved control over penetration depth and vibration frequency, our vibrocoring system and buoyancy frame ensures high quality cores, enabling more reliable data for your offshore projects.',
    downloadLink: 'https://drive.google.com/file/d/11dYpFP1rN6wwKcmqO6eujyw_s61K4Ab4/view?usp=sharing'
  },
  {
    background: `linear-gradient(rgba(214, 122, 39, 0.9), rgba(214, 122, 39, 0.9)), url(${Slide4})`,
    thumbnail: ico4,
    label: 'Thermal Module',
    subtitle: 'THERMAL MODULE',
    description: 'Harness the power of in‑situ thermal conductivity testing to get data that truly reflects the seabed in its natural state.',
    downloadLink: 'https://drive.google.com/file/d/11H46l0x1-QJA0B90C739LvT3eSum355M/view?usp=sharing'
  },
  {
    background: `linear-gradient(rgba(97, 38, 211, 0.9), rgba(97, 38, 211, 0.9)), url(${Slide5})`,
    thumbnail: ico5,
    label: 'TD-UCM',
    subtitle: 'TD-UCM',
    description: 'Versatile, ready, reliable, our all‑in‑one programmable Time-domain Universal Control Module (TD-UCM) will be your best choice when handling various automation, control and data logging needs.',
    downloadLink: 'https://drive.google.com/file/d/1mvhNh3WpzmHVwc6i-xYmcgsXE6iBSLae/view?usp=sharing'
  }
]

const currentSlide = ref(0)

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const goToSlide = (index) => {
  currentSlide.value = index;
}
</script>

<style scoped>
.equipment-slider-container {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 684px;
  margin-top: -11vh;
}

.equipment-slider {
  position: relative;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
  color: white;
}

.content {
  min-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.title {
  font-family: 'Roboto', sans-serif;
  font-size: 50pt;
  font-weight: 900;
  color: white;
  opacity: 35%;
  margin-bottom: 210px;
  mix-blend-mode: hard-light;
}

.subtitle {
  font-size: 36px;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  margin-bottom: 4px;
}

.custom-download-btn {
  display: flex;
  width: 274px;
  height: 57px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  text-transform: none;
}

.custom-download-btn .left,
.custom-download-btn .right {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.custom-download-btn .left {
  width: 30%;
  background-color: white;
  color: #206988;
  font-size: 35px;
}

.custom-download-btn .right {
  flex: 1;
  padding-left: 10px;
  width: 70%;
  background-color: #206988;
  color: white;
  border-radius: 8px;
  border-right: 10px;
}

.custom-download-btn:hover {
  background-color: #206988;
}

.custom-download-btn:hover .left {
  background-color: #206988;
  color: white;
}

.custom-download-btn:hover .right {
  background-color: white;
  color: #206988;
}

.description-box {
  background: rgba(0, 0, 0, 0.4);
  padding: 20px;
  margin-top: 10px;
  max-width: 1200px;
  max-height: auto;
  border-radius: 8px;
}

.description-text {
  font-size: 18px;
  font-weight: 300;
  font-family: Roboto, sans-serif;
  margin: 0;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 80px;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  z-index: 2;
  user-select: none;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.nav-button.left {
  left: 20px;
}

.nav-button.right {
  right: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.equipment-navigation {
  max-width: 1200px;
  display: flex;
  justify-content: center;
  margin: 40px auto;
  gap: 122px;
}

.equipment-button {
  width: 500px;
  height: 57px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.equipment-button:hover {
  background-color: #206988;
  color: white;
}

.equipment-button.active {
  background-color: #206988;
  color: white;
}

.equipment-icon {
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin: 0;
}

.equipment-label {
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 600;
}

.equipment-button.equipment-disabled {
  background-color: #cccccc;
  color: #666666;
  cursor: pointer;
}

.equipment-button.equipment-disabled:hover {
  background-color: #bbbbbb;
}

.equipment-button.equipment-disabled .equipment-icon {
  filter: grayscale(100%);
}
</style>
