<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";

type Layouts = "default" | "mobile";

const layout = ref<Layouts>("default");

watch(layout, async (value) => {
  // setPageLayout(value);
  await navigateTo("/");
});
</script>

<template>
  <DevOnly>
    <div class="float float-center">
      <form id="layout-form">
        <UiSelect>
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
      </form>
    </div>
  </DevOnly>
</template>

<style scoped></style>
