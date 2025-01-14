<script setup lang="ts">
import type { NuxtError } from "nuxt/app";

defineProps({
  error: Object as () => NuxtError,
});

useHead(() => ({
  status: 404,
  title: "Error | Page not found",
}));
</script>

<template>
  <NuxtLayout name="default">
    <main class="flex items-center justify-center h-screen">
      <article class="max-w-md text-center">
        <h1 class="text-5xl font-bold mb-4">404</h1>
        <p class="text-gray-500 mb-4">Page not found</p>

        {{ error }}
      </article>
    </main>
  </NuxtLayout>
</template>
