const RANDOM_SEED = "kentucky fried chicken";
const FPS = 60;
const FRAME_DELAY = Math.floor(1000 / FPS);

var currentScreen;
var seed;
var phonesNum;
var puzzleNum;
var pieceNum;

function handleLoad() {
  currentScreen = new IntroScreen();
  seed = generateSeed(RANDOM_SEED);
}

async function switchScreenTo(screenName) {
  currentScreen.remove();
  await sleep(100);
  try {
    currentScreen = SCREEN_LOOKUP[screenName]();
  } catch(error) {
    console.log(error);
    throw "Could not switch to screen: " + screenName;
  }
}

function setCanvasOnclick(handleClick) {
  const canvas = document.getElementById("canvas");
  canvas.setAttribute("onclick", handleClick);
}

function removeCanvasOnclick() {
  document.getElementById("canvas").removeAttribute("onclick");
}