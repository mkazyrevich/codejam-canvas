let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let img = new Image();
img.src = "assets/images/image.png";
img.onload = function() {
  ctx.drawImage(img, 0, 0, 512, 512);
}