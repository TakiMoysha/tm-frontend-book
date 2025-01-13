<script setup lang="ts">
import Menu from "./Menu.vue";
import DebugButtons from "./DebugButtons.vue";
</script>

<template>
  <div class="px-5 py-8 bg-sidebar h-full relative w-full border-r-4">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" alt="logo" width="180px" class="mx-auto filtered-logo" />
    </NuxtLink>

    <Menu></Menu>

    <DebugButtons></DebugButtons>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

<style scope>
.filtered-logo {
  filter: invert(75%) sepia(90%);
}
</style>
