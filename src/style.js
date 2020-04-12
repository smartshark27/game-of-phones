const COLORS = {
  BLACK: "Black",
  LIGHT_RED: "#ff7575",
  LIGHT_ORANGE: "#ffb575",
  LIGHT_YELLOW: "#fffa75",
  LIGHT_GREEN: "#5be851",
  LIGHT_BLUE: "#75ccff",
  LIGHT_INDIGO: "#7a59ff",
  LIGHT_VIOLET: "#bf59ff"
};

const FONTS = {
  SPARTAN: "font-family: 'Spartan', sans-serif; font-weight: 400",
  SPARTAN_BOLD: "font-family: 'Spartan', sans-serif; font-weight: 700"
}

const TEXT_STYLE = {
  TITLE: {
    FONT: FONTS.SPARTAN_BOLD,
    SIZE: 96
  },
  HEADING: {
    FONT: FONTS.SPARTAN_BOLD,
    SIZE: 72
  },
  BODY: {
    FONT: FONTS.SPARTAN,
    SIZE: 42
  }
}

const DIFFICULTY_COLORS = {
  EASY: COLORS.LIGHT_GREEN,
  INTERMEDIATE: COLORS.LIGHT_ORANGE,
  HARD: COLORS.LIGHT_RED
}