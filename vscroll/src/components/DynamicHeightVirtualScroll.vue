<script setup lang="ts">
import { state } from "@/state";
import { onMounted, ref, computed, watch, reactive } from "vue";

// debug
const isDebug = ref(true);

// props
const props = defineProps(["title", "reverse"]);
watch(
  () => props.reverse,
  () => {
    console.log("REVERSE");
    data.reverse();
  },
);

// simple vscroll consts
const getEntryHeight = (index: number) => {
  return 30 + Math.round(Math.random() * 40);
}
const overscan = 5;
const scrollingDelay = 100;
const estimateEntryHeight = 40;

// data
import { loadData } from "@/data";
const data = loadData({ count: 1_000, type: "simple" });
// virtual scrolling (input params)
const listHeight = ref(0);
const scrollTop = ref(0);
const scrollElementRef = ref<HTMLDivElement | null>(null);

const listHeightHook = computed(() => {
  if (!scrollElementRef.value) return;

  const resizeObserver = new ResizeObserver(([entry]) => {
    if (!entry) return;
    const height =
      entry.borderBoxSize[0]?.blockSize ??
      entry.target.getBoundingClientRect().height;
    console.debug("dynListHeight: ", height)
    listHeight.value = height;
  });

  resizeObserver.observe(scrollElementRef.value);
  return () => { resizeObserver.disconnect(); };
});
const useDynHeight = computed(() => {
  const rangeStart = scrollTop.value;
  const rangeEnd = rangeStart + listHeight.value;

  let totalHeight = 0;
  let startIndex = -1;
  let endIndex = -1;

  const entriesCount = data.length;
  const allEntries = Array(entriesCount);
  console.log("useDynHeight: ", rangeStart, rangeEnd, entriesCount)
  for (let index = 0; index <= entriesCount; index++) {
    const entry = {
      index,
      height: getEntryHeight(index),
      offsetTop: totalHeight,
    };
    totalHeight += entry.height;
    allEntries[index] = entry;
    // start of array
    
    if (isDebug.value) console.log("start: ", entry.offsetTop + entry.height);
    if (startIndex === -1 && entry.offsetTop + entry.height > rangeStart) {
      startIndex = Math.max(0, index - overscan);
    }
    // end of array
    if (isDebug.value) console.log("end: ", entry.offsetTop + entry.height); 
    if (endIndex === -1 && entry.offsetTop + entry.height >= rangeEnd) {
      endIndex = Math.min(entriesCount - 1, index + overscan);
    }
  }
  const virtualEntries = allEntries.slice(startIndex, endIndex);
  return {
    virtualEntries,
    startIndex,
    endIndex,
    allEntries,
    totalHeight,
  };
});
// const totalListHeight = computed(() => entryHeight * data.length);

const isScrolling = ref(false);
let scrollingTimeoutId: number | null = null;
const handleScroll = () => {
  scrollTop.value = scrollElementRef.value?.scrollTop as number;
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
  <div>
    <h2>{{ props.title }}</h2>
    <div class="table-responsive-lg" ref="scrollElementRef" @scroll="handleScroll" :style="{
      height: '60vh',
      overflow: 'auto',
      border: '1px inset black',
    }">
      <div :style="{ height: useDynHeight.totalHeight + 'px' }">
        <table class="table table-striped table-sm" style="position: sticky; top: 0px">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Num</th>
              <th scope="col">Proxy</th>
              <th scope="col">Object</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="ventry of useDynHeight.virtualEntries"
              :key="ventry.index"
            >
              <td>{{ data[ventry.index].id }}</td>
              <td>{{ data[ventry.index].text }}</td>
              <td>{{ ventry }}</td>
              <td>{{ data[ventry.index] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-show="isDebug">
      <p>{{ useDynHeight.totalHeight }}</p>
      <p>{{ useDynHeight.virtualEntries }}</p>
      <p>{{ listHeight }}</p>
      <p>{{ listHeightHook }}</p>
    </div>
  </div>
</template>
