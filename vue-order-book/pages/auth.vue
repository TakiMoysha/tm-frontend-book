<script setup lang="ts">
useHead({
  title: "Authentication | Order Book",
});
definePageMeta({
  layout: "blank",
  name: "Authentication",
})

const query = useRoute().query;
</script>

<template>
  <main class="flex justify-center items-center min-h-screen w-full">
    <UiCard class="rounded h-1/2 md:min-w-[400px]">
      <UiTabs default-value="sign-up">

        <UiTabsContent value="sign-in">
          <AuthFormEmailSignIn></AuthFormEmailSignIn>
        </UiTabsContent>

        <UiTabsContent value="recovery">
          <AuthFormRecovery></AuthFormRecovery>
        </UiTabsContent>

        <UiTabsContent value="sign-up">
          <AuthFormEmailSignUp></AuthFormEmailSignUp>
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

<style scoped></style>
