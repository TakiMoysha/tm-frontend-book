<template>
  <div class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" alt="logo" , width="100px" class="mx-auto" />
    </NuxtLink>

    <UiButton>
        <Icon name="line-md:logout" />
        Demo Button
    </UiButton>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
