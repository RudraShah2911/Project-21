var bullet, wall, thickness ;
var speed; weight



function setup() {
  createCanvas(1600,400);

  bullet = createSprite(100, 200, 30, 10);
  bullet.shapeColor = "white"
  speed = random(223,321)
  weight = random(30,52) 
  thickness = random(22,83)
  bullet.velocityX = speed; 
  wall = createSprite(1500,200,thickness,height/2)
  wall.shapeColor = (80,80,80)
}

function draw() {
  background("black");  

  

  if (wall.x - bullet.x < (bullet.width + wall.width)/2){
   bullet.velocityX = 0
    var damage = 0.5 * random(400,1500) * speed * speed / thickness * thickness * thickness
    if (damage>10){
      wall.shapeColor = ("red")
    }

     if (damage<10){
      wall.shapeColor = ("green")
    }
  }

  drawSprites();
}