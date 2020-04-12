class PhonesSelectScreen {
  constructor() {
    this.elements = [];
    this.draw();
  }

  draw() {
    this._drawBackButton();
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
    phonesNum = clickedElement.getAttribute("phonesNum");
    switchScreenTo("PUZZLE_SELECT");
  }

  _drawBackButton() {
    const handleClick = "switchScreenTo(\"MENU\")";
    this.elements.push(new BackButton(handleClick));
  }

  _drawTitle(y) {
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", y)
        .setAttribute("style", TEXT_STYLE.HEADING.FONT)
        .setAttribute("font-size", TEXT_STYLE.HEADING.SIZE)
        .setTextContent("How many phones?")
    );
  }

  _drawButtons(yPositions) {
    var yIndex = 0;
    for (var phonesNum in PUZZLE_LOOKUP) {
      const y = yPositions[yIndex];
      this._drawButton(y, phonesNum);
      yIndex++;
    }
  }

  _drawButton(y, phonesNum) {
    const tempText = SVG.new("text")
      .setAttribute("dominant-baseline", "middle")
      .setAttribute("text-anchor", "middle")
      .setAttribute("x", window.innerWidth / 2)
      .setAttribute("y", y)
      .setAttribute("style", TEXT_STYLE.BODY.FONT)
      .setAttribute("font-size", TEXT_STYLE.BODY.SIZE)
      .setTextContent(phonesNum + " Phones");
    const textBoundary = tempText.getBBox();
    tempText.remove();

    this.elements.push(
      SVG.new("rect")
        .setAttribute("x", textBoundary.x - 40)
        .setAttribute("y", textBoundary.y - 20)
        .setAttribute("width", textBoundary.width + 80)
        .setAttribute("height", textBoundary.height + 40)
        .setAttribute("fill", COLORS.LIGHT_GREEN)
        .setAttribute("onclick", "PhonesSelectScreen.handleButtonClick(event)")
        .setAttribute("phonesNum", phonesNum)
    );
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", window.innerWidth / 2)
        .setAttribute("y", y)
        .setAttribute("style", TEXT_STYLE.BODY.FONT)
        .setAttribute("font-size", TEXT_STYLE.BODY.SIZE)
        .setTextContent(phonesNum + " Phones")
        .setAttribute("onclick", "PhonesSelectScreen.handleButtonClick(event)")
        .setAttribute("phonesNum", phonesNum)
    );
  }
}
