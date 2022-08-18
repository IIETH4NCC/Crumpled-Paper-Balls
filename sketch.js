
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	ground =new Ground(400,700,1600,100);
	ceiling =new Ground(400,0,1600,30);
	bin1 =new Ground(600,600,15,100);
	bin2 =new Ground(690,600,15,100);
	right =new Ground(0,600,15,900);
	left =new Ground(800,600,15,900);
	var ballOptions={
		isStatic: false,
		restitution:0.3,
		friction: 0,
		density: 1.2

	   }
	//Create the Bodies Here.
	ball=Bodies.circle(50,0,20,ballOptions);
	World.add(world,ball);



	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("lightblue");

 ground.show();
 bin1.show();
 bin2.show();
  ellipse(ball.position.x,ball.position.y,20);

 textSize(20);
 fill("black");
 text("Crumpled paper balls",300,70)
 
 textSize(50);
 fill("red");
 text("RECYCLE NOW!",200,130)

 textSize(15);
 fill("black");
 text("or pay the price...",330,160)

 textSize(15);
 fill("green");
 text("Big Bad Bin",605,600)


 Engine.update(engine);

 if(keyDown(UP_ARROW)&& ball.y>=630){
	keyPressed();
 }



  drawSprites();
 
}





function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,{x:50,y:-80},{x:50,y:-80})
	}
}