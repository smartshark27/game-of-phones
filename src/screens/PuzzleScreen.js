class PuzzleScreen {
  static puzzle = null;
  static isAnimating = false;

  constructor(props) {
    this.elements = [];
    const phones = props.phones;
    const puzzle = props.puzzle;
    const piece = props.piece;

    this._drawPuzzle = PUZZLE_LOOKUP[phones][puzzle][piece];
    this.isAnimating = false;

    this.draw();
  }

  draw() {
    this.puzzle = this._drawPuzzle();
  }

  async redrawPuzzle() {
    currentScreen.puzzle.remove();
    currentScreen.draw();
  }

  remove() {
    this.puzzle.remove();
  }

  static handleClick() {
    if (!currentScreen instanceof PuzzleScreen) {
      throw "Current screen is not an instance of PuzzleScreen";
    }

    if (!currentScreen.isAnimating) {
      currentScreen.isAnimating = true;
      currentScreen.puzzle.animate();
    } else {
      currentScreen.isAnimating = false;
      currentScreen.puzzle.remove();
      currentScreen.redrawPuzzle();
    }
  }
}
