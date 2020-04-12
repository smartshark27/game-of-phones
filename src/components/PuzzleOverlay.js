class PuzzleOverlay {
  constructor() {
    this.elements = [];
    this.draw();
  }

  draw() {
    this._drawText();
    this._drawScreenButton();
    this._drawBackButton();
  }

  remove() {
    this.elements.forEach(element => element.remove());
  }

  _drawText() {
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "20%")
        .setAttribute("style", TEXT_STYLE.BODY.FONT)
        .setAttribute("font-size", TEXT_STYLE.BODY.SIZE)
        .setTextContent("Phones: " + phonesNum + ", Puzzle: " + puzzleNum)
    );
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "30%")
        .setAttribute("style", TEXT_STYLE.HEADING.FONT)
        .setAttribute("font-size", TEXT_STYLE.HEADING.SIZE)
        .setTextContent("This is Piece " + pieceNum)
    );
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "75%")
        .setAttribute("style", TEXT_STYLE.BODY.FONT)
        .setAttribute("font-size", TEXT_STYLE.BODY.SIZE)
        .setTextContent("Touch to start animation at the")
    );
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "80%")
        .setAttribute("style", TEXT_STYLE.BODY.FONT)
        .setAttribute("font-size", TEXT_STYLE.BODY.SIZE)
        .setTextContent("same time as everyone else")
    );
  }

  _drawScreenButton() {
    const handleClick = "PuzzleScreen.handleStoppedPuzzleClick()";
    this.elements.push(new ScreenButton(handleClick));
  }

  _drawBackButton() {
    const handleClick = "switchScreenTo(\"PIECE_SELECT\")";
    this.elements.push(new BackButton(handleClick));
  }
}
