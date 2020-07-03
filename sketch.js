var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,BoxLeftSide,BoxBottomSide,BoxRightSide;
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

	BoxRightSide=createSprite(450,610,20,100);
	BoxRightSide.shapeColor="red"
	BoxLeftSide=createSprite(250,610,20,100);
	BoxLeftSide.shapeColor="red"
	BoxBottomSide=createSprite(350,650,200,20);
	BoxBottomSide.shapeColor="red"


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.x=helicopterSprite.x
  packageSprite.collide(BoxRightSide);
  packageSprite.collide(BoxLeftSide);
  packageSprite.collide(BoxBottomSide);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
    
  }
if(keyDown(LEFT_ARROW)){
	helicopterSprite.velocityX=-3;
}
if(keyDown(RIGHT_ARROW)){
	helicopterSprite.velocityX=3;
}
}



