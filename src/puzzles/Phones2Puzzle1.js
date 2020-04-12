class Phones2Puzzle1 {
  constructor(piece) {
    this.WIDTH = 2000;
    this.HEIGHT = 1500;
    this.BALL_RADIUS = 100;
    this.BALL_SPEED = 20;

    this.elements = [];
    this.xOffset = piece === "1" ? 0 : this.WIDTH - window.innerWidth;
    this.yOffset = (this.HEIGHT - window.innerHeight) / 2;

    this.draw();
  }

  draw() {
    this._drawBackground();
    this._drawBall();
  }

  startAnimation() {
    const ball = SVG.get("ball");
    var velocityX = this.BALL_SPEED;
    var velocityY = this.BALL_SPEED;

    this.interval = setInterval(() => {
      [velocityX, velocityY] = this._updateBallVelocity(
        ball,
        velocityX,
        velocityY
      );
      this._moveBall(ball, velocityX, velocityY);
    }, FRAME_DELAY);
  }

  stopAnimation() {
    clearInterval(this.interval);
  }

  remove() {
    this.elements.forEach(element => element.remove());
  }

  _drawBackground() {
    this.elements.push(
      SVG.new("rect")
        .setAttribute("id", "background")
        .setAttribute("x", -this.xOffset)
        .setAttribute("y", -this.yOffset)
        .setAttribute("width", this.WIDTH)
        .setAttribute("height", this.HEIGHT)
        .setAttribute("fill", COLORS.LIGHT_BLUE)
    );
  }

  _drawBall() {
    this.elements.push(
      SVG.new("circle")
        .setAttribute("id", "ball")
        .setAttribute("cx", -this.xOffset + this.BALL_RADIUS)
        .setAttribute("cy", window.innerHeight / 2)
        .setAttribute("r", this.BALL_RADIUS)
        .setAttribute("fill", COLORS.BLACK)
    );
  }

  _updateBallVelocity(ball, velocityX, velocityY) {
    const ballBoundary = ball.getBoundary();
    const background = SVG.get("background");
    const backgroundBoundary = background.getBoundary();

    if (ballBoundary.left <= backgroundBoundary.left) {
      velocityX = this.BALL_SPEED;
    } else if (ballBoundary.right >= backgroundBoundary.right) {
      velocityX = -this.BALL_SPEED;
    }

    if (ballBoundary.top <= backgroundBoundary.top) {
      velocityY = this.BALL_SPEED;
    } else if (ballBoundary.bottom >= backgroundBoundary.bottom) {
      velocityY = -this.BALL_SPEED;
    }

    return [velocityX, velocityY];
  }

  _moveBall(ball, velocityX, velocityY) {
    const x = Number(ball.getAttribute("cx"));
    const y = Number(ball.getAttribute("cy"));
    ball.setAttribute("cx", x + velocityX).setAttribute("cy", y + velocityY);
  }
}
