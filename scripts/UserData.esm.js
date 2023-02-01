class UserData {
  constructor() {
    if (!localStorage.length) {
      localStorage.setItem("1", JSON.stringify({ active: true, bestScore: 0 }));
    }
  }

  chechAvailabilityLevel(levelNumber) {
    const item = localStorage.getItem(String(levelNumber));

    if (!item) {
      return false;
    }

    const { active } = JSON.parse(item);

    return active;
  }

  addNewLevel(levelNumber) {
    localStorage.setItem(
      String(levelNumber),
      JSON.stringify({ active: true, bestScore: 0 })
    );
  }

  getHighScore(levelNumber) {
    const item = localStorage.getItem(String(levelNumber));
    const { bestScore } = JSON.parse(item);

    return bestScore;
  }

  setHighScore(levelNumber, newHighScore) {
    localStorage.setItem(
      String(levelNumber),
      JSON.stringify({ active: true, bestScore: newHighScore })
    );
  }
}

export const userData = new UserData();
