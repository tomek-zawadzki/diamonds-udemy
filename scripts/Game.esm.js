import { canvas } from "./Canvas.esm.js";
import { Common, VISIBLE_SCREEN } from "./Common.esm.js";
import {
  gameLevels,
  GAME_BOARD_X_OFFSET,
  GAME_BOARD_Y_OFFSET,
} from "./gameLevels.esm.js";
import { DATALOADED_EVENT_NAME } from "./Loader.esm.js";
import { media } from "./Media.esm.js";
import { GameState } from "./GameState.esm.js";
import { mouseController } from "./MouseControler.esm.js";
import { DIAMOND_SIZE } from "./Diamond.esm.js";

const DIAMONDS_ARRAY_WIDTH = 0;
const DIAMONDS_ARRAY_HEIGHT = DIAMONDS_ARRAY_WIDTH + 1; // with invisible first line
class Game extends Common {
  constructor() {
    super();
  }

  playLevel(level) {
    const { numberOfMovements, pointsToWin, board } = gameLevels[level - 1];

    window.removeEventListener(DATALOADED_EVENT_NAME, this.playLevel);
    this.gameState = new GameState(
      level,
      numberOfMovements,
      pointsToWin,
      board,
      media.diamondsSprite
    );
    this.changeVisibilityScreen(canvas.element, VISIBLE_SCREEN);
    this.animate();
  }

  animate() {
    this.handleMouseState();
    this.handleMouseClick();
    canvas.drawGameOnCanvas(gameState);
    this.gameState.getGameBoard().forEach((diamond) => diamond.draw());
    this.animationFrame = window.requestAnimationFrame(() => this.animate());
  }

  handleMouseState() {
    const isSwaping = !this.gameState.getIsSwaping();
    const isMoving = !this.gameState.getIsMoving();

    if (mouseController.clicked && isSwaping && isMoving) {
      mouseController.state++;
    }
  }
  handleMouseClick() {
    if (!mouseController.clicked) {
      return;
    }

    const xClicked = Math.floor(
      (mouseController.x - GAME_BOARD_X_OFFSET) / DIAMOND_SIZE
    );
    const yClicked = Math.floor(
      (mouseController.y - GAME_BOARD_Y_OFFSET) / DIAMOND_SIZE
    );

    if (
      !yClicked ||
      xClicked >= DIAMONDS_ARRAY_WIDTH ||
      yClicked >= DIAMONDS_ARRAY_HEIGHT
    ) {
      mouseController.state = 0;

      return;
    }

    if (mouseController === 1) {
      mouseController.firstClick = {
        x: xClicked,
        y: yClicked,
      };
    } else if (mouseController.state === 2) {
      mouseController.secondClick = {
        x: xClicked,
        y: yClicked,
      };

      mouseController.state = 0;

      if (
        Math.abs(mouseController.firstClick.x - mouseController.secondClick.x) +
          Math.abs(
            mouseController.firstClick.y - mouseController.secondClick.y
          ) !==
        1
      ) {
        return;
      }

      this.swapDiamonds();

      this.gameState.setIsSwaping(true);
      this.gameState.decreasePointsMovement();
      mouseController.state = 0;
    }

    mouseController.clicked = false;
  }
}

export const game = new Game();
