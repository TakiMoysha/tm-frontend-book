<script setup lang="ts">
const MENU_DATA = [
  { name: "404", url: "/error/not-found", icon: "line-md:alert" },
  { name: "Demo:Tabs", url: "/demo-tabs", icon: "line-md:home", params: { layout: "default" } },
  { name: "Loading", url: "/loading", icon: "line-md:clipboard" },
  { name: "About", url: "/", icon: "line-md:emoji-neutral-filled" },
  { name: "Contact", url: "/", icon: "line-md:hazard-lights-filled-loop" },
  { name: "Authentication", url: "/auth", icon: "line-md:login" },
  { name: "Logout", url: "/logout", icon: "line-md:logout" },
];
</script>

<template>
  <div class="flex flex-col gap-2">
    <RouterLink class="flex items-center py-1 px-3 rounded-lg w-full hover:bg-gray-700 hover:shadow transition-all md-2"
      v-for="item in MENU_DATA" :key="item.name" :to="{ path: item.url }">
      <Icon :name="item.icon" class="mr-2" />
      <span class="font-semibold">{{ item.name }}</span>
    </RouterLink>
  </div>
</template>

<style scoped></style>
