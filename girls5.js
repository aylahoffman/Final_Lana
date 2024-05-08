var img1; 

let p1= 'with a reason\nStared with venom at the ceiling\nnot the grass\nbut straight ahead\nJust At the skyline\nwith precision\nlaser vision'

function preload() {
img1 = loadImage("girls.jpg");
}

function setup() {
  createCanvas(925,740);
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