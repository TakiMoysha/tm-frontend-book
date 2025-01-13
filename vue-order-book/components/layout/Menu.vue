<script setup lang="ts">
const MENU_DATA = [{ name: "Home", url: "/", icon: "line-md:home" }];
</script>

<template>
  <div class="flex flex-col gap-2">
    <NuxtLink class="flex items-center py-1 px-3 rounded-lg w-full hover:bg-gray-700 hover:shadow transition-all md-2"
      v-for="item in MENU_DATA" :key="item.name" :to="item.url">
      <Icon :name="item.name" class="mr-2" />
      <span class="font-semibold">{{ item.name }}</span>
    </NuxtLink>
  </div>
</template>
<style scoped></style>
