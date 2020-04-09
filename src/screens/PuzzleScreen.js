class PuzzleScreen {
  static puzzle = null;
  static isAnimating = false;

  constructor() {
    this.elements = [];

    this._drawPuzzle = PUZZLE_LOOKUP[phonesNum][puzzleNum][pieceNum];
    this.isAnimating = false;

    this.draw();
  }

  draw() {
    this.puzzle = this._drawPuzzle();
    this._drawScreenButton();
    this._drawOverlay();
  }

  _drawScreenButton() {
    const handleClick = "PuzzleScreen.handleClick()";
    this.elements.push(new ScreenButton(handleClick));
  }

  _drawOverlay() {
    this.overlay = new PuzzleOverlay();
    this.elements.push(this.overlay);
  }

  removeOverlay() {
    this.overlay.remove();
  }

  async redrawPuzzle() {
    this.overlay.remove();
    this.puzzle.remove();
    this.draw();
  }

  remove() {
    this.overlay.remove();
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
