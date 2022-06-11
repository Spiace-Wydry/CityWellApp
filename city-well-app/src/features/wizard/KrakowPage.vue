<script setup lang="ts">
import { ref } from "vue";
import BigNavbar from "../../BigNavbar.vue";

</script>

<template>
  <main>
    <div class="my-card">
      <QCard>
        <QCardSection>
          <div>
            <QIcon class="icon-color" name="fas fa-solid fa-sun" />
          </div>
        </QCardSection>
      </QCard>
    </div>
  </main>
</template>

<style lang="scss">
.my-card {
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 50px;
}
</style>
