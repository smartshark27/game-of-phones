class Phones3Puzzle2 {
  constructor(pieceNum) {
    this.WIDTH = 5000;
    this.HEIGHT = 2000;

    this.elements = [];

    if (pieceNum === "1") {
      this.textCentreX = window.innerWidth;
      this.textCentreY = -500;
      this.degreesOffset = 90;
    } else if (pieceNum === "2") {
      this.textCentreX = window.innerWidth / 2;
      this.textCentreY = window.innerHeight / 2;
      this.degreesOffset = 0;
    } else if (pieceNum === "3") {
      this.textCentreX = 0;
      this.textCentreY = window.innerHeight + 500;
      this.degreesOffset = 90;
    } else {
      throw "Invalid piece number: " + pieceNum
    }

    this.draw();
  }

  draw() {
    this._drawBackground();
    this._drawText();
  }

  startAnimation() {
    this._showText();
    var degrees = this.degreesOffset;
    
    this.interval = setInterval(() => {
      this._rotateText(degrees);
      degrees = (degrees + 1) % 360;
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
        .setAttribute("style", TEXT_STYLE.TITLE.FONT)
        .setAttribute("font-size", 450)
    );
  }

  _showText() {
    SVG.get("text").setTextContent("Phuzzle? Phuzzle!");
  }

  _rotateText(degrees) {
    SVG.get("text").setAttribute(
      "transform",
      `rotate(${degrees},${this.textCentreX},${this.textCentreY})`
    );
  }
}
