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
}

export const media = new Media();
