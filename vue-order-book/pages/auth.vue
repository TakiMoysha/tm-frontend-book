<script setup lang="ts">
import usePageState from "~/composables/usePageState";
import useAppWrite from "~/composables/useAppWrite";

useHead({
  title: "Authentication | Order Book",
});
definePageMeta({
  layout: "blank",
  name: "Authentication",
})

const query = useRoute().query;
const { isLoading, isLocking } = usePageState(false, false);
const { actions } = await useAppWrite();
const isLockButtons = computed(() => isLoading || isLocking);

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
  if (!isAcceptTerms) {

  }
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
const controlPasswordInput = shallowRef("");

const acceptTermsAndConditions = shallowRef(false);
const acceptFairUse = shallowRef(false);
const isAcceptTerms = computed(() => acceptTermsAndConditions.value && acceptFairUse.value);
</script>

<template>
  <main class="flex justify-center items-center min-h-screen w-full">
    <UiCard class="rounded h-1/2 md:min-w-[400px]">
      <UiTabs default-value="sign-up">

        <!-- <AuthFormEmailSignIn></AuthFormEmailSignIn> -->
        <UiTabsContent value="sign-in">
          <!-- Card Header -->
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
                      <Icon name="mdi:google" /> Google
                    </UiButton>
                  </UiTooltipTrigger>
                  <UiTooltipContent side="top">Coming soon</UiTooltipContent>
                </UiTooltip>

                <UiTooltip>
                  <UiTooltipTrigger as-child>
                    <UiButton disabled variant="secondary" :loading="isLockButtons" @click.prevent="signInHandler">
                      <Icon name="mdi:github" /> Github
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

        </UiTabsContent>
        <!-- <AuthFormRecovery></AuthFormRecovery> -->
        <UiTabsContent value="recovery">
          <UiCardHeader class="space-y-2">
            <UiCardTitle class="font-bold text-xl flex justify-center">Recovery</UiCardTitle>
            <UiCardDescription class="flex justify-center">For recovery account enter your email:</UiCardDescription>
          </UiCardHeader>
          <UiCardContent>
            <form>
              <div class="grid gap-2 mb-2">
                <UiInput placeholder="Email" type="email" v-model="emailInput"></UiInput>
              </div>
              <div class="grid gap-2">
                <UiButton type="button" :loading="isLockButtons" @click.prevent="recoveryHandler">
                  Recovery
                </UiButton>
              </div>
            </form>
          </UiCardContent>
        </UiTabsContent>

        <!-- <AuthFormEmailSignUp></AuthFormEmailSignUp> -->
        <UiTabsContent value="sign-up">
          <UiCardHeader class="space-y-2">
            <UiCardTitle class="font-bold text-xl flex justify-center">Sign Up</UiCardTitle>
            <UiCardDescription class="flex justify-center">
              Accept our
              <UiAlertDialog>
                <UiAlertDialogTrigger as-child>
                  <span class="terms-dialog-trigger">_Terms_</span>
                </UiAlertDialogTrigger>
                <UiAlertDialogContent>
                  <UiAlertDialogHeader>
                    <UiAlertDialogTitle class="flex justify-center">Briefly about terms of use</UiAlertDialogTitle>
                  </UiAlertDialogHeader>
                  <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                      <span class="w-full border-t"></span>
                    </div>
                  </div>

                  <UiAlertDialogDescription class="flex">
                    <div class="grid gap-4">

                      <ul class="list-disc gap-2">
                        <li>We primarily focus on GDPR;</li>
                        <li>You are over 13 years old;</li>
                        <li>Our service provided "as-is";</li>
                        <li>You agree to receive mail from Us;</li>
                        <li>We reserve the right to delete or block your account;</li>
                        <li>We may interact, as part of the services provided, on your behalf, using the data you
                          provide, with third-party services (such as Github);</li>
                      </ul>

                      <div class="flex gap-2 items-center">
                        <UiCheckbox id="terms-and-conditions" v-model:checked="acceptTermsAndConditions"></UiCheckbox>
                        <label for="terms-and-conditions" class="text-sm">
                          I accept <NuxtLink href="#" class="terms-dialog-trigger">Terms & Conditions</NuxtLink>
                        </label>
                      </div>
                      <div class="flex gap-2 items-center">
                        <UiCheckbox id="fair-use" v-model:checked="acceptFairUse"></UiCheckbox>
                        <label for="fair-use" class="text-sm">
                          I accept <NuxtLink href="#" class="terms-dialog-trigger">Fair Use</NuxtLink>
                        </label>
                      </div>

                      <UiAlertDialogAction :disabled="!isAcceptTerms" @click.prevent="">Take my data! (Agreed)
                      </UiAlertDialogAction>
                      <UiAlertDialogCancel>Nope, I am leaving. (Disagree)</UiAlertDialogCancel>

                      <div class="flex justify-end">
                      </div>
                    </div>
                  </UiAlertDialogDescription>
                </UiAlertDialogContent>
              </UiAlertDialog>
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
        </UiTabsContent>

        <UiCardFooter class="container">
          <UiTabsList class="container">
            <div class="grid grid-cols-3 gap-2 w-full">
              <UiTabsTrigger value="sign-in"> Sing In </UiTabsTrigger>
              <UiTabsTrigger value="recovery"> Recovery </UiTabsTrigger>
              <UiTabsTrigger value="sign-up"> Sign Up </UiTabsTrigger>
            </div>
          </UiTabsList>
        </UiCardFooter>

      </UiTabs>
    </UiCard>
  </main>
</template>

<style scoped>
.terms-dialog-trigger {
  cursor: pointer;
  text-decoration: underline;
  color: #3b82f6;
}

.terms-dialog-trigger::after {
  content: "";
}
</style>
