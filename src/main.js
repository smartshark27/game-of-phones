const FPS = 60;

function handleLoad() {
  fitToScreen("canvas");
  drawIntroScreen();
}

function handleCanvasClick() {
  if (introScreenShowing) {
    switchScreen("intro", "instructions");
  } else if (instructionsScreenShowing) {
    switchScreen("instructions", "menu");
  } else if (puzzleScreenShowing) {
    handlePuzzleScreenClick();
  }
}

async function switchScreen(from, to, props) {
  if (from === "intro") {
    removeIntroScreen();
  } else if (from === "instructions") {
    removeInstructionsScreen();
  } else if (from === "menu") {
    removeMenuScreen();
  } else if (from === "selectNumberOfPhones") {
    removeSelectNumberOfPhonesScreen();
  } else if (from === "selectPuzzle") {
    removeSelectPuzzleScreen();
  } else if (from === "selectPiece") {
    removeSelectPieceScreen();
  } else if (from === "puzzle") {
    removePuzzleScreen();
  } else {
    console.log(`Could not clear screen ${from}`);
  }
  await sleep(100);
  if (to === "intro") {
    drawIntroScreen();
  } else if (to === "instructions") {
    drawInstructionsScreen();
  } else if (to === "menu") {
    drawMenuScreen();
  } else if (to === "selectNumberOfPhones") {
    drawSelectNumberOfPhonesScreen();
  } else if (to === "selectPuzzle") {
    drawSelectPuzzleScreen(props);
  } else if (to === "selectPiece") {
    drawSelectPieceScreen(props);
  } else if (to === "puzzle") {
    drawPuzzleScreen(props);
  }  else {
    console.log(`Could not draw screen ${to}`);
  }
}

function redrawScreen(current, props) {
  switchScreen(current, current, props);
}