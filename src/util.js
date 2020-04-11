function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function clearArray(arr) {
  arr.length = 0;
}

function generatePositionsBetween(number, from = 0, to = 100) {
  const separation = (to - from) / (number - 1);
  const positions = [];
  for (var i = from; i <= to; i += separation) {
    positions.push(Math.floor(i).toString() + "%");
  }
  return positions;
}

function generateRandomNumberBetween(
  min,
  max,
  generateRandomNumber = Math.random
) {
  return Math.floor(generateRandomNumber() * max) + min;
}

// xmur3 from https://stackoverflow.com/a/47593316
function generateSeed(str) {
  for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++) {
    (h = Math.imul(h ^ str.charCodeAt(i), 3432918353)),
      (h = (h << 13) | (h >>> 19));
  }

  h = Math.imul(h ^ (h >>> 16), 2246822507);
  h = Math.imul(h ^ (h >>> 13), 3266489909);
  return (h ^= h >>> 16) >>> 0;
}

// mulberry32 algorithm from https://stackoverflow.com/a/47593316
function generateRandomNumberFunction(seed) {
  return function() {
    var t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
