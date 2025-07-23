<template>
  <q-page class="q-pa-xl q-px-md q-px-sm-xs company-page-content bg-white">
    <div class="row items-center row-reverse-mobile" style="max-width: 1200px;">

      <!-- Imagen fija -->
      <div class="image-column" style="width: 400px; height: 660px;">
        <img src="../assets/SGI3.jpg" alt="Company image" class="full-height"
          style="width: 100%; object-fit: cover; border-radius: 18px; display: block;" />
      </div>

      <!-- Contenido derecho -->
      <div class="q-ml-xl column q-gutter-md text-column" style="flex: 1;">
        <h2 class="company">THE COMPANY</h2>
        <p class="description-text">
          At Seafloor Geotech, we specialize in delivering solutions for offshore ops. We support clients in energy,
          telecommunications, and marine infrastructure with precise site characterization and operational support. We
          also offer a line of proprietary hardware systems engineered to perform in the most demanding underwater
          environments, ensuring accuracy, reliability, and performance where it matters most.
        </p>

        <!-- Ítems -->
        <div class="column q-gutter-sm">
          <!-- <div class="row items-center q-gutter-xs">
            <q-icon class="my-icon" :style="{ width: 'auto', height: '40px' }">
              <img src="../assets/ico_tech.svg" />
            </q-icon>
            <div>
              <h3 class="item-subtitle q-mb-xs">Advanced Geotechnical Technology</h3>
              <p class="description-text q-mb-none">In-situ precise soil characterization and exploration hardware.</p>
            </div>
          </div> -->

          <div class="row items-start q-gutter-md">
            <div class="icon-container">
              <img src="../assets/ico_tech.svg" class="my-icon" alt="Tech Icon" style="margin-top: 20px;" />
            </div>
            <div class="col">
              <h3 class="item-subtitle q-mb-xs">Advanced Geotechnical Technology</h3>
              <p class="description-text q-mb-none">
                In-situ precise soil characterization and exploration hardware.
              </p>
            </div>
          </div>

          <div class="row items-start q-gutter-md">
            <div class="icon-container">
              <img src="../assets/ico_team.svg" class="my-icon" alt="Team Icon" style="margin-top: 30px;" />
            </div>
            <div class="col">
              <h3 class="item-subtitle q-mb-xs">Qualified Work Team</h3>
              <p class="description-text q-mb-none">
                Specialized hardware and expertise in sea ops are tailored to meet our clients needs.
              </p>
            </div>
          </div>

          <div class="row items-start q-gutter-md">
            <div class="icon-container">
              <img src="../assets/ico_eco.svg" class="my-icon" alt="Eco Icon" style="margin-top: 35px;" />
            </div>
            <div class="col">
              <h3 class="item-subtitle q-mb-xs">Sustainable Technology</h3>
              <p class="description-text q-mb-none">
                Low impact to the environment is at the heart of our proprietary hardware design and operations.
              </p>
            </div>
          </div>

          <div class="row items-start q-gutter-md">
            <div class="icon-container">
              <img src="../assets/ico_vision.svg" class="my-icon" alt="Vision Icon" style="margin-top: 50px;" />
            </div>
            <div class="col">
              <h3 class="item-subtitle q-mb-xs">Looking To The Future</h3>
              <p class="description-text q-mb-none">
                Rooted in science and driven by innovation, we continuously refine our technologies and methodologies
                to meet the evolving demands of offshore and subsea industries.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<style lang="css" scoped>
.company {
  font-family: 'Roboto', sans-serif;
  font-size: 50pt;
  font-weight: 900;
  color: #206988;
  opacity: 0.6;
  margin-bottom: 10px;
  margin-left: 0px;
}

/* .my-icon {
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
} */

/* .my-icon {
  width: 50px;
  height: 50px;
  min-width: 50px;
  margin-right: 16px;
  flex-shrink: 0;
  display: block;
  align-items: center;
  align-content: center;
} */
.company-page-content {
  padding-top: 0;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  height: 100%;
}

.my-icon {
  width: 50px;
  height: 50px;
  display: block;
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
  text-align: justify;
  margin: 0;
  margin-top: -10px;
}

/* @media (max-width: 600px) {
  .company {
    font-size: 32pt;
    text-align: center;
    margin-left: 0;
    opacity: 1;
  }

  .description-text {
    font-size: 13pt;
    text-align: left;
  }

  .row.items-center {
    flex-direction: column;
    align-items: flex-start;
  }

  .q-ml-xl {
    margin-left: 0 !important;
  }

  .my-icon {
    width: 40px;
    height: 40px;
  }

  .icon-container {
    min-width: 40px;
  }
} */

/* @media (max-width: 1200px) {
  .company-page-content {
    margin-top: 13vh;
  }
} */

@media (max-width: 600px) {
  .company {
    font-size: 35pt;
    padding-left: 20px;
    padding-right: 20px;
  }

  .description-text {
    font-size: 12pt;
    padding-left: 20px;
    padding-right: 20px;
  }

  .item-subtitle {
    font-size: 16px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .row-reverse-mobile {
    flex-direction: column-reverse !important;
    align-items: center !important;
  }


  .q-ml-xl {
    margin-left: 0 !important;
  }

  .text-column {
    width: 100%;
  }

  .image-column {
    margin-top: 20px;
    width: 100%;
  }

  .full-height {
    display: block;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 18px !important;
  }
}
</style>