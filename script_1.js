let canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');
canvas.width = 4;
canvas.height = 4;
const pixels = [
  ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
  ["FFEB3B", "FFC107","FFC107","FFEB3B"],
  ["FFEB3B", "FFC107","FFC107","FFEB3B"],
  ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
];
const concat = (xs, ys) => xs.concat(ys);
const hexPixelsToRGBA = hex => [
  parseInt(hex.substr(0, 2), 16),
  parseInt(hex.substr(2, 2), 16),
  parseInt(hex.substr(4, 2), 16),
  255
];
const concatPixels = pixels
  .reduce(concat)
  .map(hexPixelsToRGBA)
  .reduce(concat);

let imgData = new ImageData (Uint8ClampedArray.from(concatPixels), 4, 4);

ctx.putImageData(imgData, 0, 0);