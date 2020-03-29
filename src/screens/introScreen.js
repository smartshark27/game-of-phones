class IntroScreen {
  constructor() {
    this.draw();
  }

  draw() {
    drawText("introScreenTitle", "50%", "40%", "Game of Phones", 96);
    drawText("introScreenMessage", "50%", "60%", "Touch to proceed", 48);
  }

  remove() {
    removeElement("introScreenTitle");
    removeElement("introScreenMessage");
  }
}
