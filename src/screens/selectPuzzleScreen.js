class SelectPuzzleScreen {
  constructor(props) {
    this.numberOfPhones = props.numberOfPhones;

    this.draw();
  }

  draw() {
    drawText("title", "50%", "40%", "Select Puzzle", 64);
  
    const puzzle1Text = drawTextWithBackground(
      "puzzle1Text",
      "35%",
      "60%",
      "1",
      48,
      "puzzle1Background",
      "LightGreen"
    );
    puzzle1Text.setAttribute("numberOfPhones", this.numberOfPhones);
    puzzle1Text.setAttribute("puzzle", "1");
    puzzle1Text.setAttribute("onclick", "SelectPuzzleScreen._handleClick(event)");
  }

  remove() {
    removeElement("title");
    removeElement("puzzle1Background");
    removeElement("puzzle1Text");
  }
  
  static _handleClick(event) {
    const clickedElement = event.target;
    const props = {
      numberOfPhones: clickedElement.getAttribute("numberOfPhones"),
      puzzle: clickedElement.getAttribute("puzzle"),
    }
    switchScreenTo("selectPiece", props);
  }
}
