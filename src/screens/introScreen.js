var introScreenShowing = false;

function drawIntroScreen() {
  drawText("introScreenTitle", "50%", "40%", "Game of Phones", 96);
  drawText("introScreenMessage", "50%", "60%", "Touch to proceed", 48);
  introScreenShowing = true;
}

function removeIntroScreen() {
  removeElement("introScreenTitle");
  removeElement("introScreenMessage");
  introScreenShowing = false;
}
