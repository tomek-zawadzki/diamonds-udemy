import { canvas } from "./Canvas.esm.js";
import { Common, HIDDEN_SCREEN, VISIBLE_SCREEN } from "./Common.esm.js";
import { levelSelect } from "./LevelSelect.esm.js";
import { mainMenu } from "./MainMenu.esm.js";
import { userData } from "./UserData.esm.js";
import { game } from "./Game.esm.js";

const RESULT_SCREEN_GAME_WIN_CLASS = "edn-screen--is-win";
const RESULT_SCREEN_END_SCREEN_ID = "js-end-screen";
const RESULT_SCREEN_HEADER_ID = "js-game-result";
const RESULT_SCREEN_USER_POINTS_ID = "js-user-points";
const RESULT_SCREEN_HIGH_SCORES_ID = "js-high-scores";
const RESULT_SCREEN_BACK_BUTTON_ID = "js-back-to-levels";
const RESULT_SCREEN_RESTART_LEVEL_BUTTON_ID = "js-restart-level";

class ResultScreen extends Common {
  constructor() {
    super(RESULT_SCREEN_END_SCREEN_ID);
    this.bindToElements();
  }

  bindToElements() {
    this.resultTextElemnet = this.bindToElement(RESULT_SCREEN_HEADER_ID);
    this.userPointsElement = this.bindToElement(RESULT_SCREEN_USER_POINTS_ID);
    this.highScoresElement = this.bindToElement(RESULT_SCREEN_HIGH_SCORES_ID);

    const backButtonElement = this.bindToElement(RESULT_SCREEN_BACK_BUTTON_ID);
    const restartButtonElement = this.bindToElement(
      RESULT_SCREEN_RESTART_LEVEL_BUTTON_ID
    );

    backButtonElement.addEventListener("click", () => this.backButtonClick());
    restartButtonElement.addEventListener("click", () =>
      this.restartLevelClick()
    );
  }

  viewResultScreen(isGameWin, playerPoints, level) {
    if (isGameWin) {
      this.element.classList.add(RESULT_SCREEN_GAME_WIN_CLASS);
    } else {
      this.element.classList.remove(RESULT_SCREEN_GAME_WIN_CLASS);
    }

    this.changeVisibilityScreen(this.element, VISIBLE_SCREEN);
    this.resultTextElemnet.textContent = isGameWin ? "WYGRAŁEŚ" : "PRZEGRAŁEŚ";
    this.userPointsElement.textContent = String(playerPoints);
    this.highScoresElement.textContent = String(userData.getHighScore(level));
  }

  backButtonClick() {
    this.changeVisibilityScreen(canvas.element, HIDDEN_SCREEN);
    this.changeVisibilityScreen(this.element, HIDDEN_SCREEN);
    mainMenu.showLevelScreen();
  }

  restartLevelClick() {
    this.changeVisibilityScreen(this.element, VISIBLE_SCREEN);
    levelSelect.loadLevel(game.gameState.level);
  }
}

export const resultScreen = new ResultScreen();
