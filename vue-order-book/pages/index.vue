<script setup lang="ts"></script>

<template>
  <main class="p-10">
    <h1 class="font-bold text-2xl md-10">Order Book</h1>

    <ColorScheme placeholder="..." tag="span">
      color mode: <b>{{ $colorMode.preference }}</b>
      <span v-if="$colorMode.preference === 'system'">
        {{ $colorMode.value }}
        (system preference)
      </span>
    </ColorScheme>
  </main>
</template>

<style scoped></style>
