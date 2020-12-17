const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ground,paper;
var ball
function preload()
{
	
}

function setup() {
	createCanvas(1200,400);

	
	engine = Engine.create();
	world = engine.world;

//Create the Bodies Here.
box1= new Box(730,385,180,10)
box2= new Box(645,350,10,100)
box3= new Box(815,350,10,100)
/*var options ={
  restitution:1
}*/

//ball = Bodies.circle(200,100,20,options);
//World.add(world,ball);
  
ground=new Ground(10,400,10000,20)
   ball=new Paper() ;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  ball.display();
  //ellipseMode(RADIUS);
  //ellipse(ball.position.x, ball.position.y, 20, 20);
  drawSprites();
}

function keyPressed() { 
  if (keyCode === UP_ARROW) { 
    Matter.Body.applyForce(ball.body,ball.body.position,{x:40,y:-85}); } 
  }

