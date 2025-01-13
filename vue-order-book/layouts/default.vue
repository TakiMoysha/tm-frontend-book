<script setup lang="ts"></script>

<template>
  <section class="main-layout" style="min-height: 99.9vh">
    <LayoutSidebar></LayoutSidebar>

    <main>
      <slot />
    </main>
  </section>
</template>

<style scoped>
.main-layout {
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>
