const FPS = 60;

var currentScreen;

function handleLoad() {
  currentScreen = new IntroScreen();
}

function handleCanvasClick() {
  if (currentScreen instanceof IntroScreen) {
    switchScreenTo("instructions");
  } else if (currentScreen instanceof InstructionsScreen) {
    switchScreenTo("menu");
  } else if (currentScreen instanceof PuzzleScreen) {
    PuzzleScreen.handleClick();
  }
}

async function switchScreenTo(screenName, props) {
  currentScreen.remove();
  await sleep(100);

  if (screenName === "intro") {
    currentScreen = new IntroScreen();
  } else if (screenName === "instructions") {
    currentScreen = new InstructionsScreen();
  } else if (screenName === "menu") {
    currentScreen = new MenuScreen();
  } else if (screenName === "selectPhones") {
    currentScreen = new SelectPhonesScreen();
  } else if (screenName === "selectPuzzle") {
    currentScreen = new SelectPuzzleScreen(props);
  } else if (screenName === "selectPiece") {
    currentScreen = new SelectPieceScreen(props);
  } else if (screenName === "puzzle") {
    currentScreen = new PuzzleScreen(props);
  } else {
    console.log(`Could not switch to screen ${screenName} because it is not an option`);
  }
}
