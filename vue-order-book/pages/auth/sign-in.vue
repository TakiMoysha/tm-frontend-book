<script setup lang="ts">
useHead({
  title: "Sign In | Order Book",
});

const isLoading = ref(false);
const emailInput = ref("");

async function onSubmit(event: Event) {
  event.preventDefault();
  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
}
</script>

<template>
  <main class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/2 h-1/2 bg-secondary">
      <h1 class="font-bold text-2xl">Login</h1>

      <form>
        <UiInput placeholder="Email" type="email" class="my-2" :model="emailInput"></UiInput>
      </form>
    </div>
  </main>
</template>

<style scoped></style>
