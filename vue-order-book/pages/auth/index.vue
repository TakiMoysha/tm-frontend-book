<script setup lang="ts">
import usePageState from "~/composables/usePageState";
import useAppWrite from "~/composables/useAppWrite";

useHead({
  title: "Authentication | Order Book",
});

const { isLoading, isLocking } = usePageState();
const isLockButtos = computed(() => isLoading || isLocking);
const { actions } = await useAppWrite();

const signInHandler = async () => {
  console.log(emailInput, passwordInput)
  actions.signIn(emailInput.value, passwordInput.value).then(
    (response) => { },
    (error) => { },
  );
};

const signUpHandler = async () => {
  actions
    .signUp(nameInput.value, emailInput.value, passwordInput.value)
    .then(
      (response) => { },
      (error) => { },
    );
};

const recoveryHandler = async () => {
  actions.recovery(emailInput.value).then(
    (response) => { },
    (error) => { },
  );
};

const nameInput = shallowRef("");
const emailInput = shallowRef("");
const passwordInput = shallowRef("");
</script>

<template>
  <ClientOnly>
    <main class="flex items-center justify-center min-h-screen w-full">
      <div class="rounded bg-sidebar w-1/2 h-1/2">
        <h1 class="font-bold text-2xl">Sign In</h1>

        <br />

        <form>
          <UiInput placeholder="Username" type="text" class="my-2" v-model="nameInput"></UiInput>
          <UiInput placeholder="Email" type="email" class="my-2" v-model="emailInput"></UiInput>
          <UiInput placeholder="Password" type="password" class="my-2" v-model="passwordInput"></UiInput>
          <div class="flex justify-center items-center gap-5">
            <UiButton type="button" :loading="isLockButtos" @click="signInHandler">Sign In</UiButton>
            <UiButton type="button" :loading="isLockButtos" @click="signUpHandler">Sign Up</UiButton>
            <UiButton type="button" :loading="isLockButtos" @click="recoveryHandler">Recovery</UiButton>
          </div>
        </form>
      </div>
    </main>
  </ClientOnly>
</template>

<style scoped></style>
