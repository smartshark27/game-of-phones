class IntroScreen {
  constructor() {
    this.elements = [];
    this.draw();
  }

  draw() {
    this._drawTitle();
    this._drawMessage();
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
        .setAttribute("font-size", 96)
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
        .setAttribute("font-size", 48)
        .setTextContent("Touch to proceed")
    );
  }
}
