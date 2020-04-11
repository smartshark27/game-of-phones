const FPS = 60;
const FRAME_DELAY = Math.floor(1000 / FPS);

const FONT_SIZE_TITLE = 96;
const FONT_STYLE_TITLE = "font-family: 'Spartan', sans-serif; font-weight: 700";
const FONT_SIZE_HEADING = 72;
const FONT_STYLE_HEADING =
  "font-family: 'Spartan', sans-serif; font-weight: 700";
const FONT_SIZE_BODY = 42;
const FONT_STYLE_BODY = "font-family: 'Spartan', sans-serif; font-weight: 400";
const RANDOM_SEED = "kentucky fried chicken";

var currentScreen;
var seed;
var phonesNum;
var puzzleNum;
var pieceNum;

function handleLoad() {
  currentScreen = new IntroScreen();
  seed = generateSeed(RANDOM_SEED);
  console.log("Width:", window.innerWidth, "Height:", window.innerHeight);
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