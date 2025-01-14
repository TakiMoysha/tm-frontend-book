<script setup lang="ts">
import Navigation from "./Navigation.vue";
import DebugButtons from "./DebugButtons.vue";
import LayoutSelector from "../LayoutSelector.vue";
</script>

<template>
  <div class="px-5 py-8 bg-sidebar h-full relative w-full border-r-4">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" alt="logo" width="180px" class="mx-auto filtered-logo" />
    </NuxtLink>

    <Navigation></Navigation>

    <br />

    <DebugButtons></DebugButtons>

    <br />

    <div class="absolute bottom-5 left-5">
      <LayoutSelector></LayoutSelector>
    </div>
  </div>
</template>

<style scope>
.filtered-logo {
  filter: invert(75%) sepia(90%);
}
</style>
