class InstructionsScreen {
  constructor() {
    this.elements = [];
    this.draw();
  }

  draw() {
    this._drawTitle();
    this._drawInstruction("25%", "1) Turn off device rotation.");
    this._drawInstruction("35%", "2) Play with friends with phones.");
    this._drawInstruction("45%", "3) All start the same level.");
    this._drawInstruction("55%", "4) All choose a different piece.");
    this._drawInstruction("65%", "5) Tap all screens at the same time.");
    this._drawInstruction("75%", "6) Place phones on a surface correctly.");
    this._drawInstruction("85%", "7) Move on to the next puzzle.");
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
        .setAttribute("y", "15%")
        .setAttribute("style", FONT_STYLE_HEADING)
        .setAttribute("font-size", FONT_SIZE_HEADING)
        .setTextContent("Instructions")
    );
  }

  _drawInstruction(y, text) {
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", y)
        .setAttribute("style", FONT_STYLE_BODY)
        .setAttribute("font-size", FONT_SIZE_BODY)
        .setTextContent(text)
    );
  }
}
