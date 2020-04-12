class Phones3Puzzle3 {
  constructor(piece) {
    this.WIDTH = 3000;
    this.HEIGHT = 2000;
    this.COLORS = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    this.GROW_SPEED = 2;

    this.elements = [];
    this.colorIndex = this.COLORS.length - 1;
    this.piece = piece;

    this._generateRandomNumber = generateRandomNumberFunction(seed);

    this.draw();
  }

  draw() {}

  startAnimation() {
    this.interval = setInterval(() => {
      this._maybeSpawnCircle();
      this._growCircles();
    }, FRAME_DELAY);
  }

  stopAnimation() {
    clearInterval(this.interval);
  }

  remove() {
    this.elements.forEach(element => element.remove());
  }

  _maybeSpawnCircle() {
    if (this._shouldSpawnCircle()) {
      this._spawnCircle();
    }
  }

  _shouldSpawnCircle() {
    const randomNumber = generateRandomNumberBetween(
      0,
      FPS,
      this._generateRandomNumber
    );
    return randomNumber === 0;
  }

  _spawnCircle() {
    const [x, y] = this._getCircleXY();

    const color = this._nextColor();
    this.elements.push(
      SVG.new("circle")
        .setAttribute("cx", x)
        .setAttribute("cy", y)
        .setAttribute("r", 50)
        .setAttribute("fill", color)
    );
    console.log("Spawned circle at x:", x, "y:", y, "fill:", color);
  }

  _getCircleXY() {
    const x = generateRandomNumberBetween(
      0,
      this.WIDTH,
      this._generateRandomNumber
    );
    const y = generateRandomNumberBetween(
      0,
      this.HEIGHT,
      this._generateRandomNumber
    );
    var pieceX, pieceY;
    if (this.piece === "1") {
      pieceX = y;
      pieceY = this.WIDTH - x;
    } else if (this.piece === "2") {
      pieceX = this.HEIGHT - y;
      pieceY = window.innerHeight - (this.WIDTH - x);
    } else if (this.piece === "3") {
      pieceX = x;
      pieceY = y - (this.HEIGHT - window.innerHeight) / 2;
    } else {
      throw "Invalid piece number: " + pieceNum
    }
    return [pieceX, pieceY];
  }

  _nextColor() {
    this.colorIndex = (this.colorIndex + 1) % this.COLORS.length;
    return this.COLORS[this.colorIndex];
  }

  _growCircles() {
    this.elements.forEach(circle => {
      if (!circle.isNull()) {
        this._growCircle(circle);
      }
    })
  }

  _growCircle(circle) {
    const radius = Number(circle.getAttribute("r"));
    const newRadius = radius + this.GROW_SPEED;
    circle.setAttribute("r", newRadius);
    if (newRadius >= this.WIDTH + this.HEIGHT) {
      circle.remove();
      console.log("Removed circle");
    }
  }
}
