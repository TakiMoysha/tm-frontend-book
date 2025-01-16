<script setup lang="ts">
import usePageState from "~/composables/usePageState";
import useAppWrite from "~/composables/useAppWrite";

useHead({
  title: "Authentication | Order Book",
});
definePageMeta({
  layout: "blank",
})

const query = useRoute().query;
const { isLoading, isLocking } = usePageState();
const { actions } = await useAppWrite();
const isLockButtos = computed(() => isLoading || isLocking);

const signInHandler = async () => {
  actions
    .signIn(emailInput.value, passwordInput.value)
    .then(
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
  actions
    .recovery(emailInput.value)
    .then(
      (response) => { },
      (error) => { },
    );
};

const nameInput = shallowRef("");
const emailInput = shallowRef("");
const passwordInput = shallowRef("");
</script>

<template>
  <main class="flex justify-center items-center min-h-screen w-full">
    <UiCard class="rounded h-1/2 md:min-w-[400px]">
      <!-- Card Header -->
      <UiCardHeader class="space-y-2">
        <UiCardTitle class="font-bold text-xl flex justify-center">Sign In</UiCardTitle>
        <UiCardDescription class="flex justify-center">Enter your credentials</UiCardDescription>
      </UiCardHeader>

      <!-- Card Content -->
      <UiCardContent class="grid gap-4">

        <!-- Email Form Inputs -->
        <!-- <AuthFormEmailSignIn></AuthFormEmailSignIn> -->
        <!-- <AuthFormEmailSignUp></AuthFormEmailSignUp> -->
        <!-- <AuthFormRecovery></AuthFormRecovery> -->


        <div class="grid grid-cols-2 gap-5">
          <UiButton variant="default" :loading="isLockButtos" @click.prevent="signInHandler">
            <Icon name="mdi:google" /> Google
          </UiButton>
          <UiButton variant="default" :loading="isLockButtos" @click.prevent="signInHandler">
            <Icon name="mdi:github" /> Github
          </UiButton>
        </div>

        <!-- Divider -->
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <span class="w-full border-t"></span>
          </div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="px-2 bg-card text-muted">Or continue with</span>
          </div>
        </div>

        <form>

          <div class="grid gap-2 mb-2">
            <UiInput placeholder="Email" type="email" v-model="emailInput"></UiInput>
            <UiInput placeholder="Password" type="password" v-model="passwordInput"></UiInput>
          </div>
          <div class="grid gap-2">
            <UiButton type="button" :loading="isLockButtos" @click.prevent="signInHandler">
              Sign In
            </UiButton>
          </div>
        </form>

      </UiCardContent>

      <UiCardFooter>
        <div class="w-full flex justify-center">
          <UiButton variant="link" :loading="isLockButtos" @click.prevent="signUpHandler">Sign In</UiButton>
          <UiButton variant="link" :loading="isLockButtos" @click.prevent="recoveryHandler">Recovery</UiButton>
          <UiButton variant="link" :loading="isLockButtos" @click.prevent="signUpHandler">Sign Up</UiButton>
        </div>
      </UiCardFooter>
    </UiCard>
  </main>
</template>

<style scoped></style>
