class InstructionsScreen {
  constructor() {
    this.draw();
  }

  draw() {
    drawText("title", "50%", "15%", "Instructions", 64);
    drawText(
      "text1",
      "50%",
      "25%",
      "1) Turn off device rotation.",
      36
    );
    drawText(
      "text2",
      "50%",
      "35%",
      "2) Play with friends with phones.",
      36
    );
    drawText(
      "text3",
      "50%",
      "45%",
      "3) All start the same level.",
      36
    );
    drawText(
      "text4",
      "50%",
      "55%",
      "4) All choose a different piece.",
      36
    );
    drawText(
      "text5",
      "50%",
      "65%",
      "5) Tap all screens at the same time.",
      36
    );
    drawText(
      "text6",
      "50%",
      "75%",
      "6) Place phones on a surface correctly.",
      36
    );
    drawText(
      "text7",
      "50%",
      "85%",
      "7) Move on to the next puzzle.",
      36
    );
  }

  remove() {
    removeElement("title");
    removeElement("text1");
    removeElement("text2");
    removeElement("text3");
    removeElement("text4");
    removeElement("text5");
    removeElement("text6");
    removeElement("text7");
  }
}
