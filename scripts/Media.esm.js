class Media {
  constructor() {
    this._backgroundImage = null;
    this._diamondsSprite = null;
  }

  set backgroundImage(imageObject) {
    if (!imageObject instanceof Image) {
      return;
    }
    this._backgroundImage = imageObject;
  }

  get backgroundImage() {
    return this._backgroundImage;
  }

  set diamondsSprite(imageObject) {
    if (!imageObject instanceof Image) {
      return;
    }
    this._diamondsSprite = imageObject;
  }

  get diamondsSprite() {
    return this._diamondsSprite;
  }
}

export const media = new Media();
