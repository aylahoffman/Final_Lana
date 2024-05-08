var img1; 

let string = `
I saw you in the mirror. 
You were wearing your hair differently,
carrying the air differently.
`;

let currentCharacter = 0;
let pageMargin = 25;

function preload() {
img1 = loadImage("maple!.jpg");
}

function setup() {
  createCanvas(1100,800);
  noStroke();
    noCursor();
}

function draw() {
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
}