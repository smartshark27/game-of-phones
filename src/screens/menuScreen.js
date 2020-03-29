class MenuScreen {
  constructor() {
    this.draw();
  }

  draw() {
    drawText("title", "50%", "35%", "Game of Phones", 64);
    this._drawPlay();
    this._drawInstructions();
  }

  remove() {
    removeElement("title");
    removeElement("playBackground");
    removeElement("playText");
    removeElement("instructionsBackground");
    removeElement("instructionsText");
  }

  static handlePlayClick() {
    switchScreenTo("selectNumberOfPhones");
  }

  static handleInstructionsClick() {
    switchScreenTo("instructions");
  }

  _drawPlay() {
    const text = drawTextWithBackground(
      "playText",
      "50%",
      "50%",
      "Play",
      48,
      "playBackground",
      "LightGreen"
    );
    text.setAttribute("onclick", "MenuScreen.handlePlayClick()");
  }

  _drawInstructions() {
    const text = drawTextWithBackground(
      "instructionsText",
      "50%",
      "65%",
      "Instructions",
      48,
      "instructionsBackground",
      "LightBlue"
    );
    text.setAttribute("onclick", "MenuScreen.handleInstructionsClick()");
  }
}
