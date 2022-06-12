<script setup lang="ts">
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
const testData = {
  labels: ['01.06', '02.06', '03.06', '04.06', '05.06', '06.06', '07.06', '08.06'],
  datasets: [
    {
      label: '% napełnienia',
      data: [10, 15, 17, 25, 54, 62, 66, 70],
      backgroundColor: ['#2389DA', '#2389DA', '#2389DA', '#2389DA', '#2389DA'],
      borderColor: '#2389DA',
    },
  ],
};
</script>

<template>
  <div class="my-card-bagry my-card">
    <QCard flat class="wycentruj-ten-card-bagry">
      <QCardSection>
        <div class="ułuzmy-wnetrze-carda-bagry">
          <QAvatar size="xl">
            <img src="src\assets\Lake icon.svg" />
          </QAvatar>
          <div class="trzeba-to-rozsunac-bagry">
            <div class="text-h5 zbiornik-blu-blublu-blu-bagry">
              <b>Bagry</b>
            </div>
            <div class="text-subtitle1 po-protu-opacity-bagry">
              Zalew Bagry, Kraków
            </div>
          </div>
          <QIcon
            class="po-protu-opacity-bagry"
            name="fas fa-solid fa-location-dot"
          />
        </div>
      </QCardSection>
    </QCard>
    <div class="centru-centru">
      <span>Poziom wody 70%</span>
    </div>
    <div>
      <LineChart :chart-data="testData" />
    </div>
  </div>
</template>

<style lang="scss">
.my-card-bagry {
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 70px;
}
.wycentruj-ten-card-bagry {
  margin: auto;
  border-radius: 8px !important;
  margin-bottom: 20px;
}
.ułuzmy-wnetrze-carda-bagry {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.po-protu-opacity-bagry {
  opacity: 70%;
}
.trzeba-to-rozsunac-bagry {
  display: flex;
  flex-direction: column;
  align-content: space-between;
}
.zbiornik-blu-blublu-blu-bagry {
  width: 200px;
}
.centru-centru {
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
}
</style>
