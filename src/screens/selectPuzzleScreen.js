function drawSelectPuzzleScreen(props) {
  const numberOfPhones = props.numberOfPhones;

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
  puzzle1Text.setAttribute("numberOfPhones", numberOfPhones);
  puzzle1Text.setAttribute("puzzle", "1");
  puzzle1Text.setAttribute("onclick", "handleSelectPuzzleClick(event)");
}

function handleSelectPuzzleClick(event) {
  const clickedElement = event.target;
  const props = {
    numberOfPhones: clickedElement.getAttribute("numberOfPhones"),
    puzzle: clickedElement.getAttribute("puzzle"),
  }
  switchScreen("selectPuzzle", "selectPiece", props);
}

function removeSelectPuzzleScreen() {
  removeElement("title");
  removeElement("puzzle1Background");
  removeElement("puzzle1Text");
}
