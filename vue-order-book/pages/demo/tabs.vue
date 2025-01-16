<script setup lang="ts">
import { TabsTrigger, TabsList, TabsRoot, TabsContent } from 'radix-vue';

definePageMeta({
  layout: "blank",
  middleware: [],
})
</script>

<template>
  <main class="min-h-screen flex flex-col justify-center items-center">
    <h2 class="font-bold text-2xl">Demo:Tabs</h2>

    <section class="">

      <TabsRoot default-value="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
        <TabsContent value="tab3">Content 3</TabsContent>
      </TabsRoot>
    </section>
  </main>
</template>
<style scoped></style>
