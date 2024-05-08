var img1;

let p1= 'Love is rising\nNo resisting\nCheeks are flushing\nNow youre living'

function preload () {
  img1 = loadImage("jesus.jpg");
}

function setup() {
  createCanvas(990, 770);
      noStroke();
    noCursor();
}


function draw() {
  background(220);
  imageMode(CORNER); 
  image(img1, 0, 0);
  
   if(mouseX > 100 && mouseIsPressed)
       text(p1,50,20)
   textSize(30);
  textFont(`Courier`);
  fill('#FFC107');
  textAlign(LEFT,TOP);
  
      ellipse(mouseX, mouseY, 33, 33);
}
