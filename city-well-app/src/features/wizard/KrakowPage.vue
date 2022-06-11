<script setup lang="ts">
import { ref } from "vue";
import BigNavbar from "../../BigNavbar.vue";

</script>

<template>
  <main>
    <div class="my-card-krakow">
      <QCard class="wycentruj-ten-card bg-primary">
        <QCardSection>
          <div class="ułuzmy-wnetrze-carda">
            <QAvatar>
              <img src="src\assets\Lake icon.svg" />
            </QAvatar>
            <div class="trzeba-to-rozsunac">
              <div class="text-h6 zbiornik-blu-blublu-blu">Bagry</div>
              <div class="text-subtitle2 po-protu-opacity">Poziom wody 70%</div>
            </div>
            <QIcon
              class="po-protu-opacity"
              name="fas fa-solid fa-location-dot"
            />
          </div>
        </QCardSection>
      </QCard>
      <QCard class="wycentruj-ten-card bg-primary">
        <QCardSection>
          <div class="ułuzmy-wnetrze-carda">
            <QAvatar>
              <img src="src\assets\WaterTank.svg" />
            </QAvatar>
            <div class="trzeba-to-rozsunac">
              <div class="text-h6 zbiornik-blu-blublu-blu">
                Zbiornik w parku
              </div>
              <div class="text-subtitle2 po-protu-opacity">Poziom wody 70%</div>
            </div>
            <QIcon
              class="po-protu-opacity"
              name="fas fa-solid fa-location-dot"
            />
          </div>
        </QCardSection>
      </QCard>
      <QCard class="wycentruj-ten-card bg-primary">
        <QCardSection>
          <div class="ułuzmy-wnetrze-carda">
            <QAvatar>
              <img src="src\assets\WaterTank.svg" />
            </QAvatar>
            <div class="trzeba-to-rozsunac">
              <div class="text-h6 zbiornik-blu-blublu-blu">Zbiornik 1</div>
              <div class="text-subtitle2 po-protu-opacity">Poziom wody 70%</div>
            </div>
            <QIcon
              class="po-protu-opacity"
              name="fas fa-solid fa-location-dot"
            />
          </div>
        </QCardSection>
      </QCard>
      <QCard class="wycentruj-ten-card bg-primary">
        <QCardSection>
          <div class="ułuzmy-wnetrze-carda">
            <QAvatar>
              <img src="src\assets\WaterTank.svg" />
            </QAvatar>
            <div class="trzeba-to-rozsunac">
              <div class="text-h6 zbiornik-blu-blublu-blu">Zbiornik 2</div>
              <div class="text-subtitle2 po-protu-opacity">Poziom wody 70%</div>
            </div>
            <QIcon
              class="po-protu-opacity"
              name="fas fa-solid fa-location-dot"
            />
          </div>
        </QCardSection>
      </QCard>
    </div>
  </main>
</template>

<style lang="scss">
.my-card-krakow {
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 70px;
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
</style>
