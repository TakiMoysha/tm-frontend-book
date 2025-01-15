<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";

type Layouts = "default" | "mobile";

const layout = ref<Layouts>("default");

watch(layout, async (newLayout) => {
  setPageLayout(newLayout);
});
</script>

<template>
  <DevOnly>
    <div class="float float-center">
      <div id="layout-form">
        <label for="layout"></label>
        <UiSelect id="layout" v-model="layout">
          <UiSelectTrigger class="w-[180px]">
            <UiSelectValue placeholder="Select a layout" />
          </UiSelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Layouts</SelectLabel>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="mobile">Mobile</SelectItem>
            </SelectGroup>
          </SelectContent>
        </UiSelect>
      </div>
    </div>
  </DevOnly>
</template>

<style scoped></style>
