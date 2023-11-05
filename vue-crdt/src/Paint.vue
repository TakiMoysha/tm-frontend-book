<script setup lang="ts">
import { ref, onMounted } from "vue";

const acanvas = ref();
const bcanvas = ref();
const palette = ref();

const artboardSize = { w: 100, h: 100 };

// const alice = new PixelEditor(acanvas, artboardSize);
// const bob = new PixelEditor(bcanvas, artboardSize);

function changePaletteColor() {
  palette.oninput = () => {
    const hex = palette.value.substring(1).match(/[\da-f]{2}/g) || [];
    const rgb = hex.map((byte) => parseInt(byte, 16));
    if (rgb.length === 3) alice.color = bob.color = rgb as RGB;
  };
};

onMounted(() => {
  // acanvas.onchange = (state) => bob.receive(state);
  acanvas.onchange = (state) => console.warn(state);
  // bcanvas.onchange = (state) => alice.receive(state);
  bcanvas.onchange = (state) => console.warn(state);
});
</script>

<template>
  <div class="scaffold-wrapper">
    <div class="canvases">
      <canvas class="canvas" ref="acanvas"></canvas>
      <canvas class="canvas" ref="bcanvas"></canvas>
    </div>

    <input @change="changePaletteColor" class="color" ref="palette" type="color" value="#ff0000" />
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
