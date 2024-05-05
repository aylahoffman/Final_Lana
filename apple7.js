var img1;

var p = ["Match the sun thats slowly sinking", "at the height of afternoon", "In the heat of summer evening", "Like a phoenix like a chem trail", "like a wavelength No ones claiming.",];

var index = 0;

function preload() {
img1 = loadImage("apple.jpg");
}

function setup() {
  createCanvas(1000,800);
}

function draw() {
  background(220);
    imageMode(CORNER); 
  image(img1, 0, 0); 
   textSize(25);
  fill('rgb(0,0,0)');
  textFont(`Courier`);
  text(p[index], width/2.4, height/7);
}
  
  function mousePressed (){
  index = index +1;
  if(index == text.length){
    index = 0;
  }
  }
