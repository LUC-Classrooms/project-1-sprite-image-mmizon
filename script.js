/**
 * Project 1 - Interactive Image
 * Name: Madison Mizon;
    Completion date ______;
    Basic description of the image: a possum;
    Basic description of user interactions to expect;
    Citations of any code sources used for reference: I googled the color codes for all the colors I used. Also used the textbook;
    */

// Global Variables go here
var x = 0 //horizontal location 
var y = 0 //vertical location

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas

}

function draw(){
  // this function runs again and again (60x per second)
  background(200); //light gray background

  push(); // create a new temporary drawing layer
  translate(width/4, height/4)

  /* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
if(mouseIsPressed){
  rotate(-.2)
  fill(255, 127, 127) // pink
  triangle(x+30, 3, x+32, 21, x+36, 10) //mouth
} else {
  rotate(0)
}


  // add your image drawing code here
  //drawing body: 
  fill(228, 228, 228) //grey for body
  ellipse(x+0, y+0, 80, 40) //body
  fill(250) //back to white

  //face
  triangle(x+20, -10, x+43, -15, x+40, 20) //face
  fill(0) //black eyes
  ellipse (x+38, -5, 3) //eyes
  ellipse (x+30, -6, 3)
  fill(255, 192, 203) // pink
  ellipse (x+40, 18, 5) //nose
  arc(x+23, -10, 8, 20, PI, TWO_PI) //ears
  arc(x+38, -12, 8, 20, PI, TWO_PI)

  //tail and legs
  fill(200) //grey tail
  arc(x+-58, -4, 40, 25, TWO_PI, PI) //tail
  fill(250) //back to white
  rect(x+-27, 12, 7, 21) //legs
  rect(x+-15, 20, 7, 10)
  rect(x+20, 17, 7, 10)
  rect(x+4, 13, 7, 20)

  pop(); // dispose of the drawing layer

  //movement
  x = x + .2;
  if(x>100){
    x = 0;
  } 

  } 
