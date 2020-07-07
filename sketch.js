var bubble
var  flag

var bubbleGroup1,BallMakingGroup
var bubbleGroup2, bubbleGroup3, bubbleGroup4
var score = 0;
var health = 500;

function preload() {
  Ball = loadImage("BALL.png")
  FLAG = loadImage("whiteFlag.png")
}

function setup() {
  createCanvas(400,400);

 flag =  createSprite(200, 200, 50, 50);
 flag.addImage("FLAG", FLAG )
 flag.scale = 0.1;

  bubbleGroup1 = new Group();
  bubbleGroup2 = new Group();
  bubbleGroup3 = new Group();
  bubbleGroup4 = new Group();
BallMakingGroup = new Group();

}

function draw() {
  background(9,244,88);  
  spawnBubble();

ballMaking();


  text("Health :::" + health,200,50)

  if(bubbleGroup1.isTouching(flag)){
    health = health - 15
}

if(bubbleGroup2.isTouching(flag)){
  health = health - 15
}

if(bubbleGroup3.isTouching(flag)){
  health = health - 15
}

if(bubbleGroup4.isTouching(flag)){
  health = health - 15
}


text("Score::" + score ,200,90)


 if(bubbleGroup1.bounceOff(BallMakingGroup)){

  score = score + 2
 }
 if(bubbleGroup2.bounceOff(BallMakingGroup)){

  score = score + 2
 }
 if(bubbleGroup3.bounceOff(BallMakingGroup)){

  score = score + 2
 }
 if(bubbleGroup4.bounceOff(BallMakingGroup)){

  score = score + 2
 }

 if(keyIsDown(UP_ARROW)){
  flag.velocityY = -3
}

if(keyIsDown(DOWN_ARROW)){
  flag.velocityY = 3
}

if(keyIsDown(RIGHT_ARROW) ){
  flag.velocityX = 3
}

if(keyIsDown(LEFT_ARROW)){
  flag.velocityX = -3
}

  drawSprites();
}


function spawnBubble(){
if(frameCount % 50 === 0){

bubble = createSprite(400,random(0,400),30,30)
bubble.addImage("ball",Ball)
bubble.scale = 0.1
bubble.velocityX = -2
bubble.velocityY = -2
bubble.lifetime = 500

bubble2 = createSprite(random(0,400),400,30,30)
bubble2.addImage("ball",Ball)
bubble2.scale = 0.1
bubble2.velocityX = 2
bubble2.velocityY = -2
bubble2.lifetime = 500


bubble3 = createSprite(0,random(0,400),30,30)
bubble3.addImage("ball",Ball)
bubble3.scale = 0.1
bubble3.velocityX = 2
bubble3.velocityY = -2
bubble3.lifetime = 500

bubble4 = createSprite(random(0,400),0,30,30)
bubble4.addImage("ball",Ball)
bubble4.scale = 0.1
bubble4.velocityX = -2
bubble4.velocityY = 2
bubble4.lifetime = 500





bubbleGroup1.add(bubble)
bubbleGroup2.add(bubble2)
bubbleGroup3.add(bubble3)
bubbleGroup4.add(bubble4)


}

}

function ballMaking(){

  if (keyDown("space")) {
  
  if ( frameCount % 2 === 0 ) {
    var ball = createSprite(flag.x, flag.y,20,10);
   ball.velocityY = - 20;
   ball.scale = 0.21;
   
   ball.x = flag.x;
 
  
   ball.lifetime = 235;
    BallMakingGroup.add(ball);
  }
}
}
