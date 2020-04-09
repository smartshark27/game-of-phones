class BackButton {
  constructor(handleClick) {
    this.elements = [];
    this.handleClick = handleClick;
    this.draw();
  }

  draw() {
    const rectX = 50;
    const rectY = 50;
    const rectWidth = 150;
    const rectHeight = 100;

    this.elements.push(
      SVG.new("rect")
        .setAttribute("x", rectX)
        .setAttribute("y", rectY)
        .setAttribute("width", rectWidth)
        .setAttribute("height", rectHeight)
        .setAttribute("fill", "#ff9696")
        .setAttribute("onclick", this.handleClick)
    );

    this.elements.push(
      SVG.new("text")
        .setAttribute("dominant-baseline", "middle")
        .setAttribute("text-anchor", "middle")
        .setAttribute("x", rectX + rectWidth / 2)
        .setAttribute("y", rectY + rectHeight / 2)
        .setAttribute("style", FONT_STYLE_BODY)
        .setAttribute("font-size", FONT_SIZE_BODY)
        .setTextContent("Back")
        .setAttribute("onclick", this.handleClick)
    );
  }

  remove() {
    this.elements.forEach(element => element.remove());
  }
}
