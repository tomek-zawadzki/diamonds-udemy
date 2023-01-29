import { GAME_BOARD_X_OFFSET, GAME_BOARD_Y_OFFSET } from "./Game.esm.js";
import { Sprite } from "./Sprite.esm.js";

const DIAMOND_ORIGINAL_SIZE = 32;
const DIAMOND_SIZE = 48;
const NUMBER_OF_DIAMONDS_TYPES = 6;

const DIAMOND_ZOOM = DIAMOND_SIZE / DIAMOND_ORIGINAL_SIZE;

export class Diamond extends Sprite {
  constructor(x, y, row, column, kind, diamondSpriteImage) {
    const offeset = {
      x: GAME_BOARD_X_OFFSET,
      y: GAME_BOARD_Y_OFFSET,
    };
    super(
      x,
      y,
      DIAMOND_ORIGINAL_SIZE,
      DIAMOND_ORIGINAL_SIZE,
      diamondSpriteImage,
      NUMBER_OF_DIAMONDS_TYPES,
      offeset
    );
    this.row = row;
    this.column = column;
    this.kind = kind;
    this.match = 0;
  }

  draw() {
    super.draw(this.kind, DIAMOND_ZOOM);
  }
}
