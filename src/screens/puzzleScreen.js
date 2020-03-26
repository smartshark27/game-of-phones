var puzzleScreenShowing = false;
var puzzleRunning = false;

function drawPuzzleScreen(props) {
  const numberOfPhones = props.numberOfPhones;
  const puzzle = props.puzzle;
  const piece = props.piece;

  const puzzleName = "phones" + numberOfPhones + "puzzle" + puzzle;

  if (puzzleName === "phones2puzzle1") {
    drawPhones2Puzzle1(piece);
  }
  
  puzzleScreenShowing = true;
}

function handlePuzzleScreenClick() {
  if (!puzzleRunning) {
    puzzleRunning = true;
    animatePhones2Puzzle1();
  } else {
    puzzleRunning = false;
    const props = {
      numberOfPhones: "2",
      puzzle: "1",
      piece: "1"
    };
    redrawScreen("puzzle", props);
  }
}

function removePuzzleScreen() {
  removePhones2Puzzle1();
  puzzleScreenShowing = false;
}
