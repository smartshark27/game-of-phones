var instructionsScreenShowing = false;

function drawInstructionsScreen() {
    drawText("instructionsScreenTitle", "50%", "15%", "Instructions", 64);
    drawText("instructionsScreenText1", "50%", "25%", "1) Turn off device rotation.", 36);
    drawText("instructionsScreenText2", "50%", "35%", "2) Play with friends with phones.", 36);
    drawText("instructionsScreenText3", "50%", "45%", "3) All start the same level.", 36);
    drawText("instructionsScreenText4", "50%", "55%", "4) All choose a different piece.", 36);
    drawText("instructionsScreenText5", "50%", "65%", "5) Tap all screens at the same time.", 36);
    drawText("instructionsScreenText6", "50%", "75%", "6) Place phones on a surface correctly.", 36);
    drawText("instructionsScreenText7", "50%", "85%", "7) Move on to the next puzzle.", 36);
    instructionsScreenShowing = true;
}

function removeInstructionsScreen() {
    removeElement("instructionsScreenTitle");
    removeElement("instructionsScreenText1");
    removeElement("instructionsScreenText2");
    removeElement("instructionsScreenText3");
    removeElement("instructionsScreenText4");
    removeElement("instructionsScreenText5");
    removeElement("instructionsScreenText6");
    removeElement("instructionsScreenText7");
    instructionsScreenShowing = false;
}
