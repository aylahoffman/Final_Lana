let img1
let img2
let fade = 0;
let scenenum = 0;
var poetry = ["You see, I'm a real poet.", "Past The Cypress Through The Bushes"];

var index = 0;

function preload(){
  img1 = loadImage("flowers.jpg");
  img2 = loadImage("lemons.png");
}
function setup() {
  createCanvas(950,750);
    noStroke();
    noCursor();
}

function draw() {
   if (scenenum == 0) {
    // last image behind
    tint(0);
    image(img2, 0, 0);
    // current image fading in
    tint(255, fade);
    image(img1, 0, 0);
  } else if (scenenum == 1) {
    // last image behind
    tint(255);
    image(img1, 0, 0);
    // current image fading in
    tint(255, fade);
    image(img2, 0, 0);
      ellipse(mouseX, mouseY, 33, 33);
  }

  // update the fading
  if (fade < 255)
    fade++; // change this to fade+=2, 3, etc to increase speed
}

function mousePressed() {
  scenenum++;
  
  // start to fade an image in when you click
  fade = 0;
  if (scenenum > 3) {
    scenenum = 0
  }

background('220');
    ellipse(mouseX, mouseY, 303, 303);
    imageMode(CORNER); 
  image(img1, 0, 0); 
  
    textAlign(CENTER, CENTER)
  textSize(35);
 textFont(`Courier`);
  fill('white');
  text(poetry[index], width/2.4, height/2);
  
    push();
  fill(255);
  noStroke();
  
   index = index +1;
  if(index == poetry.length){
    index = 0;
}

}

// function mousePressed (){
//   index = index +1;
//   if(index == poetry.length){
//     index = 0;
// }
// }

