const SCREEN_LOOKUP = {
  INTRO: () => new IntroScreen(),
  INSTRUCTIONS: () => new InstructionsScreen(),
  MENU: () => new MenuScreen(),
  PHONES_SELECT: () => new PhonesSelectScreen(),
  PUZZLE_SELECT: () => new PuzzleSelectScreen(),
  PIECE_SELECT: () => new PieceSelectScreen(),
  PUZZLE: () => new PuzzleScreen()
};

const PUZZLE_LOOKUP = {
  "2": {
    "1": {
      DRAW: (piece) => new Phones2Puzzle1(piece),
      DIFFICULTY: "EASY"
    },
    "2": {
      DRAW: (piece) => new Phones2Puzzle2(piece),
      DIFFICULTY: "EASY"
    },
    "3": {
      DRAW: (piece) => new Phones2Puzzle3(piece),
      DIFFICULTY: "INTERMEDIATE"
    }
  },
  "3": {
    "1": {
      DRAW: (piece) => new Phones3Puzzle1(piece),
      DIFFICULTY: "EASY"
    },
    "2": {
      DRAW: (piece) => new Phones3Puzzle2(piece),
      DIFFICULTY: "EASY"
    },
    "3": {
      DRAW: (piece) => new Phones3Puzzle3(piece),
      DIFFICULTY: "INTERMEDIATE"
    }
  }
};