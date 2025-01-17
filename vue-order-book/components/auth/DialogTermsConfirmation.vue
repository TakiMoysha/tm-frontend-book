<script setup lang="ts">
defineEmits(["accept-terms", "dismiss-terms"]);

const dialogTermsOpen = shallowRef(false);

const acceptTermsAndConditions = shallowRef(false);
const acceptFairUse = shallowRef(false);
const isAcceptTerms = computed(() => acceptTermsAndConditions.value && acceptFairUse.value);

const controller = new AbortController();
</script>

<template>
  <UiAlertDialog v-model:open="dialogTermsOpen">
    <UiAlertDialogTrigger as-child>
      <slot name="trigger-text" />
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

      <UiAlertDialogDescription class="grid gap-4">
        <ul class="list-disc gap-2">
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
            I read and accept <NuxtLink href="#" class="terms-dialog-trigger">Terms & Conditions</NuxtLink>
          </label>
        </div>
        <div class="flex gap-2 items-center">
          <UiCheckbox id="fair-use" v-model:checked="acceptFairUse"></UiCheckbox>
          <label for="fair-use" class="text-sm">
            I read and accept <NuxtLink href="#" class="terms-dialog-trigger">Fair Use</NuxtLink>
          </label>
        </div>

        <UiAlertDialogAction :disabled="!isAcceptTerms" v-on:click.prevent="$emit('accept-terms')">
          Take my data! (Agreed)
        </UiAlertDialogAction>
        <UiAlertDialogCancel v-on:click.prevent="$emit('dismiss-terms')">
          Nope, I am leaving. (Disagree)
        </UiAlertDialogCancel>
      </UiAlertDialogDescription>
    </UiAlertDialogContent>
  </UiAlertDialog>
</template>
