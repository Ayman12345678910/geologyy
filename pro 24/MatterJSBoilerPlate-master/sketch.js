
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var circle;
var hammer;
var plane;
var stone;

function preload()
{
	
}

function setup() {
	createCanvas(1550, 780);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	circle=new Circle(600,0,70);
    hammer= new Hammer(600,600);
	plane = new Plane(600,height,1200,20);  
	stone = new Stone (600,600, 100,100);
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  circle.display();
  hammer.display();
  plane.display();
  stone.display();
  drawSprites();
 
}



