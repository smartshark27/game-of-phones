class Phones2Puzzle2 {
  constructor(piece) {
    this.elements = [];
    this.textCentreX = window.innerWidth / 2;
    this.textCentreY = piece === "1" ? 0 : window.innerHeight;

    this.draw();
  }

  draw() {
    this._drawBackground();
    this._drawText();
  }

  startAnimation() {
    this._showText();
    var degrees = 0;
    
    this.interval = setInterval(() => {
      this._rotateText(degrees);
      degrees = (degrees + 1) % 480;
    }, FRAME_DELAY);
  }

  stopAnimation() {
    clearInterval(this.interval);
  }

  remove() {
    this.elements.forEach(element => element.remove());
  }

  _drawBackground() {
    this.elements.push(
      SVG.new("rect")
        .setAttribute("x", 0)
        .setAttribute("y", 0)
        .setAttribute("width", window.innerWidth)
        .setAttribute("height", window.innerHeight)
        .setAttribute("fill", "LightGreen")
    );
  }

  _drawText() {
    this.elements.push(
      SVG.new("text")
        .setAttribute("id", "text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", this.textCentreX)
        .setAttribute("y", this.textCentreY)
        .setAttribute("style", FONT_STYLE_TITLE)
        .setAttribute("font-size", 300)
    );
  }

  _showText() {
    SVG.get("text").setTextContent("Game of Phones!");
  }

  _rotateText(degrees) {
    SVG.get("text").setAttribute(
      "transform",
      `rotate(${degrees},${this.textCentreX},${this.textCentreY})`
    );
  }
}