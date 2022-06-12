<script setup lang="ts">
import { ref } from "vue";
const textTitle = ref("");
</script>

<template>
  <div class="pomniejszmy-to-zdjecie">
    <div>
      <img class="pomniejszmy-to-zdjecie-bardziej" src="../assets/Rectangle20.svg" />
    </div>
    <QInput v-model="textTitle" class="zaokraglamy-rozki" outlined elevated label="Tytuł zgłoszenia" />
    <div class="ukladanie">
      <div class="odsun-sie">
        <QIcon size="sm" name="fas fa-solid fa-location-dot" />
      </div>
      <QInput v-model="textTitle" outlined elevated class="szerokie-pole zaokraglamy-rozki"
        label="Miejsce zgłoszenia" />
    </div>
    <QInput v-model="textTitle" outlined elevated label="Opis zgłoszenia" class="text-black zaokraglamy-rozki"
      type="textarea" />
    <QBtn class="bg-secondary text-white prosze-w-dol zaokraglamy-rozki"> WYŚLIJ </QBtn>
  </div>
</template>

<style lang="scss">
.pomniejszmy-to-zdjecie {
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pomniejszmy-to-zdjecie-bardziej {
  width: 325px;
}

.ukladanie {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.odsun-sie {
  margin-right: 20px;
}

.szerokie-pole {
  width: 100%;
}

.prosze-w-dol {
  margin-top: 120px;
}

.zaokraglamy-rozki {
  border-radius: 10px !important;
}
</style>
