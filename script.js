/**
 * Project 1 - Interactive Image
 * Name: 
 * Comments: 
 */

// Global Variables go here

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas

}

function draw(){
  // this function runs again and again (60x per second)
  background(200); //light gray background
  
  // add your image drawing code here
  fill(228, 228, 228) //grey for body
  ellipse(200, 100, 80, 40) //body
  fill(250) //back to white
  triangle(220, 90, 243, 85, 240, 120) //face
  fill(0) //black eyes
  ellipse (238, 95, 3) //eyes
  ellipse (230, 96, 3)
  fill(255, 192, 203) // pink
  ellipse (240, 118, 5) //nose
  arc(223, 90, 8, 20, PI, TWO_PI) //ears
  arc(238, 88, 8, 20, PI, TWO_PI)
  fill(200) //grey tail
  arc(142, 96, 40, 25, TWO_PI, PI) //tail
  fill(250) //back to white
  rect(173, 112, 7, 21) //legs
  rect(185, 120, 7, 10)
  rect(220, 117, 7, 10)
  rect(204, 113, 7, 20)

/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
  if(mouseIsPressed){
    fill(255, 127, 127) // pink
    triangle(228, 103, 230, 121, 234, 110) //mouth//check each frame to see if the mouse is pressed, then do something
  } else {
    // do something here if the mouse is NOT pressed
  }
}

/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed(){
  // add code here if you want something to execute once each time the mouse is pressed
}