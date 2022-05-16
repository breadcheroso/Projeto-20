
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine
let world
var block1
var block2
var block3
var ground

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var block1_options = {
		restitution: 0.6,
		frictionAir: 0.3
		
	}
	var block2_options = {
		restitution: 0.8,
		frictionAir: 0.2
	}
	var block3_options = {
		restitution: 0.95,
		frictionAir: 0.1
	}
	var ground_options = {
		isStatic: true
	}
	//Crie os Corpos Aqui.
	block1 = Bodies.rectangle(200,50,10,10,block1_options)
	World.add(world,block1)
	

	block2 = Bodies.rectangle(350,50,10,10,block2_options)
	World.add(world,block2)

	block3 = Bodies.circle(50,50,10,block3_options)
	World.add(world,block3)

	ground = Bodies.rectangle(600,650,1200,53,ground_options)
	World.add(world,ground)
	
	rectMode(CENTER)
	ellipseMode(RADIUS)
  Engine.run(engine);
}


function draw() {
	background(50);
	Engine.update(engine)

	ellipse(block3.position.x,block3.position.y,25)
	rect(block1.position.x,block1.position.y,50,50)
	rect(block2.position.x,block2.position.y,100,50)
	rect(ground.position.x,ground.position.y,1200,20)
	drawSprites()
 
}



