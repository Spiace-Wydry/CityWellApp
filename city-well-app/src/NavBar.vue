<script setup lang="ts">
import { ref } from "vue";
const rightDrawerOpen = ref(false);
function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>

<template>
  <QHeader elevated class="bg-primary text-white">
    <QToolbar>
      <QToolbarTitle :shrink="true">
        <QAvatar rounded>
          <img src="src\assets\logo.svg" />
        </QAvatar>
        Studnia Miejska
      </QToolbarTitle>
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
        <QBtn flat>Zmień miasto</QBtn>
      </div>
    </div>
  </QDrawer>
</template>
