<script setup lang="ts">

</script>

<template>
  <div class="my-card my-card-pogoda">
    <div class="podwyzszenie-daty">
      <span><b>Dziś 11.06</b></span>
    </div>
    <QCard class="wycentruj-ten-card bg-primary">
      <QCardSection>
        <div class="ułuzmy-wnetrze-carda">
          <QAvatar size="lg">
            <img src="../assets/sun-solid1.svg" />
          </QAvatar>
          <div class="trzeba-to-rozsunac">
            <div class="text-h6 zbiornik-blu-blublu-blu">Słonecznie</div>
            <div class="text-subtitle2 po-protu-opacity">Wilgotność 10%</div>
          </div>
          <div class="troche-wieksze">
            <span><b>21 °C</b></span>
          </div>
        </div>
      </QCardSection>
    </QCard>
    <div class="podwyzszenie-daty">
      <span><b>Niedziela 12.06</b></span>
    </div>
    <QCard class="wycentruj-ten-card bg-primary">
      <QCardSection>
        <div class="ułuzmy-wnetrze-carda">
          <QAvatar size="lg">
            <img src="../assets/cloud-solid.svg" />
          </QAvatar>
          <div class="trzeba-to-rozsunac">
            <div class="text-h6 zbiornik-blu-blublu-blu">Pochmurno</div>
            <div class="text-subtitle2 po-protu-opacity">Wilgotność 45%</div>
          </div>
          <div class="troche-wieksze">
            <span><b>14 °C</b></span>
          </div>
        </div>
      </QCardSection>
    </QCard>
    <div class="podwyzszenie-daty">
      <span><b>Poniedziałek 13.06</b></span>
    </div>
    <QCard class="wycentruj-ten-card bg-primary">
      <QCardSection>
        <div class="ułuzmy-wnetrze-carda">
          <QAvatar size="lg">
            <img src="../assets/cloud-showers-heavy-solid.svg" />
          </QAvatar>
          <div class="trzeba-to-rozsunac">
            <div class="text-h6 zbiornik-blu-blublu-blu">Deszcz</div>
            <div class="text-subtitle2 po-protu-opacity">Wilgotność 98%</div>
          </div>
          <div class="troche-wieksze">
            <span><b>10 °C</b></span>
          </div>
        </div>
      </QCardSection>
    </QCard>
    <div class="podwyzszenie-daty">
      <span><b>Wtorek 14.06</b></span>
    </div>
    <QCard class="wycentruj-ten-card bg-primary">
      <QCardSection>
        <div class="ułuzmy-wnetrze-carda">
          <QAvatar size="lg">
            <img src="../assets/cloud-sun-solid.svg" />
          </QAvatar>
          <div class="trzeba-to-rozsunac">
            <div class="text-h6 zbiornik-blu-blublu-blu">Pogodnie</div>
            <div class="text-subtitle2 po-protu-opacity">Wilgotność 30%</div>
          </div>
          <div class="troche-wieksze">
            <span><b>17 °C</b></span>
          </div>
        </div>
      </QCardSection>
    </QCard>
  </div>
</template>

<style lang="scss">
.my-card-pogoda {
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 30px;
}

.wycentruj-ten-card {
  margin: auto;
  border-radius: 8px !important;
  margin-bottom: 20px;
}

.ułuzmy-wnetrze-carda {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.po-protu-opacity {
  opacity: 70%;
}

.trzeba-to-rozsunac {
  display: flex;
  flex-direction: column;
  align-content: space-between;
}

.zbiornik-blu-blublu-blu {
  width: 120px;
}

.podwyzszenie-daty {
  margin-bottom: 12px;
  margin-left: 10px;
  font-size: 1.3rem;
  opacity: 70%;
}

.troche-wieksze {
  font-size: 1rem;
}
</style>
