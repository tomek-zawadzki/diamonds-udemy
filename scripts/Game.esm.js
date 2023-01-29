import { canvas } from "./Canvas.esm.js";
import { Common, VISIBLE_SCREEN } from "./Common.esm.js";
import { gameLevels } from "./gameLevels.esm.js";
import { DATALOADED_EVENT_NAME } from "./Loader.esm.js";

class Game extends Common {
  constructor() {
    super();
  }

  playLevel(level) {
    window.removeEventListener(DATALOADED_EVENT_NAME, this.playLevel);
    const levelInfo = gameLevels[level - 1];
    this.changeVisibilityScreen(canvas.element, VISIBLE_SCREEN);
    this.animate();
  }

  animate() {
    canvas.drawGameOnCanvas();
    this.animationFrame = window.requestAnimationFrame(() => this.animate());
  }
}

export const game = new Game();
