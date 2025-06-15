<script setup lang="ts">
import { state } from "@/composables/useVScroll";
import { onMounted, ref, computed, watch, reactive } from "vue";

const props = defineProps(["loading", "fields", "items", "reverse"]);
// #################################################################################
// reverse // todo: wip
watch(
  () => props.reverse,
  () => {
    console.log("REVERSE");
    props.items.reverse();
  },
);

// simple vscroll consts
const itemHeight = 20;
const viewContainerHeight = window.innerHeight; // computed from viewport
const overscan = 5;
const scrollingDelay = 100;

// virtual scrolling
const scrollTopPos = ref(0);
const scrollElementRef = ref<HTMLDivElement>();
const isScrolling = ref(false);
const sumItemsHeight = computed(() => itemHeight * props.items.length);
const itemsLength = computed(() => props.items?.length || 0);

let scrollingTimeoutId: number | null = null;

const proxyItemsToRender = computed(() => {
  /* take position of first visible item in viewport */
  const rangeStart = scrollTopPos.value;
  const rangeEnd = rangeStart + viewContainerHeight;

  /* calculate start and end index of items to render */
  const fromItemIndex = Math.floor(rangeStart / itemHeight);
  const toItemIndex = Math.ceil(rangeEnd / itemHeight);

  let fromItem = Math.max(fromItemIndex - overscan, 0);
  let toItem = Math.min(toItemIndex, itemsLength.value - 1);

  const virtualEntries = [];
  for (let i = fromItemIndex; i <= toItemIndex; i++) {
    virtualEntries.push({ index: i, offsetTop: i * itemHeight });
  }

  console.log(
    "proxyItemsToRender: ",
    fromItemIndex,
    toItemIndex,
    toItemIndex - fromItemIndex,
  );
  return virtualEntries;
});

const handleScroll = () => {
  if (!scrollElementRef.value) return;

  scrollTopPos.value = scrollElementRef.value.scrollTop;
  state.setScrollTop(scrollElementRef.value.scrollTop);

  isScrolling.value = true;

  state.debugValue["isScrolling"] = true;

  if (typeof scrollingTimeoutId === "number") {
    clearTimeout(scrollingTimeoutId);
  }

  scrollingTimeoutId = setTimeout(() => {
    isScrolling.value = false;
    state.debugValue["isScrolling"] = false;
  }, scrollingDelay);
};
</script>

<template>
  {{ state }} len_{{ items.length }} {{ viewContainerHeight }}
  <div class="table-container overflow-auto max-h-30rem" ref="scrollElementRef" @scroll="handleScroll">
    <table>
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Num</th>
          <th scope="col">Proxy</th>
          <th scope="col">Object</th>
        </tr>
      </thead>
      <tbody >
        <tr v-for="prx of proxyItemsToRender" :key="prx.index">
          <td>{{ items[prx.index].id }}</td>
          <td>{{ items[prx.index].text }}</td>
          <td>{{ prx }}</td>
          <td>{{ items[prx.index] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scope>
.table-container {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  /* box-sizing: border-box; */
  /* ограничения размера, что бы не выступало */
  overflow-y: auto;
}

.table-container thead th {
  position: sticky;
  top: 0;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background-color: #f2f2f2;
}

th,
td {
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
}
</style>
