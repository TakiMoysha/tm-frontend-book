<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';

const { account } = await useAppWrite();
const { isLoading, isLocking } = usePageState();
const authStore = useAuthStore()

onMounted(async () => {
  await nextTick();
  try {
    await account.deleteSession("current");
    authStore.clear();
  } catch (error) {
    // await navigateTo({ path: "/auth", query: { msg: "Logout error" } });
  } finally {
    isLoading.value = false;
  }

  setTimeout(() => {
    navigateTo({ path: "/auth", query: { msg: "Logout success" } });
  }, 3000)
})

</script>

<template>
  <main>
    <div class="wrapper-layout-loader">
      <Icon name="line-md:loading-loop" class="mr-2" />
      <span>Logout...</span>
    </div>
  </main>
</template>

<style scoped>
.wrapper-layout-loader {
  @apply flex items-center justify-center w-screen h-screen;
}
</style>
