/**
 * Project 1 - Interactive Image
 * Name: Madison Mizon;
    Completion date ______;
    Basic description of the image: a possum;
    Basic description of user interactions to expect;
    Citations of any code sources used for reference: I googled the color codes for all the colors I used. Also used the textbook;
    */

// Global Variables go here

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas

}

function draw(){
  // this function runs again and again (60x per second)
  background(200); //light gray background

  possum(x, y, d, r); // call the possum() function (see below)
  
  // add your image drawing code here
  

/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
  if(mouseIsPressed){
    fill(255, 127, 127) // pink
    triangle(228, 103, 230, 121, 234, 110) //mouth//check each frame to see if the mouse is pressed, then do something
  } 
}

/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed(){
  
  // add code here if you want something to execute once each time the mouse is pressed
}


function possum(tempX, tempY, tempD, tempR){
  let r = tempR; // rotation value
  let d = tempD; // diameter 

  push(); // create a layer
  translate(tempX, tempY); // use the first two arguments to determing location
  rotate(r);

  //drawing: 
  fill(228, 228, 228) //grey for body
  ellipse(200, 100, 80, 40) //body
  fill(250) //back to white

  //face
  triangle(220, 90, 243, 85, 240, 120) //face
  fill(0) //black eyes
  ellipse (238, 95, 3) //eyes
  ellipse (230, 96, 3)
  fill(255, 192, 203) // pink
  ellipse (240, 118, 5) //nose
  arc(223, 90, 8, 20, PI, TWO_PI) //ears
  arc(238, 88, 8, 20, PI, TWO_PI)

  //tail and legs
  fill(200) //grey tail
  arc(142, 96, 40, 25, TWO_PI, PI) //tail
  fill(250) //back to white
  rect(173, 112, 7, 21) //legs
  rect(185, 120, 7, 10)
  rect(220, 117, 7, 10)
  rect(204, 113, 7, 20)

  pop(); // dispose of the layer
}