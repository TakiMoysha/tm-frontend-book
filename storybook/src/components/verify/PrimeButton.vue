<script setup lang="ts">
import "primeicons/primeicons.css";
import Button, { type ButtonProps } from "primevue/button";

interface Props extends /* @vue-ignore */ ButtonProps {
  action: keyof typeof variants;
}

const variants = {
  add: { label: "New", icon: "pi pi-plus" },
  none: { icon: "" },
};

const props = defineProps<Props>();
</script>

<template>
  <Button v-bind="props" iconPos="right" :icon="variants[action].icon"
    :label="action !== 'none' ? variants[action].label : props.label" />
</template>
