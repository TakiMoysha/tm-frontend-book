<script setup lang="ts">
import type { NuxtError } from "nuxt/app";

const { error } = defineProps({
  error: Object as () => NuxtError,
});

useHead(() => ({
  status: 404,
  title: "Error | Page not found",
}));

onMounted(() => {
  console.error(error)
})
</script>

<template>
  <NuxtLayout name="default">
    <main class="flex items-center justify-center h-screen">
      <article class="max-w-md text-center">

        <div v-if="error?.statusCode === 404">
          <h1 class="text-5xl font-bold mb-4">404</h1>
          <p class="text-gray-500 mb-4">{{ error.message }}</p>
        </div>
        <div v-else>
          <h1 class="text-5xl font-bold mb-4">500</h1>
          <p class="text-gray-500 mb-4">Something went wrong</p>
        </div>

      </article>
    </main>
  </NuxtLayout>
</template>
