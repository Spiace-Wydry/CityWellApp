<script setup lang="ts">
import { ref } from "vue";
const rightDrawerOpen = ref(false);
function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>

<template>
  <QHeader bordered class="bg-secondary text-white round-border navbar-heigh">
    <QToolbar flat>
      <div class="navbar-div">
        <QAvatar rounded>
          <img src="src\assets\logo.svg" />
        </QAvatar>
        <div class="krakow-margin">
          <span>Kraków</span>
        </div>
        <QCard class="small-card wycentruj-ten-card bg-primary">
          <QCardSection class="zaokraglijmy-rogi">
            <div class="trzeba-to-ulozyc">
              <QIcon class="icon-color" size="md" name="fas fa-solid fa-sun" />
              <div class="text-black powiekszmy-ta-pogode">
                <span>Pogodnie <b>21°C</b></span>
              </div>
            </div>
          </QCardSection>
        </QCard>
      </div>
      <QSpace />
      <div class="fancy-border">
        <QBtn
          class="text-black bg-white"
          dense
          flat
          round
          icon="menu"
          @click="toggleRightDrawer"
        />
      </div>
    </QToolbar>
  </QHeader>
  <QDrawer v-model="rightDrawerOpen" show-if-above side="right" bordered>
    <div class="menu">
      <div>
        <div class="menu-header-all-items">
          <span class="menu-header"><b>Kraków</b></span>
          <div class="x-icon">
            <QBtn dense flat icon="close" @click="toggleRightDrawer" />
          </div>
        </div>
        <QCard class="my-card bg-primary card-border zaokraglijmy-rogi">
          <QCardSection> Najnowsze powiadomienia z miasta </QCardSection>
        </QCard>
      </div>
      <div class="buttons">
        <QBtn to="/krakow" class="bg-secondary menu-button-margin menu-button"
          ><b>ZBIORNIKI</b></QBtn
        >
        <QBtn
          to="/pogoda-krakow"
          class="bg-secondary menu-button-margin menu-button"
          ><b>POGODA</b></QBtn
        >
        <QBtn
          to="/powiadomienia-krakow"
          class="bg-secondary menu-button-margin menu-button"
          ><b>POWIADOMIENIA</b></QBtn
        >
        <QBtn to="/zgloszenie-krakow" class="bg-secondary menu-button"
          ><b>ZGŁOŚ</b></QBtn
        >
      </div>
      <div class="button-center">
        <QBtn flat>Zmień miasto</QBtn>
      </div>
    </div>
  </QDrawer>
</template>

<style lang="scss">
.round-border {
  border-bottom-left-radius: 25px;
}
.navbar-heigh {
  height: 150px;
}
.navbar-div {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 100%;
}
.krakow-margin {
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 1.7rem;
}
.small-card {
  width: 200px;
}
.icon-color {
  color: #ffa600;
}
.trzeba-to-ulozyc {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.wycentruj-ten-card {
  margin: auto;
  border-radius: 8px !important;
}
.powiekszmy-ta-pogode {
  font-size: 1.1rem;
}
</style>
