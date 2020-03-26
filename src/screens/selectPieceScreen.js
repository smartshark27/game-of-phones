function drawSelectPieceScreen(props) {
  const puzzle = props.puzzle;
  const numberOfPhones = props.numberOfPhones;

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
  piece1Text.setAttribute("numberOfPhones", numberOfPhones);
  piece1Text.setAttribute("puzzle", puzzle);
  piece1Text.setAttribute("piece", "1");
  piece1Text.setAttribute("onclick", "handleSelectPieceClick(event)");

  const piece2Text = drawTextWithBackground(
    "piece2Text",
    "50%",
    "60%",
    "2",
    48,
    "piece2Background",
    "LightGreen"
  );
  piece2Text.setAttribute("numberOfPhones", numberOfPhones);
  piece2Text.setAttribute("puzzle", puzzle);
  piece2Text.setAttribute("piece", "2");
  piece2Text.setAttribute("onclick", "handleSelectPieceClick(event)");
}

function handleSelectPieceClick(event) {
  const clickedElement = event.target;
  const props = {
    numberOfPhones: clickedElement.getAttribute("numberOfPhones"),
    puzzle: clickedElement.getAttribute("puzzle"),
    piece: clickedElement.getAttribute("piece")
  };
  switchScreen("selectPiece", "puzzle", props);
}

function removeSelectPieceScreen() {
  removeElement("title");
  removeElement("piece1Background");
  removeElement("piece1Text");
  removeElement("piece2Background");
  removeElement("piece2Text");
}
