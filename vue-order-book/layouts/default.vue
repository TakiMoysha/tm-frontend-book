<script setup lang="ts"></script>

<template>
  <section class="layout-grid" style="min-height: 99.9vh">
    <LayoutSidebar></LayoutSidebar>

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
