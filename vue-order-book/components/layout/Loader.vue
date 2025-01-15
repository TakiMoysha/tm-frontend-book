<script setup lang="ts"></script>

<template>
  <div class="wrapper-layout-loader">
    <Icon name="line-md:loading-loop" class="mr-2" />
    <span>Loading...</span>
  </div>
</template>

<style scoped>
.wrapper-layout-loader {
  @apply flex items-center justify-center w-screen h-screen;
}
</style>
