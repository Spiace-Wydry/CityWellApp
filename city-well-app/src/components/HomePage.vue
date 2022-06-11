<script setup lang="ts">
import RouterLinkBase from "./atoms/RouterLinkBase.vue";
import { ref } from "vue";
const dense = ref(false);
const text = ref("");
const focusOnInput = ref(false);
const cities = [
  "Warszawa",
  "Kraków",
  "Płock",
  "Poznań",
  "Katowice",
  "Kutno",
  "Wrocław",
];
</script>

<template>
  <main>
    <div class="mini-nav-bar">
      <QAvatar rounded size="sm">
        <img src="src\assets\logo.svg" />
      </QAvatar>
      <div class="mini-nav-bar-text">
        <span class="menu-header text-white">Studnia miejska</span>
      </div>
    </div>
    <div class="search-field">
      <QInput
        v-model="text"
        label="Wyszukaj miasto"
        label-color="#736b6b"
        color="#736b6b"
        filled
        class="bg-white text-black rounded-field"
        borderless
        @focus="focusOnInput = !focusOnInput"
        @blur="focusOnInput = !focusOnInput"
      >
        <template #append>
          <QIcon name="search" />
        </template>
      </QInput>
    </div>
    <div v-if="!focusOnInput" class="main-text">
      <span
        >Sprawdź zasoby wody w Twoim mieście i dowiedz się jak możesz oszczędzać
        wodę</span
      >
    </div>
    <div class="footer-area">
      <QCard v-if="focusOnInput" class="bg-primary card-heigh">
        <div class="localization">
          <div>
            <QIcon name="fas fa-solid fa-location-dot" />
            <span>Użyj lokalizacji</span>
          </div>
        </div>
        <div class="span-div">
          <span> Najpopularniejsze miasta </span>
        </div>
        <div class="cities-buttons">
          <div v-for="city in cities" :key="city">
            <QBtn to="krakow" size="sm" class="bg-secondary text-white buttons">
              {{ city }}
            </QBtn>
          </div>
        </div>
        <div class="search-button">
          <QBtn class="bg-secondary text-white">Wyszukaj</QBtn>
        </div>
      </QCard>
    </div>
  </main>
</template>

<style lang="scss">
.btn-position {
  margin-top: 250px;
}
.rounded-field {
  border-radius: 10px !important;
}
.menu-header {
  font-size: 1.3rem;
}
.mini-nav-bar-text {
  margin-left: 15px;
}
.mini-nav-bar {
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-bottom: 320px;
}
.main-text {
  font-size: 1.3rem;
  color: white;
  margin-top: 100px;
  margin-left: 25px;
  margin-right: 25px;
  position: absolute;
}
.search-field {
  margin-left: 25px;
  margin-right: 15px;
  position: absolute;
  left: 45px;
  z-index: 1;
}
.footer-area {
  color: #686868;
  position: absolute;
  bottom: 0;
}
.cities-buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.buttons {
  margin-right: 10px;
  margin-bottom: 10px;
}
.search-button {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
}
.localization {
  font-size: 1.1rem;
  margin-bottom: 20px;
  padding-top: 80px;
}
.span-div {
  margin-bottom: 15px;
}
.card-heigh {
  min-height: 310px;
  padding-left: 30px;
}
</style>
