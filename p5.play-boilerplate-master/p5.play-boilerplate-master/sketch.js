//variables have been created 
var car,wall;
var speed,weight;
var guardrail,guardrail2;




function setup() {
  createCanvas(1600,400);
 
  //values for variables 
  speed = random(55,90);
  weight = random(400,1500);
 
  //sprites have been created 
  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  
  wall = createSprite(1500,200,20,height/2);
  wall.shapeColor = color(80,80,80);
  
  guardrail = createSprite(800,300,1600,20);
  guardrail.shapeColor = "yellow"
  
  guardrail2 = createSprite(800,100,1600,20);
  guardrail2.shapeColor = "yellow"

}



function draw() {
  background("black");  
  
  if (wall.x-car.x < (car.width + wall.width)/2) {
    
    car.velocityX = 0;
    var deformation =0.5 * weight * speed * speed/22509;
} 
 
if(deformation>180){
      car.shapeColor = color(255,0,0);
  }
  
 if (deformation < 180 && deformation > 100) {
  car.shapeColor = color(230,230,0);
}
 
if (deformation > 100) {
  car.shapeColor = color(0,255,0);
}

 drawSprites();
} 
  
 
