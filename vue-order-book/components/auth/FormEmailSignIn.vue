<script setup lang="ts">
import usePageState from "~/composables/usePageState";
import useAppWrite from "~/composables/useAppWrite";

const { isLoading, isLocking } = usePageState(false, false);
const { actions } = await useAppWrite();
const isLockButtons = computed(() => isLoading || isLocking);

const signInHandler = async () => {
  // actions
  //   .signIn(emailInput.value, passwordInput.value)
  //   .then(
  //     (response) => { },
  //     (error) => { },
  //   );
};


const emailInput = shallowRef("");
const passwordInput = shallowRef("");
</script>

<template>
  <UiCardHeader class="space-y-2">
    <UiCardTitle class="font-bold text-xl flex justify-center">Sign In</UiCardTitle>
    <UiCardDescription class="flex justify-center">Enter your credentials:</UiCardDescription>
  </UiCardHeader>

  <!-- Card Content -->
  <UiCardContent class="grid gap-4">

    <!-- Social Buttons  -->
    <div class="grid grid-cols-2 gap-5">
      <UiTooltipProvider>
        <UiTooltip>
          <UiTooltipTrigger as-child>
            <UiButton disabled variant="secondary" :loading="isLockButtons" @click.prevent="signInHandler">
              <Icon name="mdi:google" />
              <span>Google</span>
            </UiButton>
          </UiTooltipTrigger>
          <UiTooltipContent side="top">Coming soon</UiTooltipContent>
        </UiTooltip>

        <UiTooltip>
          <UiTooltipTrigger as-child>
            <UiButton disabled variant="secondary" :loading="isLockButtons" @click.prevent="signInHandler">
              <Icon name="mdi:github" />
              <span>Github</span>
            </UiButton>
          </UiTooltipTrigger>
          <UiTooltipContent side="top">Coming soon</UiTooltipContent>
        </UiTooltip>
      </UiTooltipProvider>
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
        <UiButton type="button" :loading="isLockButtons" @click.prevent="signInHandler">
          Sign In
        </UiButton>
      </div>
    </form>

  </UiCardContent>
</template>

<style scoped></style>
