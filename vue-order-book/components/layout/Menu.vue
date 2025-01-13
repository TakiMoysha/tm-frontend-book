<script setup lang="ts">
const MENU_DATA = [
  { name: "Home", url: "/", icon: "line-md:home" },
  { name: "Book", url: "/", icon: "line-md:clipboard" },
  { name: "About", url: "/", icon: "line-md:emoji-neutral-filled" },
  { name: "Contact", url: "/", icon: "line-md:hazard-lights-filled-loop" },
  { name: "Logout", url: "/", icon: "line-md:logout" },
];
</script>

<template>
  <div class="flex flex-col gap-2">
    <NuxtLink class="flex items-center py-1 px-3 rounded-lg w-full hover:bg-gray-700 hover:shadow transition-all md-2"
      v-for="item in MENU_DATA" :key="item.name" :to="item.url">
      <Icon :name="item.icon" class="mr-2" />
      <span class="font-semibold">{{ item.name }}</span>
    </NuxtLink>
  </div>
</template>
<style scoped></style>
