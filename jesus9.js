let font;
let str = "abcdefg";

var img1;

// function preload() {
//   font = loadfont('Sen');
// }

function preload () {
  img1 = loadImage("jesus.jpg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {


  textFont('Sen');
  textSize(150);
  // text("B", mouseX, mouseY);
  let t = str.substr(random(str, length), 1);
  text(t, mouseX, mouseY);
}
