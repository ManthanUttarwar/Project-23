var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,redboxbase,redboxleft,redboxright;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	redboxbase = createSprite(width/2,660,200,20)
	redboxbase.shapeColor = "red";  

	redboxleft = createSprite(310,620,20,100);
	redboxleft.shapeColor = "red";  

    redboxright = createSprite(510,620,20,100);
	redboxright.shapeColor = "red";   

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	redboxbase = Bodies.rectangle(width/2,640,200,20);
	World.add(world,redboxbase);               

    redboxleft = Bodies.rectangle(310,620,20,100);
	World.add(world,redboxleft);
	
	redboxright = Bodies.rectangle(510,620,20,100);
	World.add(world,redboxright); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //Engine.update(world);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
  Matter.Body.setStatic(redboxbase,false);
   
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false)
  }
}



