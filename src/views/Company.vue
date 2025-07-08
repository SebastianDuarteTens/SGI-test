<template>
  <div class="q-pa-xl bg-white" style="margin-top: -50px;">
    <div class="row items-center" style="max-width: 1200px;">

      <!-- Imagen fija -->
      <div style="width: 400px; height: 660px;">
        <img src="../assets/img.jpg" alt="Company image" class="full-height"
          style="width: 100%; object-fit: cover; border-radius: 18px;" />
      </div>

      <!-- Contenido derecho -->
      <div class="q-ml-xl column q-gutter-md" style="flex: 1;">
        <h2 class="company">THE COMPANY</h2>
        <p class="description-text">
          At Seafloor Geotech, we specialize in delivering solutions for offshore ops. We support clients in energy,
          telecommunications, and marine infrastructure with precise site characterization and operational support. We
          also offer a line of proprietary hardware systems engineered to perform in the most demanding underwater
          environments,ensuring accuracy, reliability, and performance where it matters most.
        </p>

        <!-- Ítems -->
        <div class="column q-gutter-md" style="margin-top: 2px;">
          <div class="row items-center q-gutter-xs">
            <q-icon class="my-icon" :style="{ width: 'auto', height: '40px' }">
              <img src="../assets/ico_tech.svg" />
            </q-icon>
            <div>
              <h3 class="item-subtitle q-mb-xs">Advanced Geotechnical Technology</h3>
              <p class="description-text q-mb-none">In-situ precise soil characterization and exploration hardware.</p>
            </div>
          </div>

          <div class="row items-center q-gutter-xs">
            <q-icon class="my-icon" :style="{ width: 'auto', height: '40px' }">
              <img src="../assets/ico_team.svg" />
            </q-icon>
            <div>
              <h3 class="item-subtitle q-mb-xs">Qualified Work Team</h3>
              <p class="description-text q-mb-none">Specialized hardware and expertise in sea ops are tailored to meet
                our clients needs.</p>
            </div>
          </div>

          <div class="row items-center q-gutter-xs">
            <q-icon class="my-icon" :style="{ width: 'auto', height: '40px' }">
              <img src="../assets/ico_eco.svg" />
            </q-icon>
            <div>
              <h3 class="item-subtitle q-mb-xs">Sustainable Technology</h3>
              <p class="description-text q-mb-none">Low impact to the environment is at the heart of our proprietary
                hardware design and operations.</p>
            </div>
          </div>

          <div class="row items-center q-gutter-xs">
            <q-icon class="my-icon" :style="{ width: 'auto', height: '40px' }">
              <img src="../assets/ico_vision.svg" />
            </q-icon>
            <div>
              <h3 class="item-subtitle q-mb-xs">Looking To The Future</h3>
              <p class="description-text q-mb-none">Rooted in science and driven by innovation, we continuously refine
                our technologies and methodologies to meet the evolving demands of offshore and subsea industries</p>
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
  height: 10px;
  margin-right: 16px;
  display: flex;
  align-items: flex-start;
}

.item-subtitle {
  color: #1F6887;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

.description-text {
  color: #666666;
  font-size: 15pt;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  margin: 0;
}
</style>