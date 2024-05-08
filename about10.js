var img1;

function preload () {
  img1 = loadImage("finalabout.png");
}


function setup() {
  createCanvas(930, 770);
        noStroke();
    noCursor();
}

function draw() {
  background(220, 10);
      background(220);
  imageMode(CORNER); 
  image(img1, 0, 0); 
  
      ellipse(mouseX, mouseY, 33, 33);
   fill('#FFC107')
}