<script setup lang="ts">
import { state } from "@/composables/useVScroll";
import { onMounted, ref, computed, watch, reactive } from "vue";

const props = defineProps(["loading", "fields", "items", "reverse"]);

onMounted(() => {
  console.log("SimpleVirtualScroll mounted: ", props);
});
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
const itemHeight = 40;
const containerHeight = 1200; // computed from viewport
const overscan = 5;
const scrollingDelay = 100;

// virtual scrolling
const scrollTop = ref(0);
const scrollElementRef = ref<HTMLDivElement>();
const isScrolling = ref(false);
const totalListHeight = computed(() => itemHeight * props.items.length);

let scrollingTimeoutId: number | null = null;

const proxyEntriesToRender = computed(() => {
  const rangeStart = scrollTop.value;
  const rangeEnd = rangeStart + containerHeight;
  const _startIndex = Math.floor(rangeStart / itemHeight);
  const _endIndex = Math.ceil(rangeEnd / itemHeight);
  let startIndex = _startIndex < 0 ? 0 : _startIndex;
  // let startIndex = Math.max(_startIndex, 0);
  let endIndex =
    _endIndex > props.items.length - 1 ? props.items.length - 1 : _endIndex;
  // let endIndex = Math.min(endIndex, data.length - 1);
  const virtualEntries = [];
  for (let index = startIndex; index <= endIndex; index++) {
    virtualEntries.push({
      index,
      offsetTop: index * itemHeight,
    });
  }
  return virtualEntries;
});
const handleScroll = () => {
  if (!scrollElementRef.value) return;

  scrollTop.value = scrollElementRef.value.scrollTop;
  state.setScrollTop(scrollTop.value);

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
  <div ref="scrollElementRef" @scroll="handleScroll">
    <table class="table-container" >
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Num</th>
          <th scope="col">Proxy</th>
          <th scope="col">Object</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prx of proxyEntriesToRender" :key="prx.index" :style="{ height: itemHeight + 'px' }">
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
  box-sizing: border-box;
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
