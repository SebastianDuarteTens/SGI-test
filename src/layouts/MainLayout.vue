<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

</script>

<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated class="bg-white text-black shadow-md">
            <div class="q-pa-md row items-center justify-between"
                style="max-width: 1200px; margin: auto; width: 100%; height: 100%;">
                <div style="width: 137px;">
                    <RouterLink to="/">
                        <img src="../assets/SGI.svg">
                    </RouterLink>
                </div>
                <q-btn v-show="$q.screen.width <= 670" flat dense round @click="leftDrawerOpen = true" class="q-ml-sm barsIcon"  style="margin-left: auto;">
                    <font-awesome-icon :icon="['fas', 'bars']" />
                </q-btn>

                <q-drawer v-show="$q.screen.width <= 670" v-model="leftDrawerOpen" side="right" overlay bordered behavior="mobile" class="bg-white">
                    <q-list padding>
                        <q-item clickable v-ripple to="/" :active="$route.path === '/'"
                            active-class="drawer-active-item">
                            <q-item-section>Home</q-item-section>
                        </q-item>
                        <q-item clickable v-ripple to="/company" :active="$route.path === '/company'"
                            active-class="drawer-active-item">
                            <q-item-section>Company</q-item-section>
                        </q-item>
                        <q-item clickable v-ripple to="/equipment" :active="$route.path === '/equipment'"
                            active-class="drawer-active-item">
                            <q-item-section>Equipment</q-item-section>
                        </q-item>
                        <q-item clickable v-ripple to="/contact" :active="$route.path === '/contact'"
                            active-class="drawer-active-item">
                            <q-item-section>Contact</q-item-section>
                        </q-item>
                    </q-list>
                </q-drawer>
                <!-- navigation buttons -->
                <div class="row q-gutter-sm" v-show="$q.screen.width > 670">
                    <q-btn class="navBtn" flat unelevated :class="$route.path === '/' ? 'active-link' : ''"
                        :ripple="false" label="Home" to="/"
                        style="color: #206988; padding: 20px; font-style: normal;" />
                    <q-btn class="navBtn" flat unelevated :class="$route.path === '/company' ? 'active-link' : ''"
                        :ripple="false" label="The Company" to="/company" style="color: #206988; padding: 20px;" />
                    <q-btn class="navBtn" flat unelevated :class="$route.path === '/equipment' ? 'active-link' : ''"
                        :ripple="false" label="Equipment" to="/equipment" style="color: #206988; padding: 20px;" />
                    <q-btn class="navBtn" flat unelevated :class="$route.path === '/contact' ? 'active-link' : ''"
                        :ripple="false" label="Contact" to="/contact" style="color: #206988; padding: 20px;" />
                </div>
            </div>
        </q-header>

        <q-page-container>
            <q-icon name="mdi-home" size="48px" color="primary" />
            <router-view />
        </q-page-container>

        <q-footer style="background-color:#8F1313;">
            <div class="row items-center justify-between q-px-lg"
                style="max-width: 1200px; margin: auto; width: 100%; height: 100%;">

                <!--Container rights reserverd-->
                <div class="column self-stretch justify-center">
                    <p class="company q-mb-none">Seafloor Geotech © 2025.</p>
                    <p class="rights q-mt-none">All rights reserved.</p>
                </div>

                <!-- social media icons -->
                <div class="row items-center q-gutter-x-sm">
                    <router-link to="/linkedin" aria-label="LinkedIn" class="no-decoration q-mx-xs">
                        <font-awesome-icon :icon="['fab', 'linkedin-in']" class="social-icon" />
                    </router-link>
                    <!-- <router-link to="/facebook" aria-label="Facebook" class="no-decoration q-mx-xs">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" class="social-icon" />
                    </router-link>
                    <router-link to="/x" aria-label="X" class="no-decoration q-mx-xs">
                        <font-awesome-icon :icon="['fab', 'x-twitter']" class="social-icon" />
                    </router-link>
                    <router-link to="/instagram" aria-label="Instagram" class="no-decoration q-mx-xs">
                        <font-awesome-icon :icon="['fab', 'instagram']" class="social-icon" />
                    </router-link>
                    <router-link to="/youtube" aria-label="Youtube" class="no-decoration q-mx-xs">
                        <font-awesome-icon :icon="['fab', 'youtube']" class="social-icon" />
                    </router-link> -->
                </div>

            </div>
        </q-footer>
    </q-layout>
</template>

<style scoped>
/* header {
    height: 13vh;
} */

.q-page {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 8vh); /* Deja espacio para el footer */
  padding-bottom: 8vh; /* Asegura que el contenido no se superponga */
}

footer {
    height: 8vh;
}

.q-layout__footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.navBtn:hover {
    box-shadow: none !important;
    background-color: #206988 !important;
    color: white !important;
}

.column {
    margin-top: 1.2vh;
}

.company,
.rights {
    font-family: 'Montserrat', sans-serif;
}

.company {
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 0;
}

.rights {
    font-size: 0.9rem;
    margin-top: 0;
    opacity: 0.7;
}

a {
    padding: 8px;
    color: inherit;
    text-decoration: none;
}

a:visited {
    color: inherit;
}

.social-icon {
    font-size: 2rem;
    opacity: 50%;
}

.social-icon:hover {
    opacity: 100%;
}

.active-link {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 2px;
    font-weight: bold;
}

.barsIcon {
  font-size: 2rem;
  color: #206988;
  margin-right: 0;
}

.q-drawer {
    color: #206988;
    font-family: 'Montserrat', sans-serif;
}

.q-drawer .q-item__label,
.q-drawer .q-item__section {
    color: #206988 !important;
    font-family: 'Montserrat', sans-serif !important;
}

.drawer-active-item {
    background-color: #e6f3f9 !important;
    border-left: 4px solid #206988;
    color: #206988 !important;
    font-weight: bold;
    border-radius: 5px;
}

/* === MÓVILES PEQUEÑOS (≤ 480px) === */
@media (max-width: 480px) {
  footer {
    height: auto;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .company {
    font-size: 1rem;
    text-align: left;
  }

  .rights {
    font-size: 0.75rem;
    text-align: left;
  }

  .social-icon {
    font-size: 1.5rem;
  }

  .navBtn {
    font-size: 14px;
    padding: 10px 12px;
  }

  .barsIcon {
    font-size: 1.6rem;
    margin-right: 0;
    padding: 6px;
  }

  .column {
    margin-top: 2vh;
  }
}

/* === MÓVILES GRANDES (481px – 600px) === */
@media (min-width: 481px) and (max-width: 600px) {
  footer {
    height: auto;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .company {
    font-size: 1.1rem;
    text-align: left;
  }

  .rights {
    font-size: 0.8rem;
    text-align: left;
  }

  .navBtn {
    font-size: 15px;
  }

  .social-icon {
    font-size: 1.6rem;
  }

  .barsIcon {
    font-size: 1.8rem;
    margin-right: 0;
    padding: 8px;
  }
}

/* === TABLETS PEQUEÑOS (601px – 768px) === */
@media (min-width: 601px) and (max-width: 768px) {
  .barsIcon {
    font-size: 2rem;
    margin-right: 0;
    padding: 10px;
  }
}

/* === TABLETS (601px – 900px) === */
@media (min-width: 601px) and (max-width: 900px) {
  .navBtn {
    font-size: 16px;
    padding: 12px 16px;
  }

  .social-icon {
    font-size: 1.8rem;
  }
}

/* === LAPTOPS PEQUEÑOS (901px – 1280px) === */
@media (min-width: 901px) and (max-width: 1280px) {
  .navBtn {
    font-size: 17px;
  }

  .social-icon {
    font-size: 1.9rem;
  }
}

</style>