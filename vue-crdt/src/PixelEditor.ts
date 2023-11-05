import { type RGB } from "./types";
import { PixelData } from "./PixelData";

export class PixelEditor {
  private _el: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;
  private _artboard: { w: number, h: number };
  private _data = new PixelData();
  private _color: RGB = [0, 0, 0];
  private _listeners: Array<(state: PixelData["state"]) => void> = [];
  constructor(el: HTMLCanvasElement, artboard: { w: number, h: number }) {
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
    
  set onchange(listener: (state: PixelData["state"]) => void) {
  }

  set color(color: RGB) {}

  handleEvent(e: PointerEvent) {}

  private paint(x: number, y: number) {}

  private async draw() {}

  private notify() {}

  receive(state: PixelData["state"]) {
    console.log("Received state", state);
  }
}
