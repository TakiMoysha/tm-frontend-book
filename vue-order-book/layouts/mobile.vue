<script setup lang="ts">
const aw = useAppWrite();
</script>

<template>
  <section class="layout-grid" style="min-height: 99.9vh">
    <UiSidebar></UiSidebar>

    <div class="wrapper-layout">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.layout-grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>
