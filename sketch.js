var fixedRect, movingRect;
var object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;

  object1=createSprite(100,100,50,50);
  object1.shapeColor="orange";
  object2=createSprite(200,100,50,50);
  object2.shapeColor="blue";
  object3=createSprite(300,100,50,50);
  object3.shapeColor="yellow";
  object4=createSprite(400,100,50,50);
  object4.shapeColor="white";

}

function draw() {
  background(0,0,0);  

movingRect.x=mouseX;
  movingRect.y=mouseY;

  //bounceOff(movingRect,fixedRect);
  if(isTouching(object1,movingRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
    object1.shapeColor="red";
    object2.shapeColor="red";
    object3.shapeColor="red";
    object4.shapeColor="red";
  
    }
    else{
      fixedRect.shapeColor="green";
      movingRect.shapeColor="green";
      object1.shapeColor="orange";
      object2.shapeColor="blue";
      object3.shapeColor="yellow";
      object4.shapeColor="white";
  
    }
  drawSprites();
}