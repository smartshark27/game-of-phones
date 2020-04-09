class IntroScreen {
  constructor() {
    this.elements = [];
    this.draw();
  }

  draw() {
    this._drawTitle();
    this._drawMessage();
    this._drawScreenButton();
  }

  remove() {
    this.elements.forEach(element => element.remove()); 
  }

  _drawTitle() {
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "40%")
        .setAttribute("style", FONT_STYLE_TITLE)
        .setAttribute("font-size", FONT_SIZE_TITLE)
        .setTextContent("Game of Phones")
    );
  }

  _drawMessage() {
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "60%")
        .setAttribute("style", FONT_STYLE_BODY)
        .setAttribute("font-size", FONT_SIZE_BODY)
        .setTextContent("Touch to proceed")
    );
  }

  _drawScreenButton() {
    const handleClick = "switchScreenTo(\"instructions\")"
    this.elements.push(new ScreenButton(handleClick));
  }
}
