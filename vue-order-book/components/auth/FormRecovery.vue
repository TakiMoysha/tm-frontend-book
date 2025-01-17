<script setup lang="ts">
defineProps({
  isLockButtons: {
    type: Boolean,
    default: false,
  },
})

const emailInput = shallowRef("");
const { actions } = await useAppWrite();

const recoveryHandler = async () => {
  // actions
  //   .recovery(emailInput.value)
  //   .then(
  //     (response) => { },
  //     (error) => { },
  //   );
};
</script>

<template>
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
</template>
<style scoped></style>
