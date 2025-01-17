import { useAuthStore } from '~/store/auth.store';

export default defineNuxtRouteMiddleware((to, from) => {
  // if (import.meta.server) return;

  const authStore = useAuthStore();
  if (!authStore.isAuth) return navigateTo('/auth');
});
