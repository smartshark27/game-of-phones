class MenuScreen {
  constructor() {
    this.elements = [];
    this.draw();
  }

  draw() {
    this._drawTitle();
    this._drawPlayButton();
    this._drawInstructionsButton();
  }

  remove() {
    this.elements.forEach(element => element.remove());
  }

  static handlePlayClick() {
    switchScreenTo("phonesSelect");
  }

  static handleInstructionsClick() {
    switchScreenTo("instructions");
  }

  _drawTitle() {
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "35%")
        .setAttribute("style", FONT_STYLE_TITLE)
        .setAttribute("font-size", FONT_SIZE_TITLE)
        .setTextContent("Phuzzle")
    );
  }

  _drawPlayButton() {
    this._drawTextButton(
      "50%",
      "Play",
      "LightGreen",
      "MenuScreen.handlePlayClick()"
    );
  }

  _drawInstructionsButton() {
    this._drawTextButton(
      "65%",
      "Instructions",
      "LightBlue",
      "MenuScreen.handleInstructionsClick()"
    );
  }

  _drawTextButton(y, text, color, clickHandler) {
    const tempText = SVG.new("text")
      .setAttribute("dominant-baseline", "middle")
      .setAttribute("text-anchor", "middle")
      .setAttribute("x", "50%")
      .setAttribute("y", y)
      .setAttribute("style", FONT_STYLE_BODY)
      .setAttribute("font-size", FONT_SIZE_BODY)
      .setTextContent(text);
    const textBoundary = tempText.getBBox();
    tempText.remove();

    this.elements.push(
      SVG.new("rect")
        .setAttribute("x", textBoundary.x - 40)
        .setAttribute("y", textBoundary.y - 20)
        .setAttribute("width", textBoundary.width + 80)
        .setAttribute("height", textBoundary.height + 40)
        .setAttribute("fill", color)
        .setAttribute("onclick", clickHandler)
    );
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", y)
        .setAttribute("style", FONT_STYLE_BODY)
        .setAttribute("font-size", FONT_SIZE_BODY)
        .setTextContent(text)
        .setAttribute("onclick", clickHandler)
    );
  }
}
