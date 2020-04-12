class PuzzleScreen {
  static puzzle = null;

  constructor() {
    this.elements = [];

    this._drawPuzzle = PUZZLE_LOOKUP[phonesNum][puzzleNum].DRAW;

    this.draw();
  }

  draw() {
    this.puzzle = this._drawPuzzle(pieceNum);
    this._drawOverlay();
  }

  _drawOverlay() {
    this.overlay = new PuzzleOverlay();
  }

  async redrawPuzzle() {
    this.puzzle.remove();
    this.draw();
  }

  remove() {
    this.puzzle.remove();
    this.overlay.remove();
    this.elements.forEach(element => element.remove());
  }

  static async handleStoppedPuzzleClick() {
    if (!currentScreen instanceof PuzzleScreen) {
      throw "Current screen is not an instance of PuzzleScreen";
    }

    currentScreen.overlay.remove();
    currentScreen.puzzle.startAnimation();
    await sleep(50);
    setCanvasOnclick("PuzzleScreen.handleRunningPuzzleClick()");
  }

  static handleRunningPuzzleClick() {
    if (!currentScreen instanceof PuzzleScreen) {
      throw "Current screen is not an instance of PuzzleScreen";
    }

    currentScreen.puzzle.stopAnimation();
    removeCanvasOnclick();
    currentScreen.redrawPuzzle();
  }
}
