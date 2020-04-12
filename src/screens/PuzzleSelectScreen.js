class PuzzleSelectScreen {
  constructor() {
    this.elements = [];

    this.draw();
  }

  draw() {
    this._drawBackButton();
    this._drawTitle();
    this._drawButtons();
  }

  remove() {
    this.elements.forEach(element => element.remove());
  }
  
  static handleClick(event) {
    const clickedElement = event.target;
    puzzleNum = JSON.parse(clickedElement.getAttribute("puzzleNum"));
    switchScreenTo("PIECE_SELECT");
  }

  _drawBackButton() {
    const handleClick = "switchScreenTo(\"PHONES_SELECT\")";
    this.elements.push(new BackButton(handleClick));
  }

  _drawTitle() {
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "40%")
        .setAttribute("style", TEXT_STYLE.HEADING.FONT)
        .setAttribute("font-size", TEXT_STYLE.HEADING.SIZE)
        .setTextContent("Select Puzzle")
    );
  }

  _drawButtons() {
    const puzzles = PUZZLE_LOOKUP[phonesNum];
    const numberOfButtons = Object.keys(puzzles).length;
    const xPositions = generatePositionsBetween(numberOfButtons, 30, 70);
    var xIndex = 0;
    for (var puzzle in puzzles) {
      const x = xPositions[xIndex];
      this._drawButton(x, puzzle);
      xIndex++;
    }
  }

  _drawButton(x, puzzleNum) {
    const tempText = SVG.new("text")
      .setAttribute("dominant-baseline", "middle")
      .setAttribute("text-anchor", "middle")
      .setAttribute("x", x)
      .setAttribute("y", "60%")
      .setAttribute("style", TEXT_STYLE.BODY.FONT)
      .setAttribute("font-size", TEXT_STYLE.BODY.SIZE)
      .setTextContent(puzzleNum);
    const textBoundary = tempText.getBBox();
    tempText.remove();

    this.elements.push(
      SVG.new("rect")
        .setAttribute("x", textBoundary.x - 40)
        .setAttribute("y", textBoundary.y - 20)
        .setAttribute("width", textBoundary.width + 80)
        .setAttribute("height", textBoundary.height + 40)
        .setAttribute("fill", "LightGreen")
        .setAttribute("onclick", "PuzzleSelectScreen.handleClick(event)")
        .setAttribute("puzzleNum", puzzleNum)
    );
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", x)
        .setAttribute("y", "60%")
        .setAttribute("style", TEXT_STYLE.BODY.FONT)
        .setAttribute("font-size", TEXT_STYLE.BODY.SIZE)
        .setTextContent(puzzleNum)
        .setAttribute("onclick", "PuzzleSelectScreen.handleClick(event)")
        .setAttribute("puzzleNum", puzzleNum)
    );
  }
}
