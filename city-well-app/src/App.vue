<script setup lang="ts">
import { RouterView } from "vue-router";
import RouterLinkBase from "./components/atoms/RouterLinkBase.vue";
import { useQuasar } from "quasar";
import { ref } from "vue";
const $q = useQuasar();
const rightDrawerOpen = ref(false);
function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>

<template>
  <QLayout view="hHh lpR fFf">
    <QHeader elevated class="bg-primary text-white">
      <QToolbar>
        <QToolbarTitle :shrink="true">
          <QAvatar rounded>
            <img src="src\assets\logo.svg" />
          </QAvatar>
          <RouterLinkBase link="/" class="header"
            >Studnia Miejska</RouterLinkBase
          >
        </QToolbarTitle>
        <QSpace />
        <QBtn
          class="text-black bg-white"
          dense
          flat
          round
          icon="menu"
          @click="toggleRightDrawer"
        />
      </QToolbar>
    </QHeader>
    <QDrawer v-model="rightDrawerOpen" show-if-above side="right" bordered>
      <div class="menu">
        <div>
          <div class="menu-header-all-items">
            <span class="menu-header"><b>Kraków</b></span>
            <div class="x-icon">
              <QBtn dense flat icon="close" />
            </div>
          </div>
          <QCard class="my-card bg-secondary card-border">
            <QCardSection> Najnowsze powiadomienia z miasta </QCardSection>
          </QCard>
        </div>
        <div class="buttons">
          <QBtn class="bg-primary menu-button-margin menu-button"
            ><b>ZBIORNIKI</b></QBtn
          >
          <QBtn class="bg-primary menu-button-margin menu-button"
            ><b>POGODA</b></QBtn
          >
          <QBtn class="bg-primary menu-button-margin menu-button"
            ><b>POWIADOMIENIA</b></QBtn
          >
          <QBtn class="bg-primary menu-button"><b>ZGŁOŚ</b></QBtn>
        </div>
        <div class="button-center">
          <QBtn flat @click="toggleRightDrawer">Zmień miasto</QBtn>
        </div>
      </div>
    </QDrawer>

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
</style>
