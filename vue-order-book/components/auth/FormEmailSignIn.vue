<script setup lang="ts">

</script>

<template>
  <div>
    <div class="grid grid-cols-2 gap-5">
      <UiButton variant="outline" :loading="isLockButtos" @click.prevent="signInHandler">
        <Icon name="mdi:google" /> Google
      </UiButton>
      <UiButton variant="outline" :loading="isLockButtos" @click.prevent="signInHandler">
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
  </div>
</template>

<style scoped></style>
