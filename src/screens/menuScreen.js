function drawMenuScreen() {
  drawText("menuScreenTitle", "50%", "35%", "Game of Phones", 64);
  drawMenuPlay();
  drawMenuInstructions();
}

function drawMenuPlay() {
  const text = drawTextWithBackground(
    "menuPlayText",
    "50%",
    "50%",
    "Play",
    48,
    "menuPlayBackground",
    "LightGreen"
  );
  text.setAttribute("onclick", "handleMenuPlayClick()");
}

function handleMenuPlayClick() {
  switchScreen("menu", "selectNumberOfPhones");
}

function drawMenuInstructions() {
  const text = drawTextWithBackground(
    "menuInstructionsText",
    "50%",
    "65%",
    "Instructions",
    48,
    "menuInstructionsBackground",
    "LightBlue"
  );
  text.setAttribute("onclick", "handleMenuInstructionsClick()");
}

function handleMenuInstructionsClick() {
  switchScreen("menu", "instructions");
}

function removeMenuScreen() {
  removeElement("menuScreenTitle");
  removeElement("menuPlayBackground");
  removeElement("menuPlayText");
  removeElement("menuInstructionsBackground");
  removeElement("menuInstructionsText");
}
