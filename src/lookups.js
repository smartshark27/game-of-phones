const SCREEN_LOOKUP = {
  intro: () => new IntroScreen(),
  instructions: () => new InstructionsScreen(),
  menu: () => new MenuScreen(),
  phonesSelect: () => new PhonesSelectScreen(),
  puzzleSelect: () => new PuzzleSelectScreen(),
  pieceSelect: () => new PieceSelectScreen(),
  puzzle: () => new PuzzleScreen()
};

// Number of phones:
//  Puzzle number:
//   Piece number:
const PUZZLE_LOOKUP = {
  "2": {
    "1": {
      "1": () => new Phones2Puzzle1("1"),
      "2": () => new Phones2Puzzle1("2")
    },
    "2": {
      "1": () => new Phones2Puzzle2("1"),
      "2": () => new Phones2Puzzle2("2")
    },
    "3": {
      "1": () => new Phones2Puzzle3("1"),
      "2": () => new Phones2Puzzle3("2")
    }
  },
  "3": {
    "1": {
      "1": () => new Phones3Puzzle1("1"),
      "2": () => new Phones3Puzzle1("2"),
      "3": () => new Phones3Puzzle1("3")
    },
    "2": {
      "1": () => new Phones3Puzzle2("1"),
      "2": () => new Phones3Puzzle2("2"),
      "3": () => new Phones3Puzzle2("3")
    }
  }
};
