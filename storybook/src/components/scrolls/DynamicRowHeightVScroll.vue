<script setup lang="ts">
import { state } from "@/composables/useVScroll";

import { onMounted, ref, computed, watch, reactive, nextTick } from "vue";

export interface IDynamicRowHeightVScrollProps {
  items: any[];
  scrollingDelay?: number;

  reverse?: boolean;

  loading?: boolean;
}

const props =defineProps<IDynamicRowHeightVScrollProps>();

// debug
const isDebug = ref(true);

// function copyEventTargetText(event: KeyboardEvent) {
//   if (!event.target) return;
//
//   const codeElement = (event.target as HTMLElement)?.previousElementSibling;
//   if (!codeElement) return;
//
//   if (navigator && navigator.clipboard) {
//     // need to check because it's only available on https and localohost
//     navigator.clipboard.writeText((codeElement as HTMLElement).innerText);
//   }
// }
// select only content in container

// const addListeners = () => {
//   // const selectableContent = ref<HTMLDivElement>("selectable-content");
//   const selectableContent = document.getElementById("selectable-content");
//   selectableContent?.addEventListener("keydown", (event) => {
//     if (event.key === "a" && event.ctrlKey) {
//       event.preventDefault();
//       copyEventTargetText(event);
//     }
//   });

// selectableContent.onkeydown = (event) => {
//   console.warn("select all");
//   if (event.key === "a" && event.ctrlKey) {
//     event.preventDefault();
//     console.warn("select all");
//     const range = document.createRange();
//     range.selectNodeContents(selectableContent);
//     const selection = window.getSelection();
//     selection.removeAllRanges();
//     selection.addRange(range);
//   }
// };
// };

// watch(
//   () => props.reverse,
//   () => {
//     console.log("REVERSE");
//     // data.reverse();
//     props.items.reverse();
//   },
// );

const getEntryHeight = (index: number) => {
  return 30 + Math.round(Math.random() * 40);
};
const overscan = 5;
const scrollingDelay = 100;
const estimateEntryHeight = 40;

// data
const data = ref(props.items);
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
    console.debug("dynListHeight: ", height);
    listHeight.value = height;
  });

  resizeObserver.observe(scrollElementRef.value);
  return () => {
    resizeObserver.disconnect();
  };
});
const useDynHeight = computed(() => {
  const rangeStart = scrollTop.value;
  const rangeEnd = rangeStart + listHeight.value;

  let totalHeight = 0;
  let startIndex = -1;
  let endIndex = -1;

  const entriesCount = props.items?.length;
  const allEntries = Array(entriesCount);
  console.log("useDynHeight: ", rangeStart, rangeEnd, entriesCount);
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

onMounted(() => {
  nextTick();
  // addListeners();
});
</script>

<template>
  <div v-show="isDebug" ref="selectable-content" id="selectable-content">
    <p>{{ props.items?.length || null }}</p>
    <p>{{ useDynHeight.totalHeight }} {{ useDynHeight.virtualEntries }}</p>
    <p>{{ listHeight }} {{ listHeightHook }}</p>
  </div>

  <div class="container" ref="scrollElementRef" @scroll="handleScroll">
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
          <tr v-for="ventry of useDynHeight.virtualEntries" :key="ventry.index">
            <td>{{ data[ventry.index].id }}</td>
            <td>{{ data[ventry.index].text }}</td>
            <td>{{ ventry }}</td>
            <td>{{ data[ventry.index] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style module lang="css">
.table-responsive-lg {
  display: block;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table-responsive-lg table {
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
}

.table-responsive-lg th,
td {
  border: 1px solid #000;
  padding: 8px;
  text-align: left;
}
</style>
