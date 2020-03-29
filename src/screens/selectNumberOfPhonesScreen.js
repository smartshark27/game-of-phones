class SelectNumberOfPhonesScreen {
  constructor() {
    this.draw();
  }

  draw() {
    drawText("title", "50%", "40%", "Select Number of Phones", 64);

    const twoText = drawTextWithBackground(
      "twoText",
      "35%",
      "60%",
      "2",
      48,
      "twoBackground",
      "LightGreen"
    );
    twoText.setAttribute("numberOfPhones", "2");
    twoText.setAttribute(
      "onclick",
      "SelectNumberOfPhonesScreen.handleClick(event)"
    );
  }

  remove() {
    removeElement("title");
    removeElement("twoText");
    removeElement("twoBackground");
    removeElement("threeText");
    removeElement("threeBackground");
    removeElement("fourText");
    removeElement("fourBackground");
  }

  static handleClick(event) {
    const clickedElement = event.target;
    const props = {
      numberOfPhones: clickedElement.getAttribute("numberOfPhones")
    };
    switchScreenTo("selectPuzzle", props);
  }
}
