class PuzzleScreen {
  static puzzle = null;
  static isAnimating = false;

  constructor(props) {
    this.elements = [];
    this._phones = props.phones;
    this._puzzle = props.puzzle;
    this._piece = props.piece;

    this._drawPuzzle = PUZZLE_LOOKUP[this._phones][this._puzzle][this._piece];
    this.isAnimating = false;

    this.draw();
  }

  draw() {
    this.puzzle = this._drawPuzzle();
    this._drawOverlay();
  }

  _drawOverlay() {
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "20%")
        .setAttribute("font-size", 36)
        .setTextContent("Phones: " + this._phones + ", Puzzle: " + this._puzzle)
    );
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "30%")
        .setAttribute("font-size", 48)
        .setTextContent("This is piece " + this._piece)
    );
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "75%")
        .setAttribute("font-size", 36)
        .setTextContent("Touch to start animation at the")
    );
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "80%")
        .setAttribute("font-size", 36)
        .setTextContent("same time as everyone else")
    );
  }

  removeOverlay() {
    this.elements.forEach(element => element.remove());
  }

  async redrawPuzzle() {
    currentScreen.puzzle.remove();
    currentScreen.draw();
  }

  remove() {
    this.puzzle.remove();
    this.elements.forEach(element => element.remove());
  }

  static handleClick() {
    if (!currentScreen instanceof PuzzleScreen) {
      throw "Current screen is not an instance of PuzzleScreen";
    }

    if (!currentScreen.isAnimating) {
      currentScreen.removeOverlay();
      currentScreen.isAnimating = true;
      currentScreen.puzzle.startAnimation();
    } else {
      currentScreen.isAnimating = false;
      currentScreen.puzzle.stopAnimation();
      currentScreen.puzzle.remove();
      currentScreen.redrawPuzzle();
    }
  }
}
