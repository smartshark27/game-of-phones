function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function clearArray(arr) {
  arr.length = 0;
}

function print(...text) {
  console.log(...text);
}
