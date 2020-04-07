const FPS = 60;
const FRAME_DELAY = Math.floor(1000 / FPS);

const FONT_SIZE_TITLE = 96;
const FONT_STYLE_TITLE = "font-family: 'Spartan', sans-serif; font-weight: 700";
const FONT_SIZE_HEADING = 72;
const FONT_STYLE_HEADING = "font-family: 'Spartan', sans-serif; font-weight: 700";
const FONT_SIZE_BODY = 42;
const FONT_STYLE_BODY = "font-family: 'Spartan', sans-serif; font-weight: 400";

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
