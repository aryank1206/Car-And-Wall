var wall, car
var speed,weight




function setup() {
  createCanvas(800,400);
  backgroundColor="black"
  speed=random(50,100);
  weight=random(400,1500);

  car=createSprite(200,200,20,20);
  car.shapeColor="white"
  wall=createSprite(600,200,40,60);
  wall.shapeColor="white"
}

function draw() {
  car.velocityX=speed;

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0)
    }

    if(deformation<180 && deformation>80)
    {
      car.shapeColor=color(230,230,0)
    }

    if(deformation<80)
    {
      car.shapeColor=color(0,255,0)
    }
  }
  background(0);  
  drawSprites();
}