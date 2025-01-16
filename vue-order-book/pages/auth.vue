<script setup lang="ts">
import usePageState from "~/composables/usePageState";
import useAppWrite from "~/composables/useAppWrite";
import { TabsTrigger, TabsList, TabsRoot, TabsContent } from 'radix-vue';

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
const controlPasswordInput = shallowRef("");

const acceptTerms = shallowRef(false);
const acceptPrivacy = shallowRef(false);
</script>

<template>
  <main class="flex justify-center items-center min-h-screen w-full">
    <UiCard class="rounded h-1/2 md:min-w-[400px]">
      <TabsRoot default-value="sign-in">

        <!-- <AuthFormEmailSignIn></AuthFormEmailSignIn> -->
        <TabsContent value="sign-in">
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
                    <UiButton disabled variant="default" :loading="isLockButtos" @click.prevent="signInHandler">
                      <Icon name="mdi:google" /> Google
                    </UiButton>
                  </UiTooltipTrigger>
                  <UiTooltipContent side="top">Coming soon</UiTooltipContent>
                </UiTooltip>

                <UiTooltip>
                  <UiTooltipTrigger as-child>
                    <UiButton disabled variant="default" :loading="isLockButtos" @click.prevent="signInHandler">
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
                <UiButton type="button" :loading="isLockButtos" @click.prevent="signInHandler">
                  Sign In
                </UiButton>
              </div>
            </form>

          </UiCardContent>

        </TabsContent>
        <!-- <AuthFormRecovery></AuthFormRecovery> -->
        <TabsContent value="recovery">
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
                <UiButton type="button" :loading="isLockButtos" @click.prevent="recoveryHandler">
                  Recovery
                </UiButton>
              </div>
            </form>
          </UiCardContent>
        </TabsContent>

        <!-- <AuthFormEmailSignUp></AuthFormEmailSignUp> -->
        <TabsContent value="sign-up">
          <UiCardHeader class="space-y-2">
            <UiCardTitle class="font-bold text-xl flex justify-center">Sign Up</UiCardTitle>
            <UiCardDescription class="flex justify-center">We need some information about you:</UiCardDescription>
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
                <UiButton type="button" :loading="isLockButtos" @click.prevent="signUpHandler">
                  Sign Up
                </UiButton>
              </div>
            </form>
          </UiCardContent>
        </TabsContent>

        <UiCardFooter class="container">
          <!-- <div class="grid grid-cols-3 gap-2"> -->
          <!-- <div class="w-full flex justify-center"> -->
          <!-- <TabsTrigger> -->
          <!--   <UiButton variant="link" :loading="isLockButtos" @click.prevent="signUpHandler">Sign In</UiButton> -->
          <!-- </TabsTrigger> -->
          <!-- <TabsTrigger> -->
          <!--   <UiButton variant="link" :loading="isLockButtos" @click.prevent="recoveryHandler">Recovery</UiButton> -->
          <!-- </TabsTrigger> -->
          <!-- <TabsTrigger> -->
          <!--   <UiButton variant="link" :loading="isLockButtos" @click.prevent="signUpHandler">Sign Up</UiButton> -->
          <!-- </TabsTrigger> -->
          <!-- </div> -->

          <UiTabsList class="container">
            <div class="grid grid-cols-3 gap-2 w-full">
              <UiTabsTrigger value="sign-in"> Sing In </UiTabsTrigger>
              <UiTabsTrigger value="recovery"> Recovery </UiTabsTrigger>
              <UiTabsTrigger value="sign-up"> Sign Up </UiTabsTrigger>
            </div>
          </UiTabsList>

        </UiCardFooter>


      </TabsRoot>
    </UiCard>
  </main>
</template>

<style scoped></style>
