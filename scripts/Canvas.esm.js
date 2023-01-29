import { Common } from "./Common.esm.js";

const GAME_SCREEN_ID = "js-game-screen";
const LOAD_CURRENT_ID = "js-loading-screen-current";
const LOAD_TOTAL_ID = "js-loading-screen-total";

export const CANVAS_WIDTH = 640;
export const CANVAS_HEIGHT = 480;

class Canvas extends Common {
  constructor() {
    super(GAME_SCREEN_ID);
    this.configureCanvas();
  }

  configureCanvas() {
    this.context = this.element.getContext("2d");
    this.context.canvas.width = CANVAS_WIDTH;
    this.context.canvas.height = CANVAS_HEIGHT;
    this.context.font = "20px Arial white";
    this.context.fillStyle = "white";
  }
}

export const canvas = new Canvas();
