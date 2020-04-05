// Number of phones:
//  Puzzle number:
//   Piece number:
const PUZZLE_LOOKUP = {
  "2": {
    "1": {
      "1": () => new Phones2Puzzle1("1"),
      "2": () => new Phones2Puzzle1("2")
    }
  },
  "3": {
    "1": {
      "1": () => new Phones3Puzzle1("1"),
      "2": () => new Phones3Puzzle1("2"),
      "3": () => new Phones3Puzzle1("3")
    }
  }
};
