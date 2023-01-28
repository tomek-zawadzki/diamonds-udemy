import { Common } from "./Common.esm.js";

const LEVEL_SELECT_ID = "js-level-select-screen";

class LevelSelect extends Common {
  constructor() {
    super(LEVEL_SELECT_ID);
  }
}

export const levelSelect = new LevelSelect();
