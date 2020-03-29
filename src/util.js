function fitToScreen(rectID) {
  const rect = getElement(rectID);
  const width = window.innerWidth;
  const height = window.innerHeight;
  rect.setAttribute("width", width);
  rect.setAttribute("height", height);
}

function getElement(id) {
  return document.getElementById(id);
}

function drawRect(id, x, y, width, height, fill) {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("id", id);
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("width", width);
  rect.setAttribute("height", height);
  rect.setAttribute("fill", fill);
  getElement("canvas").appendChild(rect);
  return rect;
}

function drawCircle(id, x, y, r, fill) {
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("id", id);
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", r);
  circle.setAttribute("fill", fill);
  getElement("canvas").appendChild(circle);
  return circle;
}

function drawText(id, x, y, content, size) {
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");

  text.setAttribute("id", id);
  text.setAttribute("dominant-baseline", "middle");
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("x", x);
  text.setAttribute("y", y);
  text.setAttribute("font-size", size);
  getElement("canvas").appendChild(text);
  text.textContent = content;
  return text;
}

function drawTextWithBackground(
  textID,
  textX,
  textY,
  textContent,
  textSize,
  backgroundID,
  fill
) {
  const tempText = drawText(textID, textX, textY, textContent, textSize);
  const textBoundary = tempText.getBBox();
  const backgroundX = textBoundary.x - 40;
  const backgroundY = textBoundary.y - 20;
  const backgroundWidth = textBoundary.width + 80;
  const backgroundHeight = textBoundary.height + 40;
  removeElement(textID);
  drawRect(
    backgroundID,
    backgroundX,
    backgroundY,
    backgroundWidth,
    backgroundHeight,
    fill
  );
  return drawText(textID, textX, textY, textContent, textSize);
}

function removeElement(id) {
  const element = getElement(id);
  if (element) {
    element.remove();
  }
}

function removeElement(id) {
  const element = getElement(id);
  if (element) {
    element.remove();
  }
}

function calculateVelocity(x, y, targetX, targetY) {
  const displacementX = x - targetX;
  const displacementY = y - targetY;
  const angle = Math.atan(displacementY / displacementX);
  const speedX = Math.cos(angle) * STEP_DISTANCE;
  const speedY = Math.sin(angle) * STEP_DISTANCE;
  const velocityX = targetX >= x ? speedX : -speedX;
  const velocityY = targetX >= x ? speedY : -speedY;
  return [velocityX, velocityY];
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function clearArray(arr) {
  arr.length = 0;
}

function getRectBoundary(rect) {
  return {
    left: Number(rect.getAttribute("x")),
    right: Number(rect.getAttribute("x")) + Number(rect.getAttribute("width")),
    top: Number(rect.getAttribute("y")),
    bottom: Number(rect.getAttribute("y")) + Number(rect.getAttribute("height"))
  };
}

function getCircleBoundary(circle) {
  const x = Number(circle.getAttribute("cx"));
  const y = Number(circle.getAttribute("cy"));
  const radius = Number(circle.getAttribute("r"));

  return {
    left: x - radius,
    right: x + radius,
    top: y - radius,
    bottom: y + radius
  };
}

function print(text) {
  console.log(text);
}