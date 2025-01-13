<template>
  <div class="px-5 py-8 bg-sidebar h-full relative w-full border-r-4">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg
        src="/logo.svg"
        alt="logo"
        width="100px"
        class="mx-auto filtered-logo"
      />
    </NuxtLink>

    <div class="flex flex-col gap-2">
      <UiButton class="text-sm">
        <Icon name="line-md:github" />
        Small Button
      </UiButton>

      <UiButton>
        <Icon name="line-md:github" />
        Default Button
      </UiButton>

      <UiButton class="text-md">
        <Icon name="line-md:home" />
        Medium Button
      </UiButton>

      <UiButton class="text-lg">
        <Icon name="line-md:logout" />
        Large Button
      </UiButton>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

<style scope>
.filtered-logo {
  filter: invert(75%) sepia(90%);
}
</style>
