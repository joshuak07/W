
var bullets,wall;


var speed, weight; 
var thickness;

function setup() {
  createCanvas(1600, 400);


	speed=random(55,90)
	weight=random(400,1500)


	bullets=createSprite(50, 200, 50,50);   
thickness =createSprite(23,83);
	bullets.velocityX = speed;

	bullets.shapeColor=color(255);


  
  	wall=createSprite(1200,200, 60, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-bullets.x < (bullets.width+wall.width)/2)
  {
  	bullets.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
	if(deformation>180)
	{
		bullets.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		carr.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		carr.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}


