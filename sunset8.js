var img1; 

let string = `
Georgia o keefe, 
georgia peaches, 
doing nothing but your painting
For forever.
Forget teachers, 
forgive him for ever leaving.
`;

let currentCharacter = 0;
let pageMargin = 25;

function preload() {
img1 = loadImage("sunset.png");
}

function setup() {
  createCanvas(1000, 770);
      noStroke();
    noCursor();
}

function draw() {
  background(220);
      imageMode(CORNER); 
  image(img1, 0, 0); 
       let currentString = string.substring(0, currentCharacter);
  
  push();
  fill(0, 0, 0, 0); 
  noStroke();
  rect(pageMargin, pageMargin, width - pageMargin*2, height - pageMargin);
  pop();

  push();
  textSize(30);
  textFont(`Courier`);
  fill('#FFC107');
  textAlign(CENTER, CENTER);
  text(currentString, pageMargin + 10, pageMargin + 10, width - pageMargin*2, height - pageMargin);
  pop();
  
  currentCharacter += 0.3;
  
    ellipse(mouseX, mouseY, 33, 33);
   fill('#FFC107')

}