<script setup lang="ts"></script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <DevOnly>
      <DebugMenu />
    </DevOnly>
  </div>
</template>
