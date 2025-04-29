<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated class="bg-white text-black shadow-md">
            <div class="q-pa-md row items-center justify-between"
                style="max-width: 1200px; margin: auto; width: 100%; height: 100%;">
                <div style="width: 137px; overflow: hidden;">
                    <img src="../assets/SGI.svg">
                </div>
                <!-- navigation buttons -->
                <div class="row q-gutter-sm">
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
                    <router-link to="/facebook" aria-label="Facebook" class="no-decoration q-mx-xs">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" class="social-icon" />
                    </router-link>
                    <router-link to="/x" aria-label="X" class="no-decoration q-mx-xs">
                        <font-awesome-icon :icon="['fab', 'x-twitter']" class="social-icon" />
                    </router-link>
                    <router-link to="/instagram" aria-label="Instagram" class="no-decoration q-mx-xs">
                        <font-awesome-icon :icon="['fab', 'instagram']" class="social-icon" />
                    </router-link>
                </div>

            </div>
        </q-footer>
    </q-layout>
</template>

<style scoped>
header {
    height: 11vh;
}

footer {
    height: 8vh;
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
</style>