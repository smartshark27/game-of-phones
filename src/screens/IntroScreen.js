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
        .setAttribute("style", TEXT_STYLE.TITLE.FONT)
        .setAttribute("font-size", TEXT_STYLE.TITLE.SIZE)
        .setTextContent("Phuzzle")
    );
  }

  _drawMessage() {
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "60%")
        .setAttribute("style", TEXT_STYLE.BODY.FONT)
        .setAttribute("font-size", TEXT_STYLE.BODY.SIZE)
        .setTextContent("Touch to proceed")
    );
  }

  _drawScreenButton() {
    const handleClick = "switchScreenTo(\"INSTRUCTIONS\")"
    this.elements.push(new ScreenButton(handleClick));
  }
}
