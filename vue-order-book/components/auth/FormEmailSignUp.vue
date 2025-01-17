<script setup lang="ts">
import AuthDialogTermsConfirmation from "./DialogTermsConfirmation.vue";

import usePageState from "~/composables/usePageState";
import useAppWrite from "~/composables/useAppWrite";

const { isLoading, isLocking } = usePageState(false, false);
const { actions } = await useAppWrite();
const isLockButtons = computed(() => isLoading || isLocking);

const nameInput = shallowRef("");
const emailInput = shallowRef("");
const passwordInput = shallowRef("");
const controlPasswordInput = shallowRef("");

const isTermsDialogOpen = shallowRef(false);

const signUpHandler = async () => {
  console.log("signUp action")
  // actions
  //   .signUp(nameInput.value, emailInput.value, passwordInput.value)
  //   .then(
  //     (response) => { },
  //     (error) => { },
  //   );
};
</script>

<template>
  <UiCardHeader class="space-y-2">
    <UiCardTitle class="font-bold text-xl flex justify-center">Sign Up</UiCardTitle>
    <UiCardDescription class="flex justify-center">
      Accept our
      <AuthDialogTermsConfirmation
        v-model:acceptTerms="isTermsDialogOpen"
        @accept-terms="() => console.log('accept-terms')"
        @dismiss-terms="() => console.log('dismiss-terms')"
      >
        <template #trigger-text><span class="terms-dialog-trigger">_Terms_</span></template>
      </AuthDialogTermsConfirmation>
      and enter your credentials:
    </UiCardDescription>
  </UiCardHeader>

  <UiCardContent>
    <form>
      <div class="grid gap-2 mb-2">
        <UiInput placeholder="Username" type="text" v-model="nameInput"></UiInput>
        <UiInput placeholder="Email" type="email" v-model="emailInput"></UiInput>
        <UiInput placeholder="Password" type="password" v-model="passwordInput"></UiInput>
        <UiInput placeholder="Confirm Password" type="password" v-model="controlPasswordInput"></UiInput>
      </div>
      <div class="grid gap-2">
        <UiButton type="button" :loading="isLockButtons" @click.prevent="signUpHandler">
          Sign Up
        </UiButton>
      </div>
    </form>
  </UiCardContent>
</template>

<style scoped>
.terms-dialog-trigger {
  cursor: pointer;
  text-decoration: underline;
  color: #3b82f6;
}
</style>
