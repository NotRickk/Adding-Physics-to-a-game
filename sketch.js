const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;

var ground;

var ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

   var grounds= {
     isStatic : true
   }
   var ball2 = {
    restitution:3
   }
ground = Bodies.rectangle (200,390,400,20,grounds);
ball = Bodies.circle (200,200,25,ball2)
World.add(world,ground);
World.add(world,ball);
console.log(ground.position.x)
console.log(ground.position.y);
}

function draw() {
  background(0);  
  Engine.update(engine);
 fill ("red");
 rectMode(CENTER);
 rect (ground.position.x,ground.position.y,400,20);
  
ellipseMode (RADIUS);
 ellipse(ball.position.x,ball.position.y,25)
}