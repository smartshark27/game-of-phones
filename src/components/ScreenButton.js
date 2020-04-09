class ScreenButton {
  constructor(handleClick) {
    this.elements = [];
    this.handleClick = handleClick;
    this.draw();
  }

  draw() {
    this.elements.push(
      SVG.new("rect")
        .hide()
        .setAttribute("width", "100%")
        .setAttribute("height", "100%")
        .setAttribute("onclick", this.handleClick)
    );
  }

  remove() {
    this.elements.forEach(element => element.remove());
  }
}
