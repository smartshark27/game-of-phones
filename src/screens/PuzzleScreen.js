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
    this._drawOverlay();
  }

  _drawOverlay() {
    this._drawBackButton();
    this._drawText();
  }

  _drawBackButton() {
    this.elements.push(new BackButton());
  }

  _drawText() {
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "20%")
        .setAttribute("style", FONT_STYLE_BODY)
        .setAttribute("font-size", FONT_SIZE_BODY)
        .setTextContent("Phones: " + phonesNum + ", Puzzle: " + puzzleNum)
    );
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "30%")
        .setAttribute("style", FONT_STYLE_HEADING)
        .setAttribute("font-size", FONT_SIZE_HEADING)
        .setTextContent("This is piece " + pieceNum)
    );
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "75%")
        .setAttribute("style", FONT_STYLE_BODY)
        .setAttribute("font-size", FONT_SIZE_BODY)
        .setTextContent("Touch to start animation at the")
    );
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "80%")
        .setAttribute("style", FONT_STYLE_BODY)
        .setAttribute("font-size", FONT_SIZE_BODY)
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
