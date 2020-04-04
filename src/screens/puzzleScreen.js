class PuzzleScreen {
  static puzzle = null;
  static isAnimating = false;

  constructor(props) {
    this.elements = [];
    const numberOfPhones = props.numberOfPhones;
    const puzzleID = props.puzzle;

    this.piece = props.piece;
    this.isAnimating = false;
    this.puzzleName = "phones" + numberOfPhones + "puzzle" + puzzleID;

    this.draw();
  }

  draw() {
    this._drawPuzzle();
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

  _drawPuzzle() {
    if (this.puzzleName === "phones2puzzle1") {
      this.puzzle = new Phones2Puzzle1(this.piece);
    } else {
      throw `Puzzle name ${this.puzzleName} is not valid`;
    }
  }
}
