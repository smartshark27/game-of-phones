class SelectNumberOfPhonesScreen {
  constructor() {
    this.elements = [];
    this.draw();
  }

  draw() {
    this._drawTitle();
    this._drawTextButton("35%", "2");
  }

  remove() {
    this.elements.forEach(element => element.remove());
  }

  static handleClick(event) {
    const clickedElement = event.target;
    const props = {
      numberOfPhones: clickedElement.getAttribute("numberOfPhones")
    };
    switchScreenTo("selectPuzzle", props);
  }

  _drawTitle() {
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", "50%")
        .setAttribute("y", "40%")
        .setAttribute("font-size", 64)
        .setTextContent("Select Number of Phones")
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
    );
    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", x)
        .setAttribute("y", "60%")
        .setAttribute("font-size", 48)
        .setTextContent(text)
        .setAttribute("onclick", "SelectNumberOfPhonesScreen.handleClick(event)")
        .setAttribute("numberOfPhones", text)
    );
  }
}
