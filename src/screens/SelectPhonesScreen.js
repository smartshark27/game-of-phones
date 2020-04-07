class SelectPhonesScreen {
  constructor() {
    this.elements = [];
    this.draw();
  }

  draw() {
    const numberOfYPositions = Object.keys(PUZZLE_LOOKUP).length + 1;
    const yPositions = generatePositionsBetween(numberOfYPositions, 30, 70);
    this._drawTitle(yPositions[0]);
    this._drawButtons(yPositions.slice(1));
  }

  remove() {
    this.elements.forEach(element => element.remove());
  }

  static handleButtonClick(event) {
    const clickedElement = event.target;
    const props = JSON.parse(clickedElement.getAttribute("props"));
    switchScreenTo("selectPuzzle", props);
  }

  _drawTitle(y) {
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", y)
        .setAttribute("style", FONT_STYLE_HEADING)
        .setAttribute("font-size", FONT_SIZE_HEADING)
        .setTextContent("How many phones?")
    );
  }

  _drawButtons(yPositions) {
    var yIndex = 0;
    for (var phones in PUZZLE_LOOKUP) {
      const y = yPositions[yIndex];
      this._drawButton(y, phones);
      yIndex++;
    }
  }

  _drawButton(y, phones) {
    const tempText = SVG.new("text")
      .setAttribute("dominant-baseline", "middle")
      .setAttribute("text-anchor", "middle")
      .setAttribute("x", window.innerWidth / 2)
      .setAttribute("y", y)
      .setAttribute("style", FONT_STYLE_BODY)
      .setAttribute("font-size", FONT_SIZE_BODY)
      .setTextContent(phones + " Phones");
    const textBoundary = tempText.getBBox();
    tempText.remove();

    const props = JSON.stringify({ phones: phones });

    this.elements.push(
      SVG.new("rect")
        .setAttribute("x", textBoundary.x - 40)
        .setAttribute("y", textBoundary.y - 20)
        .setAttribute("width", textBoundary.width + 80)
        .setAttribute("height", textBoundary.height + 40)
        .setAttribute("fill", "LightGreen")
        .setAttribute("onclick", "SelectPhonesScreen.handleButtonClick(event)")
        .setAttribute("props", props)
    );
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", window.innerWidth / 2)
        .setAttribute("y", y)
        .setAttribute("style", FONT_STYLE_BODY)
        .setAttribute("font-size", FONT_SIZE_BODY)
        .setTextContent(phones + " Phones")
        .setAttribute("onclick", "SelectPhonesScreen.handleButtonClick(event)")
        .setAttribute("props", props)
    );
  }
}
