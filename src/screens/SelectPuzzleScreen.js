class SelectPuzzleScreen {
  constructor(props) {
    this.elements = [];
    this.phones = props.phones;

    this.draw();
  }

  draw() {
    this._drawTitle();
    this._drawButtons();
  }

  remove() {
    this.elements.forEach(element => element.remove());
  }
  
  static handleClick(event) {
    const clickedElement = event.target;
    const props = JSON.parse(clickedElement.getAttribute("props"));
    switchScreenTo("selectPiece", props);
  }

  _drawTitle() {
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "40%")
        .setAttribute("font-size", 64)
        .setTextContent("Select Puzzle")
    );
  }

  _drawButtons() {
    const puzzles = PUZZLE_LOOKUP[this.phones];
    const numberOfButtons = Object.keys(puzzles).length;
    const xPositions = generatePositionsBetween(numberOfButtons, 30, 70);
    var xIndex = 0;
    for (var puzzle in puzzles) {
      const x = xPositions[xIndex];
      this._drawButton(x, puzzle);
      xIndex++;
    }
  }

  _drawButton(x, puzzle) {
    const tempText = SVG.new("text")
      .setAttribute("dominant-baseline", "middle")
      .setAttribute("text-anchor", "middle")
      .setAttribute("x", x)
      .setAttribute("y", "60%")
      .setAttribute("font-size", 48)
      .setTextContent(puzzle);
    const textBoundary = tempText.getBBox();
    tempText.remove();

    const props = JSON.stringify({
      phones: this.phones,
      puzzle: puzzle
    });

    this.elements.push(
      SVG.new("rect")
        .setAttribute("x", textBoundary.x - 40)
        .setAttribute("y", textBoundary.y - 20)
        .setAttribute("width", textBoundary.width + 80)
        .setAttribute("height", textBoundary.height + 40)
        .setAttribute("fill", "LightGreen")
        .setAttribute("onclick", "SelectPuzzleScreen.handleClick(event)")
        .setAttribute("props", props)
    );
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", x)
        .setAttribute("y", "60%")
        .setAttribute("font-size", 48)
        .setTextContent(puzzle)
        .setAttribute("onclick", "SelectPuzzleScreen.handleClick(event)")
        .setAttribute("props", props)
    );
  }
}
