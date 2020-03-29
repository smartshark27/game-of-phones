class SelectPieceScreen {
  constructor(props) {
    this.puzzle = props.puzzle;
    this.numberOfPhones = props.numberOfPhones;

    this.draw();
  }

  draw() {
    drawText("title", "50%", "40%", "Select Piece", 64);
  
    const piece1Text = drawTextWithBackground(
      "piece1Text",
      "35%",
      "60%",
      "1",
      48,
      "piece1Background",
      "LightGreen"
    );
    piece1Text.setAttribute("numberOfPhones", this.numberOfPhones);
    piece1Text.setAttribute("puzzle", this.puzzle);
    piece1Text.setAttribute("piece", "1");
    piece1Text.setAttribute("onclick", "SelectPieceScreen.handleClick(event)");
  
    const piece2Text = drawTextWithBackground(
      "piece2Text",
      "50%",
      "60%",
      "2",
      48,
      "piece2Background",
      "LightGreen"
    );
    piece2Text.setAttribute("numberOfPhones", this.numberOfPhones);
    piece2Text.setAttribute("puzzle", this.puzzle);
    piece2Text.setAttribute("piece", "2");
    piece2Text.setAttribute("onclick", "SelectPieceScreen.handleClick(event)");
  }

  remove() {
    removeElement("title");
    removeElement("piece1Background");
    removeElement("piece1Text");
    removeElement("piece2Background");
    removeElement("piece2Text");
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
}
