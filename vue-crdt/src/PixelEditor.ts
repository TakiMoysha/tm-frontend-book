import { type RGB } from "./types";
import { PixelData } from "./PixelData";

export class PixelEditor {
  private _el: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;
  private _artboard: { w: number; h: number };
  private _data = new PixelData();
  private _color: RGB = [0, 0, 0];
  private _listeners: Array<(state: PixelData["state"]) => void> = [];
  constructor(el: HTMLCanvasElement, artboard: { w: number; h: number }) {
    this._el = el;

    const ctx = el.getContext("2d");
    if (!ctx) throw new Error("Couldn't get rendering context");
    this._ctx = ctx;

    this._artboard = artboard;

    this._el.addEventListener("pointerdown", this);
    this._el.addEventListener("pointermove", this);
    this._el.addEventListener("pointerup", this);

    this._el.width = this._el.clientWidth * devicePixelRatio;
    this._el.height = this._el.clientHeight * devicePixelRatio;
    this._ctx.scale(devicePixelRatio, devicePixelRatio);
    this._ctx.imageSmoothingEnabled = false;
  }

  set onchange(listener: (state: PixelData["state"]) => void) { }

  set color(color: RGB) {
    this._color = color;
  }

  handleEvent(e: PointerEvent) {
    switch (e.type) {
      case "pointerdown": {
        this._el.setPointerCapture(e.pointerId);
      }

      case "pointermove": {
        if (!this._el.hasPointerCapture(e.pointerId)) return;
        const x = Math.floor(
          (this._artboard.w * e.offsetX) / this._el.clientWidth,
        );
        const y = Math.floor(
          (this._artboard.h * e.offsetY) / this._el.clientHeight,
        );

        this.paint(x, y);
        break;
      }

      case "pointerup": {
        this._el.releasePointerCapture(e.pointerId);
        break;
      }
    }
  }

  private paint(x: number, y: number) {
    if (x < 0 || this._artboard.w <= x || y < 0 || this._artboard.h <= y) {
      return;
    }
    this._data.set(x, y, this._color);
    this.draw();
  }

  private async draw() {
    const chans = 4;
    const buffer = new Uint8ClampedArray(
      this._artboard.w * this._artboard.h * chans,
    );
    const rowsize = this._artboard.w * chans;

    for (let row = 0; row < this._artboard.h; row++) {
      const offsetY = row * rowsize;

      for (let col = 0; col < this._artboard.w; col++) {
        const offsetX = col * chans;
        const offset = offsetY + offsetX;
        const [r, g, b] = this._data.get(col, row);
        buffer[offset] = r;
        buffer[offset + 1] = g;
        buffer[offset + 2] = b;
        buffer[offset + 3] = 255;
      }
    }
    const data = new ImageData(buffer, this._artboard.w, this._artboard.h);
    const bitmap = await createImageBitmap(data);
    this._ctx.drawImage(bitmap, 0, 0, this._el.clientWidth, this._el.clientHeight);
  }

  private notify() { }

  receive(state: PixelData["state"]) {
    console.log("Received state", state);
  }
}
