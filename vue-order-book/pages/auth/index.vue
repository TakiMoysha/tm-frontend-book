<script setup lang="ts">
useHead({
  title: "Authentication | Order Book",
});

const { isLoading, isLocking } = usePageState();

const singIn = async() => {
  const { account, } = await useAppWrite();
}

const usernameInput = ref("");
const emailInput = ref("");
const passwordInput = ref("");

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
    <div class="rounded bg-sidebar w-1/2 h-1/2">
      <h1 class="font-bold text-2xl">Sign In</h1>

      <br />

      <form @submit="onSubmit">
        <UiInput placeholder="Username" type="text" class="my-2" :model="usernameInput"></UiInput>
        <UiInput placeholder="Email" type="email" class="my-2" :model="emailInput"></UiInput>
        <UiInput placeholder="Password" type="password" class="my-2" :model="passwordInput"></UiInput>
        <div class="flex justify-center items-center gap-5">
          <UiButton type="button" :loading="isLoading">Sign In</UiButton>
          <UiButton type="button" :loading="isLoading">Sign Up</UiButton>
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped></style>
