var fixedRect,movingRect,car,wall

function setup() {
  createCanvas(1200,1000);
  fixedRect=createSprite(400, 200, 50, 80);
  
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(400, 200, 80, 30);

  movingRect.shapeColor="green";
  movingRect.debug=true;

car=createSprite(200,200,40,40);
car.shapeColor="red";
wall=createSprite(1000,200,20,100);
wall.shapeColor="pink";
car.velocityX=4;
}

function draw() {
  background(0); 
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;
  
 if (isTouching(car,wall)) {
   car.shapeColor="blue";
  // car.velocityX=0;
   fill("yellow");
   text("car is touching",100,200);
 }
 BounceOff(car,wall);
  drawSprites();
}
