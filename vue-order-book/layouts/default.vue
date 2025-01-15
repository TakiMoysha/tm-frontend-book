<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';

const { account } = await useAppWrite();
const { isLoading, isLocking } = usePageState();
const router = useRouter()
const authStore = useAuthStore()

onMounted(async () => {
  try {
    const user = await account.get()
    if (user) authStore.setUser(user)
  } catch (error) {
    router.push("/auth")
  } finally {
    isLoading.value = false;
  }
})
</script>

<template>
  <LayoutLoader v-if="isLoading" />

  <section v-else :class="{ grid: authStore.isAuth }" class="layout-grid" style="min-height: 99.9vh">
    <LayoutSidebar></LayoutSidebar>

    <div class="wrapper-page">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.layout-grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>
