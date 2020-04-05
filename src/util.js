function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function clearArray(arr) {
  arr.length = 0;
}

function print(...text) {
  console.log(...text);
}

function generatePositionsBetween(number, from = 0, to = 100) {
  const separation = (to - from) / (number - 1);
  const positions = [];
  for (var i = from; i <= to; i += separation) {
    positions.push(Math.floor(i).toString() + "%");
  }
  return positions;
}
