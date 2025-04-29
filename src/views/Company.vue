<template>
  <div class="q-pa-xl bg-white" style="margin-top: -50px;">
    <div class="row items-center" style="max-width: 1200px;">

      <!-- Imagen fija -->
      <div style="width: 440px; height: 660px;">
        <img src="https://placehold.co/440x660" alt="Company image" class="full-height"
          style="width: 100%; object-fit: cover; border-radius: 18px;" />
      </div>

      <!-- Contenido derecho -->
      <div class="q-ml-xl column q-gutter-md" style="flex: 1;">
        <h2 class="company">THE COMPANY</h2>
        <p class="description-text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>

        <!-- Ítems -->
        <div class="column q-gutter-md" style="margin-top: 2px;">
          <div class="row items-center q-gutter-xs">
            <q-icon class="my-icon" :style="{ width: 'auto', height: '56px' }">
              <img src="../assets/ico_tech.svg" />
            </q-icon>
            <div>
              <h3 class="item-subtitle q-mb-xs">Advanced Geotechnical Technology</h3>
              <p class="description-text q-mb-none">Lorem ipsum dolor namet, consectetuer amet elit.</p>
            </div>
          </div>

          <div class="row items-center q-gutter-xs">
            <q-icon class="my-icon" :style="{ width: 'auto', height: '56px' }">
              <img src="../assets/ico_team.svg" />
            </q-icon>
            <div>
              <h3 class="item-subtitle q-mb-xs">Qualified Work Team</h3>
              <p class="description-text q-mb-none">Lorem ipsum dolor namet, consectetuer amet elit.</p>
            </div>
          </div>

          <div class="row items-center q-gutter-xs">
            <q-icon class="my-icon" :style="{ width: 'auto', height: '56px' }">
              <img src="../assets/ico_eco.svg" />
            </q-icon>
            <div>
              <h3 class="item-subtitle q-mb-xs">Sustainable Technology</h3>
              <p class="description-text q-mb-none">Lorem ipsum dolor namet, consectetuer amet elit.</p>
            </div>
          </div>

          <div class="row items-center q-gutter-xs">
            <q-icon class="my-icon" :style="{ width: 'auto', height: '56px' }">
              <img src="../assets/ico_vision.svg" />
            </q-icon>
            <div>
              <h3 class="item-subtitle q-mb-xs">Looking To The Future</h3>
              <p class="description-text q-mb-none">Lorem ipsum dolor namet, consectetuer amet elit.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.company {
  font-family: 'Roboto', sans-serif;
  font-size: 50pt;
  font-weight: 900;
  color: #206988;
  opacity: 60%;
  margin-bottom: 10px;
  margin-left: 0px;
}

.my-icon {
  height: 56px;
  margin-right: 16px;
  display: flex;
  align-items: flex-start;
}

.item-subtitle {
  color: #1F6887;
  font-size: 25px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

.description-text {
  color: #666666;
  font-size: 18pt;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  margin: 0;
}
</style>