var ball,img,paddle;
function preload() {
  ballimage=loadImage("ball.png")
  paddleimage=loadImage("paddle.png")
  /* preload your images here of the ball and the paddle */
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(40,200,20,20);
  ball.addImage (ballimage)
  ball.velocityX=-9;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimage)
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle,explosion);
  paddle.collide(edges);
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
    /* what should happen when you press the UP Arrow Key */
  }
  

  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}
function explosion()
{
  ball.velocityY=random(-8,8);
}



