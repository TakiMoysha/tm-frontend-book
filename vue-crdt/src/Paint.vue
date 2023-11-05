<script setup lang="ts">
import { ref, onMounted } from "vue";
import { type RGB } from "./types";
import { PixelEditor } from "./PixelEditor";

const acanvas = ref();
const bcanvas = ref();
const palette = ref();

const artboardSize = { w: 100, h: 100 };
onMounted(() => {
  const alice = new PixelEditor(acanvas.value, artboardSize);
  const bob = new PixelEditor(bcanvas.value, artboardSize);

  acanvas.value.onchange = (state: any) => bob.receive(state);
  bcanvas.value.onchange = (state: any) => alice.receive(state);

  palette.value.oninput = () => {
    const hex = palette.value.value.substring(1).match(/[\da-f]{2}/g) || [];
    const rgb = hex.map((byte: string) => parseInt(byte, 16));
    if (rgb.length === 3) alice.color = bob.color = rgb as RGB;
  };
});
</script>

<template>
  <div class="scaffold-wrapper">
    <div class="canvases">
      <canvas class="canvas" ref="acanvas"></canvas>
      <canvas class="canvas" ref="bcanvas"></canvas>
    </div>

    <input class="color" ref="palette" type="color" value="#ff0000" />
  </div>
</template>

<style scoped>
.wrapper {
  display: inline-flex;
  flex-direction: column;
  gap: 1rem;
}

.canvases {
  display: flex;
  gap: 1rem;
}

.canvas {
  width: 25rem;
  height: 25rem;
  border: 0.25rem solid #eeeeee;
  border-radius: 0.25rem;
  cursor: crosshair;
  touch-action: none;
}

.color {
  border: 0;
}
</style>
