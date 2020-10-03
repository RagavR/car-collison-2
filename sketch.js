function setup() {
  createCanvas(800,400);
   movingrect =createSprite(400,200, 50, 50);
  movingrect.shapeColor="green";
   fixedrect =createSprite(200,200,80,50);
  fixedrect.shapeColor="green";

  gameobject1=createSprite(100,200,40,50);
  gameobject1.shapeColor="green";

  gameobject2=createSprite(300,200,40,50);
  gameobject2.shapeColor="green";
  gameobject2.velocityX=1;

  gameobject3=createSprite(400,200,40,50);
  gameobject3.shapeColor="green";

  gameobject4=createSprite(500,200,40,50);
  gameobject4.shapeColor="green";
  gameobject4.velocityX=-4;
  
  

}

function draw() {
  background(255,255,255);  

  movingrect.y=World.mouseY;
  movingrect.x=World.mouseX;

 if (istouching(movingrect,gameobject4)){
   movingrect.shapeColor="red";
   gameobject4.shapeColor="red";
 }
else {
  movingrect.shapeColor="green";
  gameobject4.shapeColor="green";
}

bounceoff(gameobject2,gameobject4);

  drawSprites();
}


