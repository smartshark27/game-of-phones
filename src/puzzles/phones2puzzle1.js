class Phones2Puzzle1 {
  constructor(piece) {
    this.WIDTH = 2000;
    this.HEIGHT = 1500;
    this.BALL_RADIUS = 100;
    this.BALL_SPEED = 20;

    this.xOffset = piece === "1" ? 0 : this.WIDTH - window.innerWidth;
    this.yOffset = (this.HEIGHT - window.innerHeight) / 2;

    this.draw();
  }

  draw() {
    drawRect(
      "background",
      -this.xOffset,
      -this.yOffset,
      this.WIDTH,
      this.HEIGHT,
      "LightBlue"
    );
    this._drawBall();
  }

  async animate() {
    const ball = getElement("ball");
    var velocityX = this.BALL_SPEED;
    var velocityY = this.BALL_SPEED;
    while (currentScreen.isAnimating) {
      await sleep(1000 / FPS);
      [velocityX, velocityY] = this._updateBallVelocity(
        ball,
        velocityX,
        velocityY
      );
      this._moveBall(ball, velocityX, velocityY);
    }
  }

  remove() {
    removeElement("background");
    removeElement("ball");
  }

  _drawBall() {
    const circleX = -this.xOffset + this.BALL_RADIUS;
    const circleY = window.innerHeight / 2;
    drawCircle("ball", circleX, circleY, this.BALL_RADIUS, "Black");
  }

  _updateBallVelocity(ball, velocityX, velocityY) {
    const ballBoundary = getCircleBoundary(ball);
    const background = getElement("background");
    const backgroundBoundary = getRectBoundary(background);

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
    ball.setAttribute("cx", x + velocityX);
    ball.setAttribute("cy", y + velocityY);
  }
}
