var img1; 
let font;
let str = "Long beach, aimless.";

function preload() {
img1 = loadImage("bridge.jpg"); 
}

function setup() {
  createCanvas(940, 695);
  noCursor();
}


function draw() {
  background(220);
  imageMode(CORNER); 
  image(img1, 0, 0);
  
   textFont('Courier');
   fill('#FFC107');
  textSize(40);
  // text("Long beach, aimless", mouseX, mouseY);
  //let t = str.substr(random(str, length), 1);
  text(str, mouseX, mouseY);
}