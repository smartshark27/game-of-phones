const WIDTH = 2500;
const HEIGHT = 2000;
const BALL_RADIUS = 50;
const BALL_SPEED = 5;

function drawPhones2Puzzle1(piece) {
  xOffset = piece === "1" ? 0 : WIDTH - window.innerWidth;
  yOffset = (HEIGHT - window.innerHeight) / 2;

  drawRect("background", -xOffset, -yOffset, WIDTH, HEIGHT, "LightBlue");
  drawBall(xOffset, yOffset);
}

function drawBall(xOffset, yOffset) {
  const circleX = -xOffset + BALL_RADIUS;
  const circleY = window.innerHeight / 2;
  drawCircle("ball", circleX, circleY, BALL_RADIUS, "Black");
}

async function animatePhones2Puzzle1() {
  const ball = getElement("ball");
  var velocityX = BALL_SPEED;
  var velocityY = BALL_SPEED;
  while (puzzleRunning) {
    await sleep(1000 / FPS);
    [velocityX, velocityY] = updateVelocity(ball, velocityX, velocityY);
    move(ball, velocityX, velocityY);
  }
}

function updateVelocity(ball, velocityX, velocityY) {
  const ballBoundary = getCircleBoundary(ball);
  const background = getElement("background");
  const backgroudBoundary = getRectBoundary(background);

  if (ballBoundary.left <= backgroudBoundary.left) {
    velocityX = BALL_SPEED;
  } else if (ballBoundary.right >= backgroudBoundary.right) {
    velocityX = -BALL_SPEED;
  }

  if (ballBoundary.top <= backgroudBoundary.top) {
    velocityY = BALL_SPEED;
  } else if (ballBoundary.bottom >= backgroudBoundary.bottom) {
    velocityY = -BALL_SPEED;
  }

  return [velocityX, velocityY];
}

function move(ball, velocityX, velocityY) {
  const x = Number(ball.getAttribute("cx"));
  const y = Number(ball.getAttribute("cy"));
  ball.setAttribute("cx", x + velocityX);
  ball.setAttribute("cy", y + velocityY);
}

function removePhones2Puzzle1() {
  removeElement("background");
  removeElement("ball");
}
