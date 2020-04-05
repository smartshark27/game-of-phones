class SelectPieceScreen {
  constructor(props) {
    this.elements = [];
    this.numberOfPhones = props.numberOfPhones;
    this.puzzle = props.puzzle;

    this.draw();
  }

  draw() {
    this._drawTitle();
    this._drawTextButton("35%", "1");
    this._drawTextButton("50%", "2");
  }

  remove() {
    this.elements.forEach(element => element.remove());
  }

  static handleClick(event) {
    const clickedElement = event.target;
    const props = {
      numberOfPhones: clickedElement.getAttribute("numberOfPhones"),
      puzzle: clickedElement.getAttribute("puzzle"),
      piece: clickedElement.getAttribute("piece")
    };
    switchScreenTo("puzzle", props);
  }

  _drawTitle() {
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "40%")
        .setAttribute("font-size", 64)
        .setTextContent("Select Piece")
    );
  }

  _drawTextButton(x, text) {
    const tempText = SVG.new("text")
      .setAttribute("dominant-baseline", "middle")
      .setAttribute("text-anchor", "middle")
      .setAttribute("x", x)
      .setAttribute("y", "60%")
      .setAttribute("font-size", 48)
      .setTextContent(text);
    const textBoundary = tempText.getBBox();
    tempText.remove();

    this.elements.push(
      SVG.new("rect")
        .setAttribute("x", textBoundary.x - 40)
        .setAttribute("y", textBoundary.y - 20)
        .setAttribute("width", textBoundary.width + 80)
        .setAttribute("height", textBoundary.height + 40)
        .setAttribute("fill", "LightGreen")
        .setAttribute("onclick", "SelectPieceScreen.handleClick(event)")
        .setAttribute("numberOfPhones", this.numberOfPhones)
        .setAttribute("puzzle", this.puzzle)
        .setAttribute("piece", text)
    );
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", x)
        .setAttribute("y", "60%")
        .setAttribute("font-size", 48)
        .setTextContent(text)
        .setAttribute("onclick", "SelectPieceScreen.handleClick(event)")
        .setAttribute("numberOfPhones", this.numberOfPhones)
        .setAttribute("puzzle", this.puzzle)
        .setAttribute("piece", text)
    );
  }
}
