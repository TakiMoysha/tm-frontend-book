<script setup lang="ts">
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from "radix-vue";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<TabsTriggerProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
})

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <div>
    <TabsTrigger v-bind="forwardedProps">
      <span class="text-muted"> {{ props.value }} </span>
    </TabsTrigger>
  </div>
</template>

<style scoped></style>
