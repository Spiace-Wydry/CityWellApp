<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import { useQuasar } from "quasar";
import NavBar from "./NavBar.vue";
import { ref, computed } from "vue";
import BigNavbar from "./BigNavbar.vue";
const $q = useQuasar();
const route = useRoute();
const isHome = computed(() => {
  return route.name === "home" ? true : false;
})
</script>

<template>
  <QLayout view="hHh lpR fFf" :class="{ 'image-background': isHome }">
    <NavBar v-if="route.name == 'pogoda' || route.name == 'zgloszenie'" />
    <BigNavbar v-if="route.name == 'krakow' || route.name == 'powiadomienia'" />
    <QPageContainer>
      <router-view />
    </QPageContainer>
  </QLayout>
</template>

<style lang="scss">
.menu-header-all-items {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 15px;
}
.menu {
  padding-top: 5px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.header {
  color: azure;
  margin-left: 10px;
}
.menu-header {
  font-size: 1.5rem;
}
.x-icon {
  display: flex;
  justify-content: flex-start;
}
.card-border {
  border-left: solid 12px #ff886a;
}
.buttons {
  display: flex;
  flex-direction: column;
  color: white;
}
.menu-button-margin {
  margin-bottom: 10px;
}
.menu-button {
  border-radius: 10px !important;
}
.button-center {
  display: flex;
  justify-content: center;
  opacity: 70%;
}
.fancy-border {
  background-color: white;
  border-radius: 0px 0px 0px 24px;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 40px;
  width: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.image-background {
  background-image: url("src/assets/Obrazek_.png");
  height: 100%;
}
</style>
